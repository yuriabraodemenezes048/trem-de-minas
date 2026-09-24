import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <header className="bg-green-deep">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <Link href="/" className="flex items-center gap-3 font-serif text-xl font-semibold text-cream lg:text-2xl" aria-label={`${siteConfig.name} – início`}>
            <Image src="/logo/logo-trem.jpg" alt="" width={48} height={48} className="size-10 rounded-full lg:size-12" />
            Trem de Minas
          </Link>
          <Link href="/" className="link-underline flex items-center gap-2 text-sm font-medium text-cream/90">
            <ArrowLeft size={16} aria-hidden="true" /> Voltar ao site
          </Link>
        </div>
      </header>
      <main className="grain py-14 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-green-deep sm:text-6xl">{title}</h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-ocre-dark">{updated}</p>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-wood [&_a]:font-semibold [&_a]:text-green [&_a]:underline [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-green-deep [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}