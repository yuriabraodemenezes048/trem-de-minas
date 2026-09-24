import { Users } from "lucide-react";
import { images } from "@/data/site";
import { getAiImage } from "@/lib/ai-images";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Farm() {
  const animals = getAiImage("fazendaAnimais") ?? images.mata;
  return (
    <section id="fazendinha" className="grain overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ocre/60 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ocre-dark">
              <Users size={14} aria-hidden="true" /> Programa para toda a família
            </p>
            <SectionHeading eyebrow="Fazendinha" title={<>Almoço para você. <span className="italic text-green">Diversão para os pequenos.</span></>}>
              Enquanto a família aproveita o almoço, a fazendinha transforma a visita em uma experiência ainda mais especial para as crianças.
            </SectionHeading>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <Photo image={animals} sizes="(min-width: 1024px) 45vw, 92vw" className="aspect-[4/3] w-full" />
          </Reveal>
        </div>
        <Reveal className="mt-6" delay={0.05}>
          <Photo image={images.gramado} sizes="(min-width: 1280px) 1180px, 92vw" className="aspect-[16/9] w-full sm:aspect-[21/9]" imgClassName="object-[50%_70%]">
            <LoopVideo src="/videos/gramado.mp4" poster={images.gramado.src} className="object-[50%_70%]" />
          </Photo>
        </Reveal>
      </Container>
    </section>
  );
}
