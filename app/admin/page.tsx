'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if already authenticated
    fetch('/api/admin/session')
      .then((res) => res.json())
      .then((data) => {
        if (data?.authenticated) {
          router.replace('/admin/dashboard');
        } else {
          setCheckingAuth(false);
        }
      })
      .catch(() => setCheckingAuth(false));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Incorrect password. Please try again.');
        setLoading(false);
      }
    } catch {
      setError('Unable to authenticate. Please check server connection.');
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="admin-login-wrapper">
        <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Loading Admin CMS...</div>
      </div>
    );
  }

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <Image
            src="/final_team_logo.png"
            alt="Samarth Technoologies Logo"
            width={160}
            height={60}
            className="admin-login-logo"
            style={{ objectFit: 'contain' }}
            priority
          />
          <h1 className="admin-login-title">Admin CMS</h1>
          <p className="admin-login-subtitle">
            Dynamic Control Panel for Gallery & Marquee Logos
          </p>
        </div>

        {error && <div className="admin-error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="admin-pass">
              Admin Access Password
            </label>
            <input
              id="admin-pass"
              type="password"
              className="admin-input"
              placeholder="Enter admin password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </div>

          <button
            type="submit"
            className="admin-btn-primary"
            disabled={loading || !password.trim()}
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
