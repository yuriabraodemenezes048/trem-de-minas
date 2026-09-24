import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Barra fixa discreta, visível apenas no mobile. */
export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-green-deep/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <Link
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-ocre-light text-sm font-bold text-coal"
        >
          <WhatsAppIcon size={17} /> Reservar
        </Link>
        <Link
          href={siteConfig.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/40 text-sm font-semibold text-cream"
        >
          <MapPin size={17} aria-hidden="true" /> Como chegar
        </Link>
      </div>
    </div>
  );
}
