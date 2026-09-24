import { CalendarDays } from "lucide-react";
import { images, schedule } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const copy = {
  comida: "Receitas cheias de sabor, tradição e aquele clima de comida feita para reunir gente em volta da mesa.",
  casarao: "Mais de 140 anos de histórias preservadas em cada detalhe do espaço.",
  fazendinha: "Natureza, animais e uma experiência especial para transformar o passeio em programa para toda a família.",
  musica: "Samba, MPB, reggae, rock e encontros que fazem parte da programação do Trem.",
};

function Caption({ n, title, text, light }: { n: string; title: string; text: string; light?: boolean }) {
  return (
    <div className={light ? "text-cream" : "text-wood"}>
      <p className={`font-serif text-sm font-semibold tracking-widest ${light ? "text-ocre-light" : "text-ocre-dark"}`}>{n}</p>
      <h3 className="mt-1 font-serif text-3xl font-semibold leading-tight">{title}</h3>
      <p className={`mt-2 max-w-sm text-[0.95rem] leading-relaxed ${light ? "text-cream/80" : "text-wood/80"}`}>{text}</p>
    </div>
  );
}

export function Experiences() {
  return (
    <section className="bg-cream-dark/60 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="O que te espera" title={<>Mais do que <span className="italic text-green">um almoço.</span></>} />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <Photo image={images.geleias} sizes="(min-width: 768px) 60vw, 92vw" className="aspect-[4/3] md:aspect-[16/11]" />
            <div className="mt-5"><Caption n="01" title="Comida mineira" text={copy.comida} /></div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.08}>
            <Photo image={images.porta} sizes="(min-width: 768px) 40vw, 92vw" className="aspect-[4/3] md:aspect-[4/4.1]" />
            <div className="mt-5"><Caption n="02" title="Casarão histórico" text={copy.casarao} /></div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.05}>
            <Photo image={images.gramado} sizes="(min-width: 768px) 40vw, 92vw" className="aspect-[4/3] md:aspect-[4/4.1]" />
            <div className="mt-5"><Caption n="03" title="Fazendinha" text={copy.fazendinha} /></div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="grain grain-dark relative flex h-full flex-col overflow-hidden rounded-2xl bg-green p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <Caption n="04" title="Música" text={copy.musica} light />
                <CalendarDays className="mt-1 hidden shrink-0 text-ocre-light sm:block" size={32} strokeWidth={1.4} aria-hidden="true" />
              </div>
              <ul className="mt-7 border-t border-cream/20">
                {schedule.map((s) => (
                  <li key={s.day} className="flex items-baseline justify-between gap-4 border-b border-cream/20 py-3.5">
                    <span className="font-serif text-2xl font-medium text-cream">{s.day}</span>
                    <span className="text-right text-sm text-cream/80">{s.description} · {s.time}</span>
                  </li>
                ))}
              </ul>
              <a href="#agenda" className="link-underline mt-6 self-start text-sm font-bold text-ocre-light">
                Ver a programação da semana
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
