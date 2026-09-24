import { schedule, scheduleNotice, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";

export function Schedule() {
  return (
    <section id="agenda" className="grain py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Música ao vivo" title={<>A semana <span className="italic text-green">no Trem</span></>}>
            Samba, reggae, rock e MPB: a programação que anima o casarão durante a semana.
          </SectionHeading>
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {schedule.map((item, i) => (
            <li key={item.day}>
              <Reveal className="h-full" delay={i * 0.08}>
              <div className="relative flex h-full flex-col rounded-2xl border border-wood/25 bg-cream p-7 shadow-[0_1px_0_rgba(74,48,34,0.06)]">
                <span className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rounded-full bg-cream-dark lg:block" aria-hidden="true" />
                <span className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rounded-full bg-cream-dark lg:block" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-ocre-dark">{item.day}</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-green-deep">{item.title}</h3>
                <p className="mt-2 text-wood/85">{item.description}</p>
                <div className="ticket-line my-6 text-wood" aria-hidden="true" />
                <p className="mt-auto font-serif text-3xl font-medium text-wood">{item.time}</p>
              </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-wood/70">{scheduleNotice}</p>
          <Button href={siteConfig.social.instagram} variant="outline" icon={<InstagramIcon />}>
            Ver agenda no Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
}

