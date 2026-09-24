import Image from "next/image";
import { images, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-28 text-cream sm:py-36">
      <Image src={images.salaAmarela.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <LoopVideo src="/videos/cta.mp4" poster={images.salaAmarela.src} className="-z-20" />
      <div className="absolute inset-0 -z-10 bg-green-deep/80" aria-hidden="true" />
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Seu próximo almoço pode <span className="italic text-ocre-light">começar por aqui.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Venha conhecer o Trem de Minas Ribeirão e viver uma experiência feita de comida, história e bons encontros.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={siteConfig.whatsapp.url} variant="whatsapp" icon={<WhatsAppIcon />}>Reservar pelo WhatsApp</Button>
            <Button href={siteConfig.social.googleMaps} variant="outline-light">Como chegar</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
