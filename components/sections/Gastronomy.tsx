import { images, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/icons";

const highlights = ["Buffet", "Comida mineira", "Sobremesas", "Café"];

export function Gastronomy() {
  return (
    <section id="buffet" className="grain grain-dark bg-wood py-20 text-cream sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:order-2 lg:col-span-5 lg:pt-6">
            <SectionHeading tone="dark" eyebrow="Sabor de Minas" title={<>Comida mineira do jeito que <span className="italic text-ocre-light">tem que ser.</span></>}>
              Receitas cheias de sabor, almoço sem pressa e aquele clima de comida feita para reunir gente em volta da mesa.
            </SectionHeading>
            <ul className="mt-10 border-t border-cream/20">
              {highlights.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 border-b border-cream/20 py-4">
                  <span className="font-serif text-sm font-semibold tracking-widest text-ocre-light">0{i + 1}</span>
                  <span className="font-serif text-3xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button href={siteConfig.whatsapp.url} variant="whatsapp" icon={<WhatsAppIcon />} className="mt-10">
              Quero saber mais
            </Button>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-3 sm:gap-4 lg:order-1 lg:col-span-7" delay={0.1}>
            <Photo
              image={images.buffetPanelas}
              sizes="(min-width: 1024px) 700px, 92vw"
              className="col-span-2 aspect-[4/3]"
            />
            <Photo
              image={images.buffetBarro}
              sizes="(min-width: 1024px) 340px, 46vw"
              className="aspect-[4/5]"
              imgClassName="object-[50%_70%]"
            />
            <Photo
              image={images.sobremesas}
              sizes="(min-width: 1024px) 340px, 46vw"
              className="aspect-[4/5]"
              imgClassName="object-[50%_62%]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
