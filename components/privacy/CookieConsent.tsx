"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { OPEN_EVENT, saveConsent, useConsent } from "@/lib/consent";
import { cn } from "@/lib/utils";

/** Aviso pequeno e não bloqueante. Só aparece sem escolha salva ou quando reaberto pelo rodapé. */
export function CookieConsent() {
  const consent = useConsent();
  const pathname = usePathname();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (consent === "pending" || (consent !== null && !reopened)) return null;

  const choose = (value: "accepted" | "essential") => {
    saveConsent(value);
    setReopened(false);
  };

  return (
    <section
      aria-label="Preferências de privacidade"
      className={cn(
        "fixed inset-x-3 z-[60] rounded-2xl border border-wood/25 bg-cream p-5 text-wood shadow-[0_8px_30px_rgba(23,23,20,0.14)] sm:inset-x-4 lg:inset-x-auto lg:bottom-5 lg:right-5 lg:w-[26rem]",
        pathname === "/" ? "bottom-[4.9rem]" : "bottom-3",
      )}
    >
      {reopened && (
        <button
          type="button"
          onClick={() => setReopened(false)}
          aria-label="Fechar preferências"
          className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full text-wood/70 hover:bg-cream-dark"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
      <p className="pr-6 text-[0.85rem] leading-relaxed">
        Usamos cookies essenciais para o funcionamento do site e, com sua permissão, recursos de terceiros para melhorar sua experiência.
      </p>
      {reopened && consent !== null && (
        <p className="mt-2 text-xs text-wood/70">
          Escolha atual: {consent === "accepted" ? "aceitar recursos de terceiros" : "somente essenciais"}.
        </p>
      )}
      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-green">
        <Link href="/politica-de-privacidade" className="link-underline">Política de Privacidade</Link>
        <Link href="/termos-de-uso" className="link-underline">Termos de Uso</Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose("essential")}
          className="min-h-11 rounded-full border border-wood/40 px-3 text-[0.82rem] font-semibold text-wood transition-colors hover:bg-wood hover:text-cream"
        >
          Somente essenciais
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="min-h-11 rounded-full bg-ocre-light px-3 text-[0.82rem] font-bold text-coal transition-colors hover:bg-ocre"
        >
          Aceitar
        </button>
      </div>
    </section>
  );
}