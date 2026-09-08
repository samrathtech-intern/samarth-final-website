import crypto from 'crypto';

// In-memory session store: token -> expiry timestamp (ms)
// For local/single-process Node server. Also persists sessions during uptime.
const sessions = new Map<string, number>();

const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || 'admin123';
}

export function verifyPassword(password: string): boolean {
  const targetPassword = getAdminPassword();
  const inputBuffer = Buffer.from(password);
  const targetBuffer = Buffer.from(targetPassword);

  if (inputBuffer.length !== targetBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(inputBuffer, targetBuffer);
}

export function createSession(): string {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = Date.now() + SESSION_TTL_MS;
  sessions.set(token, expiresAt);
  return token;
}

export function verifySession(token: string | null | undefined): boolean {
  if (!token) return false;
  const expiresAt = sessions.get(token);
  if (!expiresAt) return false;

  if (Date.now() > expiresAt) {
    sessions.delete(token);
    return false;
  }

  return true;
}

export function invalidateSession(token: string | null | undefined): void {
  if (token) {
    sessions.delete(token);
  }
}
