export function getServiceIconPath(title: string): string {
  const t = title.toLowerCase();

  // Specific strict matches first
  if (t.includes('14001')) return '/icons/ISO 14001-icon.png';
  if (t.includes('45001')) return '/icons/ISO 45001-icon.jpeg';
  if (t.includes('17025')) return '/icons/SO 17025-icon.png';
  if (t.includes('17020')) return '/icons/audit-icon.png';
  if (t.includes('organic')) return '/icons/Organic Certification-icon.jpeg';
  if (t.includes('halal')) return '/icons/Halal Certification-icon.jpeg';
  if (t.includes('kosher')) return '/icons/Kosher Certification-icon.jpeg';
  if (t.includes('apeda')) return '/icons/APEDA Registration-icon.png';
  if (t.includes('pcqi') || t.includes('fda')) return '/icons/🇺🇸-fda-icon.jpeg';
  if (t.includes('zed') || t.includes('msme') || t.includes('lean')) return '/icons/msme-zed-icon.jpeg';
  if (t.includes('fssc')) return '/icons/fssc-icon.png';
  if (t.includes('fssai')) return '/icons/fssai-icon.jpg';
  if (t.includes('global') || t.includes('g.a.p')) return '/icons/global-gap-icon.png';
  if (t.includes('brc')) return '/icons/brc-icon.png';
  if (t.includes('haccp')) return '/icons/haccp-icon.jpeg';
  if (t.includes('ghp')) return '/icons/ghhp-icon.jpeg';
  if (t.includes('gmp')) return '/icons/gmp-icon.jpeg';
  if (t.includes('nabl')) return '/icons/nabl-icon.png';
  if (t.includes('iso')) return '/icons/iso-icon.jpeg';

  // Generic category matches
  if (t.includes('training')) return '/icons/training-icon.png';
  if (t.includes('audit')) return '/icons/audit-icon.png';
  if (t.includes('lab')) return '/icons/lab-icon.jpeg';
  if (t.includes('factory') || t.includes('plant')) return '/icons/factory-icon.png';
  if (t.includes('document')) return '/icons/doc-icon.png';
  if (t.includes('equipment') || t.includes('machine')) return '/icons/equipment-icon.png';
  if (t.includes('sustain') || t.includes('environment')) return '/icons/sustanability-icon.png';
  if (t.includes('safety')) return '/icons/foodsafety-icon.jpeg';

  // Default fallback if no match found
  return '/icons/iso-icon.jpeg';
}

