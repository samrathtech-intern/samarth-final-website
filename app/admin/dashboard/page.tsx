'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type GalleryItem = {
  src: string;
  title: string;
  tag: string;
  category: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'gallery' | 'brands'>('gallery');
  const [loading, setLoading] = useState(true);

  // Gallery state
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [gallerySearch, setGallerySearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Brands state
  const [brands, setBrands] = useState<string[]>([]);
  const [brandSearch, setBrandSearch] = useState('');

  // Modals & Feedback
  const [isAddGalleryOpen, setIsAddGalleryOpen] = useState(false);
  const [isEditGalleryOpen, setIsEditGalleryOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  const [isAddBrandOpen, setIsAddBrandOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form states for adding gallery
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states for adding brand
  const [brandFile, setBrandFile] = useState<File | null>(null);
  const [brandPreview, setBrandPreview] = useState<string | null>(null);
  const [brandFilename, setBrandFilename] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const brandFileInputRef = useRef<HTMLInputElement>(null);

  // Load initial data
  const fetchData = async () => {
    try {
      // Check auth
      const authRes = await fetch('/api/admin/session');
      const authData = await authRes.json();
      if (!authData.authenticated) {
        router.replace('/admin');
        return;
      }

      // Fetch gallery items
      const galRes = await fetch('/api/admin/gallery');
      const galData = await galRes.json();
      if (galData.ok) {
        setGalleryItems(galData.items || []);
        setCategories(galData.categories || []);
      }

      // Fetch brands
      const brandRes = await fetch('/api/admin/brands');
      const brandData = await brandRes.json();
      if (brandData.ok) {
        setBrands(brandData.brands || []);
      }

      setLoading(false);
    } catch {
      router.replace('/admin');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showToast = (type: 'success' | 'error', text: string) => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  // ── Image Compressor Helper ────────────────────────────────────────────────
  const compressImage = async (file: File, maxWidth = 1600, quality = 0.82): Promise<{ file: File; dataUrl: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL('image/jpeg', quality);
            canvas.toBlob((blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), {
                  type: 'image/jpeg',
                });
                resolve({ file: compressedFile, dataUrl });
              } else {
                resolve({ file, dataUrl: e.target?.result as string });
              }
            }, 'image/jpeg', quality);
          } else {
            resolve({ file, dataUrl: e.target?.result as string });
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  // ── Gallery Actions ─────────────────────────────────────────────────────────

  const handleGalleryFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewImagePreview(URL.createObjectURL(file));
      setNewImageFile(file);
    }
  };

  const handleAddGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      showToast('error', 'Title is required');
      return;
    }
    if (!newImageFile) {
      showToast('error', 'Please select an image file to upload');
      return;
    }

    setSubmitting(true);
    try {
      // 1. Optimize image before upload
      const { file: optimizedFile, dataUrl: fallbackDataUrl } = await compressImage(newImageFile);

      // 2. Upload image to server
      const formData = new FormData();
      formData.append('file', optimizedFile);
      formData.append('folder', 'gallery');

      let uploadedUrl = fallbackDataUrl;

      try {
        const uploadRes = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadRes.json();
        if (uploadRes.ok && uploadData?.url) {
          uploadedUrl = uploadData.url;
        }
      } catch (uploadErr) {
        console.warn('Direct upload endpoint error, using optimized data URL:', uploadErr);
      }

      // 3. Save gallery item to persistent store
      const finalCategory = newCategory === 'NEW' ? customCategory.trim() : newCategory;
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item: {
            src: uploadedUrl,
            title: newTitle.trim(),
            tag: newTag.trim() || finalCategory || 'Gallery',
            category: finalCategory || 'Consulting Work',
          },
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setGalleryItems(data.items);
        showToast('success', 'Gallery photo saved permanently!');
        setIsAddGalleryOpen(false);
        // Reset form
        setNewTitle('');
        setNewTag('');
        setNewCategory('');
        setCustomCategory('');
        setNewImageFile(null);
        setNewImagePreview(null);
      } else {
        showToast('error', data.message || 'Failed to save item');
      }
    } catch {
      showToast('error', 'An error occurred while adding gallery item');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingItem) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          src: editingItem.src,
          updates: {
            title: editingItem.title,
            tag: editingItem.tag,
            category: editingItem.category,
          },
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setGalleryItems(data.items);
        showToast('success', 'Gallery item updated successfully!');
        setIsEditGalleryOpen(false);
        setEditingItem(null);
      } else {
        showToast('error', data.message || 'Failed to update item');
      }
    } catch {
      showToast('error', 'An error occurred while updating item');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteGalleryItem = async (src: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ src }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setGalleryItems(data.items);
        showToast('success', `Deleted "${title}"`);
      } else {
        showToast('error', data.message || 'Failed to delete');
      }
    } catch {
      showToast('error', 'An error occurred while deleting item');
    }
  };

  // ── Brand Actions ───────────────────────────────────────────────────────────

  const handleBrandFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBrandFile(file);
      setBrandPreview(URL.createObjectURL(file));
      setBrandFilename(file.name);
    }
  };

  const handleAddBrandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandFile && !brandFilename.trim()) {
      showToast('error', 'Please select a logo file to upload');
      return;
    }

    setSubmitting(true);
    try {
      let finalFilename = brandFilename.trim();

      if (brandFile) {
        const formData = new FormData();
        formData.append('file', brandFile);
        formData.append('folder', 'brands');

        const uploadRes = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadRes.json();

        if (!uploadRes.ok || !uploadData.ok) {
          showToast('error', uploadData.message || 'Brand upload failed');
          setSubmitting(false);
          return;
        }
        finalFilename = uploadData.filename;
      }

      const res = await fetch('/api/admin/brands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: finalFilename }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setBrands(data.brands);
        showToast('success', 'Brand logo added to marquee!');
        setIsAddBrandOpen(false);
        setBrandFile(null);
        setBrandPreview(null);
        setBrandFilename('');
      } else {
        showToast('error', data.message || 'Failed to add brand');
      }
    } catch {
      showToast('error', 'An error occurred while adding brand');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteBrand = async (filename: string) => {
    if (!confirm(`Remove "${filename}" from bottom scrolling marquee?`)) return;

    try {
      const res = await fetch('/api/admin/brands', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setBrands(data.brands);
        showToast('success', `Removed "${filename}"`);
      } else {
        showToast('error', data.message || 'Failed to remove');
      }
    } catch {
      showToast('error', 'An error occurred while deleting brand');
    }
  };

  // Filtered gallery items
  const filteredGallery = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(gallerySearch.toLowerCase()) ||
      item.tag.toLowerCase().includes(gallerySearch.toLowerCase()) ||
      item.category.toLowerCase().includes(gallerySearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filtered brands
  const filteredBrands = brands.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  if (loading) {
    return (
      <div className="admin-login-wrapper">
        <div style={{ color: '#9ca3af', fontSize: '0.95rem' }}>Loading CMS Dashboard...</div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      {/* ── Sidebar ── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <img
            src="/final_logo_transparent.png"
            alt="Samarth Logo"
            className="admin-sidebar-logo"
          />
          <div className="admin-sidebar-tagline">CMS Dashboard</div>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            Gallery Photos ({galleryItems.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'brands' ? 'active' : ''}`}
            onClick={() => setActiveTab('brands')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            Marquee Logos ({brands.length})
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={handleLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <main className="admin-main">
        {/* Top bar */}
        <header className="admin-topbar">
          <h2 className="admin-topbar-title">
            {activeTab === 'gallery' ? 'Gallery & Photos Manager' : 'Trusted By Marquee Logos'}
          </h2>

          <div className="admin-topbar-actions">
            <Link href="/" target="_blank" className="admin-view-site-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Live Website
            </Link>
          </div>
        </header>

        <div className="admin-content">
          {/* Toast Message */}
          {statusMessage && (
            <div className={statusMessage.type === 'success' ? 'admin-success-box' : 'admin-error-box'}>
              {statusMessage.text}
            </div>
          )}

          {/* Stats Bar */}
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="admin-stat-icon">📷</div>
              <div>
                <div className="admin-stat-value">{galleryItems.length}</div>
                <div className="admin-stat-label">Total Gallery Photos</div>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                🏢
              </div>
              <div>
                <div className="admin-stat-value">{brands.length}</div>
                <div className="admin-stat-label">Marquee Brand Logos</div>
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                🏷️
              </div>
              <div>
                <div className="admin-stat-value">{categories.length}</div>
                <div className="admin-stat-label">Gallery Categories</div>
              </div>
            </div>
          </div>

          {/* ── TAB 1: GALLERY MANAGER ── */}
          {activeTab === 'gallery' && (
            <div className="admin-card">
              <div className="admin-toolbar">
                <div className="admin-toolbar-left">
                  <input
                    type="text"
                    className="admin-search-input"
                    placeholder="Search gallery by title, tag..."
                    value={gallerySearch}
                    onChange={(e) => setGallerySearch(e.target.value)}
                  />

                  <select
                    className="admin-filter-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="All">All Categories ({galleryItems.length})</option>
                    {categories.filter((c) => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  className="admin-btn-action"
                  onClick={() => {
                    setNewCategory(categories.find((c) => c !== 'All') || 'Consulting Work');
                    setIsAddGalleryOpen(true);
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add New Photo
                </button>
              </div>

              {filteredGallery.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: '#9ca3af' }}>
                  No gallery items match your current filter.
                </div>
              ) : (
                <div className="admin-gallery-grid">
                  {filteredGallery.map((item) => (
                    <article key={item.src} className="admin-gallery-card">
                      <div className="admin-gallery-thumb-wrapper">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="admin-gallery-thumb"
                          loading="lazy"
                        />
                        <span className="admin-gallery-badge">{item.tag}</span>
                      </div>

                      <div className="admin-gallery-info">
                        <h4 className="admin-gallery-title">{item.title}</h4>
                        <div className="admin-gallery-category">Category: {item.category}</div>

                        <div className="admin-gallery-actions">
                          <button
                            className="admin-btn-icon-edit"
                            onClick={() => {
                              setEditingItem({ ...item });
                              setIsEditGalleryOpen(true);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="admin-btn-icon-danger"
                            onClick={() => handleDeleteGalleryItem(item.src, item.title)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── TAB 2: BRANDS MANAGER ── */}
          {activeTab === 'brands' && (
            <div className="admin-card">
              <div className="admin-toolbar">
                <div className="admin-toolbar-left">
                  <input
                    type="text"
                    className="admin-search-input"
                    placeholder="Search brand logo filename..."
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                  />
                </div>

                <button
                  className="admin-btn-action"
                  onClick={() => setIsAddBrandOpen(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add Brand Logo
                </button>
              </div>

              {filteredBrands.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: '#9ca3af' }}>
                  No brand logos match your search.
                </div>
              ) : (
                <div className="admin-brands-grid">
                  {filteredBrands.map((brand) => (
                    <div key={brand} className="admin-brand-card">
                      <div className="admin-brand-logo-box">
                        <img
                          src={`/Brands/${brand}`}
                          alt={brand}
                          className="admin-brand-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="admin-brand-name">{brand}</div>
                      <button
                        className="admin-btn-icon-danger"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => handleDeleteBrand(brand)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* ── MODAL: Add Gallery Photo ── */}
      {isAddGalleryOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsAddGalleryOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Add Photo to Gallery</h3>
              <button className="admin-modal-close" onClick={() => setIsAddGalleryOpen(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleAddGallerySubmit}>
              <div className="admin-modal-body">
                {/* Image Dropzone */}
                <div
                  className="admin-dropzone"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleGalleryFileSelect}
                  />
                  {newImagePreview ? (
                    <div>
                      <img
                        src={newImagePreview}
                        alt="Preview"
                        className="admin-dropzone-preview"
                      />
                      <div style={{ fontSize: '0.8rem', color: '#10b981' }}>
                        Click to choose a different photo
                      </div>
                    </div>
                  ) : (
                    <div>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" style={{ margin: '0 auto 8px', display: 'block' }}>
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      <div style={{ fontWeight: 600, color: '#e5e7eb', marginBottom: 4 }}>
                        Click to browse & upload photo
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                        Supports PNG, JPG, WEBP up to 10MB
                      </div>
                    </div>
                  )}
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Photo Title *</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. Food Safety Training Session"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Category *</label>
                  <select
                    className="admin-select"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    required
                  >
                    {categories.filter((c) => c !== 'All').map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                    <option value="NEW">+ Create New Category...</option>
                  </select>
                </div>

                {newCategory === 'NEW' && (
                  <div className="admin-form-group">
                    <label className="admin-form-label">New Category Name *</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Client Workshops"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="admin-form-group">
                  <label className="admin-form-label">Badge Tag (e.g. Training, Audit, Plant Visit)</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. Training"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={() => setIsAddGalleryOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-btn-modal-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Uploading...' : 'Save Photo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: Edit Gallery Photo ── */}
      {isEditGalleryOpen && editingItem && (
        <div className="admin-modal-overlay" onClick={() => setIsEditGalleryOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Edit Photo Details</h3>
              <button className="admin-modal-close" onClick={() => setIsEditGalleryOpen(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleEditGallerySubmit}>
              <div className="admin-modal-body">
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <img
                    src={editingItem.src}
                    alt={editingItem.title}
                    style={{ maxHeight: 120, borderRadius: 8, objectFit: 'contain' }}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Title *</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Category</label>
                  <select
                    className="admin-select"
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                  >
                    {categories.filter((c) => c !== 'All').map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-form-label">Badge Tag</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={editingItem.tag}
                    onChange={(e) => setEditingItem({ ...editingItem, tag: e.target.value })}
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={() => setIsEditGalleryOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-btn-modal-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Saving...' : 'Update Details'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: Add Brand Logo ── */}
      {isAddBrandOpen && (
        <div className="admin-modal-overlay" onClick={() => setIsAddBrandOpen(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Add Brand to Scrolling Marquee</h3>
              <button className="admin-modal-close" onClick={() => setIsAddBrandOpen(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleAddBrandSubmit}>
              <div className="admin-modal-body">
                <div
                  className="admin-dropzone"
                  onClick={() => brandFileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={brandFileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleBrandFileSelect}
                  />
                  {brandPreview ? (
                    <div>
                      <img
                        src={brandPreview}
                        alt="Preview"
                        className="admin-dropzone-preview"
                        style={{ maxHeight: 70 }}
                      />
                      <div style={{ fontSize: '0.8rem', color: '#10b981' }}>
                        Selected: {brandFilename}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" style={{ margin: '0 auto 8px', display: 'block' }}>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <div style={{ fontWeight: 600, color: '#e5e7eb', marginBottom: 4 }}>
                        Click to upload new brand logo
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                        PNG or transparent logos recommended
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={() => setIsAddBrandOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-btn-modal-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Adding...' : 'Add Brand to Marquee'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
