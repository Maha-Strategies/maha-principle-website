'use client';

function sendEvent(name) {
  const endpoint = process.env.NEXT_PUBLIC_MAHA_ANALYTICS_ENDPOINT;
  if (!endpoint) return;

  const payload = JSON.stringify({ name, occurredAt: new Date().toISOString() });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([payload], { type: 'application/json' }));
  } else {
    fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {});
  }
}

export function OutboundLink({ href, eventName, className, children }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={() => sendEvent(eventName)}>
      {children}
    </a>
  );
}
