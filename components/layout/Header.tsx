"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "bg-green-deep/95 shadow-[0_1px_0_rgba(245,240,231,0.08)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <Link href="#topo" className="flex items-center gap-3" aria-label={`${siteConfig.name} – início`} onClick={() => setOpen(false)}>
          <Image src="/logo/logo-trem.jpg" alt="" width={56} height={56} className="size-10 rounded-full lg:size-14" priority />
          <span className="font-serif text-xl font-semibold leading-none lg:text-2xl tracking-tight text-cream">
            Trem de Minas
            <span className="mt-0.5 block text-[0.62rem] font-sans font-bold uppercase tracking-[0.28em] text-ocre-light">
              Ribeirão
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline pb-1 text-base font-medium text-cream/90 hover:text-cream">
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ocre-light px-6 py-3 text-base font-bold text-coal transition-all duration-300 hover:-translate-y-px hover:bg-cream"
          >
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full text-cream lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "grain grain-dark fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-green-deep transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Menu mobile" className="flex min-h-full flex-col px-6 pb-10 pt-6">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-cream/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-serif text-4xl font-medium text-cream"
                >
                  <span className="font-sans text-xs font-bold tracking-widest text-ocre-light">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-ocre-light px-6 text-base font-bold text-coal"
            >
              <WhatsAppIcon /> Reservar pelo WhatsApp
            </Link>
            <p className="mt-5 text-center text-sm text-cream/60">
              {siteConfig.address.street} · {siteConfig.address.neighborhood}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
