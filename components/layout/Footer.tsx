import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { InstagramIcon } from "@/components/ui/icons";
import { CookieSettingsButton } from "@/components/privacy/CookieSettingsButton";
import { Container } from "@/components/ui/Container";

const externalLinks = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Google Maps", href: siteConfig.social.googleMaps },
  { label: "WhatsApp", href: siteConfig.whatsapp.url },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain grain-dark bg-green-deep pb-24 pt-16 text-cream/80 lg:pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image src="/logo/logo-trem.jpg" alt="Logo do Trem de Minas Ribeirão" width={64} height={64} className="size-16 rounded-full" />
              <p className="font-serif text-3xl font-semibold text-cream">{siteConfig.name}</p>
            </div>
            <p className="mt-6 max-w-sm font-serif text-xl italic leading-snug text-cream/75">
              “Um casarão açoriano com amor e comida mineira.”
            </p>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ocre-light"
            >
              <InstagramIcon /> <span className="link-underline">{siteConfig.social.instagramHandle}</span>
            </Link>
          </div>

          <nav aria-label="Rodapé">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ocre-light">Navegue</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={`/${item.href}`} className="link-underline hover:text-cream">{item.label}</Link>
                </li>
              ))}
              {externalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ocre-light">Onde estamos</p>
            <p className="leading-relaxed">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.neighborhood}
              <br />
              {siteConfig.address.city} – {siteConfig.address.state}
            </p>
            <Link href={`tel:${siteConfig.phone.tel}`} className="link-underline mt-4 inline-block font-semibold text-cream">
              {siteConfig.phone.display}
            </Link>
          </address>
        </div>

        <div className="ticket-line mt-14 text-cream" aria-hidden="true" />
        <div className="mt-6 flex flex-col gap-3 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/politica-de-privacidade" className="link-underline hover:text-cream">Política de Privacidade</Link></li>
            <li><Link href="/termos-de-uso" className="link-underline hover:text-cream">Termos de Uso</Link></li>
            <li><CookieSettingsButton className="link-underline hover:text-cream" /></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
