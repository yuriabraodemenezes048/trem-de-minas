import { images } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
  { mark: "+140 anos", label: "Casarão histórico" },
  { mark: "Um dia", label: "Já foi escola" },
  { mark: "Hoje", label: "Trem de Minas Ribeirão" },
];

export function History() {
  return (
    <section id="historia" className="grain grain-dark bg-green-deep py-20 text-cream sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6 lg:pt-10">
            <SectionHeading tone="dark" eyebrow="O casarão" title={<>Mais de 140 anos <span className="italic text-ocre-light">de histórias.</span></>} />
            <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-cream/90 sm:text-[1.7rem]">
              Antes de receber mesas, pratos e encontros, estas paredes já guardavam outras histórias. Hoje, o casarão acolhe o Trem de Minas e continua sendo um lugar de memórias — agora construídas em volta da comida e da mesa.
            </p>
            <ol className="mt-12 border-l border-ocre-light/50">
              {timeline.map((t) => (
                <li key={t.mark} className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-ocre-light" aria-hidden="true" />
                  <p className="font-serif text-3xl font-semibold text-ocre-light">{t.mark}</p>
                  <p className="mt-1 text-cream/80">{t.label}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6" delay={0.1}>
            <Photo image={images.porta} sizes="(min-width: 1024px) 24vw, 46vw" className="row-span-2 aspect-[3/4]" />
            <Photo image={images.salaAmarela} sizes="(min-width: 1024px) 24vw, 46vw" className="aspect-square" />
            <Photo image={images.parede} sizes="(min-width: 1024px) 24vw, 46vw" className="aspect-square" />
            <Photo image={images.moldura} sizes="(min-width: 1024px) 24vw, 46vw" className="aspect-[16/10]" />
            <Photo image={images.moedor} sizes="(min-width: 1024px) 24vw, 46vw" className="aspect-[16/10]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
