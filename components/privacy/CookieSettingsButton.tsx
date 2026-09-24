"use client";

import { openConsentPanel } from "@/lib/consent";

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentPanel} className={className}>
      Cookies
    </button>
  );
}