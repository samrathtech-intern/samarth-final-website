import crypto from 'crypto';

const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'admin123';
}

function getSecretKey(): string {
  const pass = getAdminPassword();
  return crypto.createHash('sha256').update(`samarth-cms-${pass}`).digest('hex');
}

export function verifyPassword(password: string): boolean {
  const targetPassword = getAdminPassword();
  if (!password || !targetPassword) return false;

  const inputBuffer = Buffer.from(password.trim());
  const targetBuffer = Buffer.from(targetPassword.trim());

  if (inputBuffer.length !== targetBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(inputBuffer, targetBuffer);
}

/**
 * Creates a stateless, tamper-proof HMAC session token.
 * Format: `<timestamp>.<hmacSignature>`
 * Works across serverless instances, lambdas, and restarts.
 */
export function createSession(): string {
  const timestamp = Date.now().toString();
  const secret = getSecretKey();
  const hmac = crypto.createHmac('sha256', secret).update(timestamp).digest('hex');
  return `${timestamp}.${hmac}`;
}

/**
 * Validates the HMAC signature and checks timestamp expiry.
 */
export function verifySession(token: string | null | undefined): boolean {
  if (!token || typeof token !== 'string') return false;

  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [timestampStr, providedSignature] = parts;
  const timestamp = parseInt(timestampStr, 10);

  if (isNaN(timestamp)) return false;

  // Check TTL
  if (Date.now() - timestamp > SESSION_TTL_MS || timestamp > Date.now() + 60000) {
    return false;
  }

  // Verify HMAC signature
  const secret = getSecretKey();
  const expectedSignature = crypto.createHmac('sha256', secret).update(timestampStr).digest('hex');

  const providedBuf = Buffer.from(providedSignature);
  const expectedBuf = Buffer.from(expectedSignature);

  if (providedBuf.length !== expectedBuf.length) {
    return false;
  }

  return crypto.timingSafeEqual(providedBuf, expectedBuf);
}

export function invalidateSession(_token: string | null | undefined): void {
  // Stateless token invalidated by clearing client cookie
}
