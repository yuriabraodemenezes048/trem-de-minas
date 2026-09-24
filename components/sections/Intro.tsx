import { images } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Intro() {
  return (
    <section id="o-trem" className="grain py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="Trem de Minas Ribeirão" title={<>Comida que abraça. <span className="italic text-green">Lugar que fica na memória.</span></>}>
            Entre a tradição mineira e o charme do Ribeirão da Ilha, o Trem de Minas é daqueles lugares feitos para chegar com fome e ficar sem pressa.
          </SectionHeading>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-wood/85">
            Um restaurante de comida mineira no sul da ilha, onde o almoço em família acontece dentro de um casarão açoriano.
          </p>
        </Reveal>
        <Reveal className="relative lg:col-span-7" delay={0.1}>
          <Photo image={images.salao} natural sizes="(min-width: 1024px) 720px, 92vw" className="rounded-[1.75rem]" />
        </Reveal>
      </Container>
    </section>
  );
}
