import { Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Reviews() {
  return (
    <section className="grain py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="grid items-center gap-8 rounded-2xl border border-wood/25 bg-cream p-7 sm:p-9 lg:grid-cols-[1.3fr_auto_auto] lg:gap-12">
            <div>
              <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-ocre-dark">Quem já veio</p>
              <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-green-deep sm:text-4xl">
                Quem passa pelo Trem leva <span className="italic text-green">história para contar.</span>
              </h2>
            </div>
            <div className="flex items-center gap-5 lg:border-l lg:border-wood/20 lg:pl-12">
              <p className="font-serif text-6xl font-medium leading-none text-green-deep">{siteConfig.rating.value}</p>
              <div>
                <div className="flex gap-0.5 text-ocre" role="img" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-1.5 font-semibold text-wood">no Google</p>
                <p className="text-sm text-wood/75">Mais de mil avaliações</p>
              </div>
            </div>
            <Button href={siteConfig.social.googleMaps} variant="outline">
              Ver avaliações no Google
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}