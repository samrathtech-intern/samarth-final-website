'use client';

import { useEffect, useState } from 'react';

const STARTING_VIEW_COUNT = 18200;
const SESSION_KEY = 'samarth-technoologies-view-counted';

type CounterPayload = {
  ok?: boolean;
  count?: number;
};

function hasSessionCounted() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === 'yes';
  } catch {
    return false;
  }
}

function rememberSessionCounted() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, 'yes');
  } catch {
    // Browsers can block sessionStorage; the seeded count remains visible.
  }
}

export function ViewCounter() {
  const [count, setCount] = useState(STARTING_VIEW_COUNT);

  useEffect(() => {
    let isMounted = true;

    async function updateCounter() {
      const alreadyCounted = hasSessionCounted();
      const response = await fetch('/api/views', {
        method: alreadyCounted ? 'GET' : 'POST',
        headers: { Accept: 'application/json' },
        cache: 'no-store'
      });

      if (!response.ok) return;

      const payload = (await response.json()) as CounterPayload;
      if (isMounted && typeof payload.count === 'number') {
        setCount(payload.count);
      }

      if (!alreadyCounted) {
        rememberSessionCounted();
      }
    }

    updateCounter().catch(() => {
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <span className="view-counter" aria-label="Visitor count">
      <span className="view-counter-dot" aria-hidden="true" />
      Visitor No.: <strong>{count.toLocaleString('en-IN')}</strong>
    </span>
  );
}
