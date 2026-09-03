import Script from "next/script";

const scriptUrl =
  process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ?? "https://cloud.umami.is/script.js";
const websiteId =
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ??
  "e55efe0a-410d-4863-901c-305fc486ee1b";

function isConfigured(value?: string) {
  return Boolean(value && !value.includes("PASTE_"));
}

export function UmamiScript() {
  if (!isConfigured(scriptUrl) || !isConfigured(websiteId)) {
    return null;
  }

  return (
    <Script
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
