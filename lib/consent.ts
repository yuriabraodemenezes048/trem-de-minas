import { useSyncExternalStore } from "react";

export type Consent = "accepted" | "essential" | null;

const KEY = "trem-cookie-consent";
const CHANGE_EVENT = "trem-consent-change";
export const OPEN_EVENT = "trem-consent-open";

export function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "accepted" || value === "essential" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Sem armazenamento local: a escolha vale apenas para esta visita.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function openConsentPanel() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** "pending" no servidor e durante a hidratação; depois, a escolha salva ou null. */
export function useConsent(): Consent | "pending" {
  return useSyncExternalStore<Consent | "pending">(subscribe, readConsent, () => "pending");
}