import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import {
  galleryItems as defaultGalleryItems,
  certificateItems as defaultCertificateItems,
  galleryCategories as defaultGalleryCategories,
} from '@/lib/data';

// ── Types ────────────────────────────────────────────────────────────────────

export type GalleryItem = {
  src: string;
  title: string;
  tag: string;
  category: string;
};

export type AdminData = {
  galleryItems: GalleryItem[];
  certificateItems: GalleryItem[];
  galleryCategories: string[];
  brands: string[];
};

// ── Default brands (fallback from TrustedByMarquee.tsx) ──────────────────────

const defaultBrands = [
  "ABInBev.png", "Aditya Milk.png", "Allied Blenders & Distillers.jpeg", "Bailley.jpeg", "Bisleri.jpeg", "Diageo.png", "Dinshaw's.png", "Gits Food Products.png", "Haldiram's.png", "Havmor.png", "Heineken.png", "Heritage Foods.png", "ITC.png", "Kwality Wall's.png", "Lactalis India.png", "Lotte.png", "Marrio Marquis.png", "Meraki Hospitality.png", "Modi_dairy.jpeg", "Pernod Ricard.png", "Schreiber Dynamix Dairies.png", "Sonai Dairy.jpeg", "Stregis.png", "Suruchi Dairy.png", "Ubgroup.png", "Vadilal.png", "amul.png", "amwaj.png", "anglo-eastern.png", "bacardi.png", "bademiya.jpeg", "campa.png", "caneindia.jpeg", "chitale_agro.jpeg", "chitale_dairy.png", "cocacola.jpeg", "compassgroup.png", "dairy_power.jpeg", "daund_sugar.jpeg", "irctc.jpeg", "katraj_dairy.jpeg", "khatri_bandhu.jpeg", "modelez.jpeg", "modern_dairy.png", "moon_bev.png", "mother_dairy.png", "nandini.jpeg", "natural_sugar.jpeg", "nestle.jpeg", "osi.png", "oxycool.png", "parag_milk.png", "paras.jpeg", "parle_Agro.jpeg", "parle_products.png", "piyush_nutra.png", "ponlait.png", "pride_hotels.png", "radico_spirit.jpeg", "sahydri.png", "sphurti.jpeg", "tat.jpeg", "the_leela.png", "vasundhra.jpeg", "vishaka.jpeg", "yemek_doha.png", "wave-bev.jpeg", "vishaka-dairy.jpeg", "mehendale-farm.jpeg", "7-apple.jpeg", "katdare.jpeg", "makson.jpeg", "morde.jpeg", "rib-ballon.jpeg"
];

// ── File path ────────────────────────────────────────────────────────────────

const DATA_FILE = join(process.cwd(), 'data', 'admin-data.json');

// ── Read / Write helpers ─────────────────────────────────────────────────────

function readData(): AdminData {
  try {
    if (existsSync(DATA_FILE)) {
      const raw = readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw) as AdminData;
    }
  } catch {
    // Fall through to defaults
  }

  return {
    galleryItems: defaultGalleryItems as GalleryItem[],
    certificateItems: defaultCertificateItems as GalleryItem[],
    galleryCategories: [...defaultGalleryCategories],
    brands: [...defaultBrands],
  };
}

function writeData(data: AdminData): void {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// ── Public API ───────────────────────────────────────────────────────────────

// Gallery items
export function getGalleryItems(): GalleryItem[] {
  return readData().galleryItems;
}

export function setGalleryItems(items: GalleryItem[]): void {
  const data = readData();
  data.galleryItems = items;
  writeData(data);
}

export function addGalleryItem(item: GalleryItem): void {
  const data = readData();
  data.galleryItems.push(item);
  writeData(data);
}

export function removeGalleryItem(src: string): boolean {
  const data = readData();
  const before = data.galleryItems.length;
  data.galleryItems = data.galleryItems.filter((i) => i.src !== src);
  if (data.galleryItems.length === before) return false;
  writeData(data);
  return true;
}

export function updateGalleryItem(src: string, updates: Partial<GalleryItem>): boolean {
  const data = readData();
  const idx = data.galleryItems.findIndex((i) => i.src === src);
  if (idx === -1) return false;
  data.galleryItems[idx] = { ...data.galleryItems[idx], ...updates };
  writeData(data);
  return true;
}

// Certificate items
export function getCertificateItems(): GalleryItem[] {
  return readData().certificateItems;
}

export function setCertificateItems(items: GalleryItem[]): void {
  const data = readData();
  data.certificateItems = items;
  writeData(data);
}

export function addCertificateItem(item: GalleryItem): void {
  const data = readData();
  data.certificateItems.push(item);
  writeData(data);
}

export function removeCertificateItem(src: string): boolean {
  const data = readData();
  const before = data.certificateItems.length;
  data.certificateItems = data.certificateItems.filter((i) => i.src !== src);
  if (data.certificateItems.length === before) return false;
  writeData(data);
  return true;
}

// Gallery categories
export function getGalleryCategories(): string[] {
  return readData().galleryCategories;
}

export function setGalleryCategories(categories: string[]): void {
  const data = readData();
  data.galleryCategories = categories;
  writeData(data);
}

// Brands
export function getBrands(): string[] {
  return readData().brands;
}

export function setBrands(brands: string[]): void {
  const data = readData();
  data.brands = brands;
  writeData(data);
}

export function addBrand(filename: string): void {
  const data = readData();
  if (!data.brands.includes(filename)) {
    data.brands.push(filename);
    writeData(data);
  }
}

export function removeBrand(filename: string): boolean {
  const data = readData();
  const before = data.brands.length;
  data.brands = data.brands.filter((b) => b !== filename);
  if (data.brands.length === before) return false;
  writeData(data);
  return true;
}

// Proof certificate items (filtered — same logic as data.ts)
export function getProofCertificateItems(): GalleryItem[] {
  return getCertificateItems().filter((item) => {
    const searchable = `${item.title} ${item.tag} ${item.src}`.toLowerCase();
    return !searchable.includes('gst') && !searchable.includes('udyog') && !searchable.includes('udyam');
  });
}
