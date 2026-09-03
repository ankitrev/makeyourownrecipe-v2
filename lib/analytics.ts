type EventData = Record<string, string | number | undefined>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number>) => void;
    };
  }
}

export function trackEvent(name: string, data?: EventData) {
  try {
    if (typeof window === "undefined") return;

    const payload = data
      ? Object.fromEntries(
          Object.entries(data).filter(
            (entry): entry is [string, string | number] =>
              entry[1] !== undefined
          )
        )
      : undefined;

    window.umami?.track(name, payload);
  } catch {
    // Analytics must never break the product.
  }
}
