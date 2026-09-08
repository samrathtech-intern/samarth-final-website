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

// ── File path & Redis Keys ───────────────────────────────────────────────────

const DATA_FILE = join(process.cwd(), 'data', 'admin-data.json');
const REDIS_KEY = 'samarth:admin:data:v2';

let memoryCache: AdminData | null = null;

function getDefaultData(): AdminData {
  return {
    galleryItems: defaultGalleryItems as GalleryItem[],
    certificateItems: defaultCertificateItems as GalleryItem[],
    galleryCategories: [...defaultGalleryCategories],
    brands: [...defaultBrands],
  };
}

// ── Upstash Redis Client ─────────────────────────────────────────────────────

function getUpstashConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token || token === 'PASTE_YOUR_TOKEN_HERE') return null;

  return {
    url: url.replace(/\/$/, ''),
    token,
  };
}

async function runUpstash(command: Array<string | number>): Promise<unknown> {
  const config = getUpstashConfig();
  if (!config) return null;

  try {
    const response = await fetch(`${config.url}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([command]),
      cache: 'no-store',
    });

    if (!response.ok) return null;
    const payload = await response.json();
    const [item] = payload;
    return item?.result ?? null;
  } catch (err) {
    console.warn('Upstash command error:', err);
    return null;
  }
}

// ── Sync File Read/Write ─────────────────────────────────────────────────────

export function readDataSync(): AdminData {
  if (memoryCache) {
    return memoryCache;
  }

  try {
    if (existsSync(DATA_FILE)) {
      const raw = readFileSync(DATA_FILE, 'utf-8');
      memoryCache = JSON.parse(raw) as AdminData;
      return memoryCache;
    }
  } catch {
    // Fall through
  }

  memoryCache = getDefaultData();
  return memoryCache;
}

export function writeDataSync(data: AdminData): void {
  memoryCache = data;
  try {
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Local writeFileSync not permitted in current runtime:', err);
  }
}

// ── Async Persistent Read/Write (Redis + File) ───────────────────────────────

export async function readDataAsync(): Promise<AdminData> {
  const config = getUpstashConfig();
  if (config) {
    try {
      const raw = await runUpstash(['GET', REDIS_KEY]);
      if (raw && typeof raw === 'string') {
        const parsed = JSON.parse(raw) as AdminData;
        if (parsed?.galleryItems && Array.isArray(parsed.galleryItems)) {
          memoryCache = parsed;
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Error reading from Upstash Redis:', err);
    }
  }

  return readDataSync();
}

export async function writeDataAsync(data: AdminData): Promise<void> {
  memoryCache = data;
  writeDataSync(data);

  const config = getUpstashConfig();
  if (config) {
    try {
      await runUpstash(['SET', REDIS_KEY, JSON.stringify(data)]);
    } catch (err) {
      console.warn('Error writing to Upstash Redis:', err);
    }
  }
}

// ── Synchronous Public API (Used for SSR fallbacks) ──────────────────────────

export function getGalleryItems(): GalleryItem[] {
  return readDataSync().galleryItems;
}

export function getCertificateItems(): GalleryItem[] {
  return readDataSync().certificateItems;
}

export function getGalleryCategories(): string[] {
  return readDataSync().galleryCategories;
}

export function getBrands(): string[] {
  return readDataSync().brands;
}

export function getProofCertificateItems(): GalleryItem[] {
  return getCertificateItems().filter((item) => {
    const searchable = `${item.title} ${item.tag} ${item.src}`.toLowerCase();
    return !searchable.includes('gst') && !searchable.includes('udyog') && !searchable.includes('udyam');
  });
}

// ── Asynchronous Public API (Used by Admin API & dynamic SSR) ─────────────────

export async function getGalleryItemsAsync(): Promise<GalleryItem[]> {
  const data = await readDataAsync();
  return data.galleryItems;
}

export async function getGalleryCategoriesAsync(): Promise<string[]> {
  const data = await readDataAsync();
  return data.galleryCategories;
}

export async function getBrandsAsync(): Promise<string[]> {
  const data = await readDataAsync();
  return data.brands;
}

export async function addGalleryItemAsync(item: GalleryItem): Promise<GalleryItem[]> {
  const data = await readDataAsync();
  data.galleryItems.unshift(item); // New photos appear at the top!
  if (!data.galleryCategories.includes(item.category)) {
    data.galleryCategories.push(item.category);
  }
  await writeDataAsync(data);
  return data.galleryItems;
}

export async function removeGalleryItemAsync(src: string): Promise<GalleryItem[]> {
  const data = await readDataAsync();
  data.galleryItems = data.galleryItems.filter((i) => i.src !== src);
  await writeDataAsync(data);
  return data.galleryItems;
}

export async function updateGalleryItemAsync(src: string, updates: Partial<GalleryItem>): Promise<GalleryItem[]> {
  const data = await readDataAsync();
  const idx = data.galleryItems.findIndex((i) => i.src === src);
  if (idx !== -1) {
    data.galleryItems[idx] = { ...data.galleryItems[idx], ...updates };
    await writeDataAsync(data);
  }
  return data.galleryItems;
}

export async function addBrandAsync(filename: string): Promise<string[]> {
  const data = await readDataAsync();
  if (!data.brands.includes(filename)) {
    data.brands.push(filename);
    await writeDataAsync(data);
  }
  return data.brands;
}

export async function removeBrandAsync(filename: string): Promise<string[]> {
  const data = await readDataAsync();
  data.brands = data.brands.filter((b) => b !== filename);
  await writeDataAsync(data);
  return data.brands;
}

export async function setBrandsAsync(brands: string[]): Promise<string[]> {
  const data = await readDataAsync();
  data.brands = brands;
  await writeDataAsync(data);
  return data.brands;
}
