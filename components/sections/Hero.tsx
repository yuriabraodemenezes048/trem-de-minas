import { Star } from "lucide-react";
import { images, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="topo" className="grain grain-dark relative overflow-hidden bg-green-deep pt-20 text-cream lg:pt-0">
      <Container className="grid items-center gap-10 pb-14 lg:min-h-[92svh] lg:grid-cols-12 lg:gap-8 lg:pb-0 lg:pt-20">
        <div className="lg:col-span-6">
          <p className="mb-6 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-ocre-light sm:text-xs">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Trem de Minas Ribeirão · Florianópolis
          </p>
          <h1 className="font-serif text-[3.1rem] font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            Um pedaço de Minas
            <span className="block italic text-ocre-light">no Ribeirão da Ilha</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/85 sm:text-xl">
            Comida mineira, um casarão cheio de história, fazendinha e música para transformar o almoço em experiência.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.whatsapp.url} variant="whatsapp" icon={<WhatsAppIcon />}>
              Reservar pelo WhatsApp
            </Button>
            <Button href={siteConfig.social.googleMaps} variant="outline-light">
              Como chegar
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-cream/15 pt-6">
            <div className="flex gap-0.5 text-ocre-light" role="img" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-cream/80">
              <strong className="font-bold text-cream">{siteConfig.rating.value} no Google</strong> · {siteConfig.rating.reviewCount} avaliações
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7 lg:mt-4">
          <div className="relative mx-auto max-w-[36rem] lg:mr-0 lg:max-w-[38rem]">
            <Photo
              image={images.fachadaCasarao}
              sizes="(min-width: 1024px) 608px, 92vw"
              priority
              className="aspect-[4/4.6] rounded-b-2xl rounded-t-[999px] border border-cream/20 sm:aspect-[4/4.4]"
              imgClassName="object-[62%_50%]"
            />
            <div className="absolute -bottom-5 left-4 rounded-xl bg-cream px-5 py-3 text-wood shadow-xl sm:-left-6">
              <p className="font-serif text-2xl font-semibold leading-none text-green-deep">+140 anos</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ocre-dark">de casarão e histórias</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
