"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { useConsent } from "@/lib/consent";

type MapEmbedProps = {
  src: string;
  title: string;
  mapsUrl: string;
  addressLines: string[];
};

/**
 * Google Maps é conteúdo de terceiros: só carrega com consentimento ("Aceitar")
 * ou com clique explícito em "Carregar mapa", e apenas perto da viewport.
 */
export function MapEmbed({ src, title, mapsUrl, addressLines }: MapEmbedProps) {
  const consent = useConsent();
  const [requested, setRequested] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const allowed = consent === "accepted" || requested;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative size-full min-h-[22rem] bg-cream-dark">
      {allowed && visible ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-wood">
          <MapPin size={34} className="text-ocre-dark" aria-hidden="true" />
          <p className="font-serif text-2xl font-semibold text-green-deep">Mapa do Trem de Minas</p>
          <p className="text-sm leading-relaxed text-wood/85">
            {addressLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setRequested(true)}
              className="min-h-11 rounded-full bg-green px-5 text-sm font-semibold text-cream transition-colors hover:bg-green-deep"
            >
              Carregar mapa
            </button>
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center rounded-full border border-wood/40 px-5 text-sm font-semibold transition-colors hover:bg-wood hover:text-cream"
            >
              Abrir no Google Maps
            </Link>
          </div>
          <p className="mt-2 max-w-xs text-xs text-wood/65">Ao carregar, o mapa é fornecido pelo Google, com política própria.</p>
        </div>
      )}
    </div>
  );
}