import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const DEFAULT_VIEW_COUNT_SEED = 1;
const VIEW_COUNTER_KEY = process.env.VIEW_COUNTER_KEY || 'samarth-technoologies:visitor-count';
const VIEW_COUNTER_SEED = Number(process.env.VIEW_COUNTER_SEED || DEFAULT_VIEW_COUNT_SEED);

type CounterResponse = {
  ok: boolean;
  count: number;
  source: 'upstash' | 'fallback';
  message?: string;
};

type UpstashPipelineItem = {
  result?: string | number | null;
  error?: string;
};

function getUpstashConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  return {
    url: url.replace(/\/$/, ''),
    token
  };
}

async function runUpstashCommand(command: Array<string | number>) {
  const config = getUpstashConfig();
  if (!config) return null;

  const response = await fetch(`${config.url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([command]),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Upstash command failed with status ${response.status}`);
  }

  const payload = (await response.json()) as UpstashPipelineItem[];
  const [item] = payload;

  if (item?.error) {
    throw new Error(item.error);
  }

  return item?.result ?? null;
}

function toCount(value: unknown) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric >= 0 ? numeric : VIEW_COUNTER_SEED;
}

async function ensureCounterSeeded() {
  await runUpstashCommand(['SETNX', VIEW_COUNTER_KEY, VIEW_COUNTER_SEED]);
}

function fallbackResponse(message: string) {
  return NextResponse.json<CounterResponse>(
    {
      ok: true,
      count: VIEW_COUNTER_SEED,
      source: 'fallback',
      message
    },
    {
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    }
  );
}

export async function GET() {
  if (!getUpstashConfig()) {
    return fallbackResponse('Visitor count is available.');
  }

  try {
    await ensureCounterSeeded();
    const count = await runUpstashCommand(['GET', VIEW_COUNTER_KEY]);

    return NextResponse.json<CounterResponse>(
      { ok: true, count: toCount(count), source: 'upstash' },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    return fallbackResponse(error instanceof Error ? error.message : 'Unable to read visitor count.');
  }
}

export async function POST() {
  if (!getUpstashConfig()) {
    return fallbackResponse('Visitor count is available.');
  }

  try {
    await ensureCounterSeeded();
    const count = await runUpstashCommand(['INCR', VIEW_COUNTER_KEY]);

    return NextResponse.json<CounterResponse>(
      { ok: true, count: toCount(count), source: 'upstash' },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch (error) {
    return fallbackResponse(error instanceof Error ? error.message : 'Unable to update visitor count.');
  }
}
