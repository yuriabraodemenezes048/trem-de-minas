import { images, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";

const tiles = [images.geleias, images.porta, images.bananas, images.fogao];

export function Instagram() {
  return (
    <section className="grain grain-dark bg-green py-20 text-cream sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading tone="dark" eyebrow={siteConfig.social.instagramHandle} title={<>O Trem continua <span className="italic text-ocre-light">por lá.</span></>}>
            Acompanhe a rotina, a programação, a cozinha e tudo que acontece no Trem de Minas pelo Instagram.
          </SectionHeading>
          <Button href={siteConfig.social.instagram} variant="whatsapp" icon={<InstagramIcon />} className="mt-8">
            Seguir no Instagram
          </Button>
        </Reveal>
        <Reveal className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7 lg:grid-cols-4" delay={0.1}>
          {tiles.map((image) => (
            <Photo key={image.src} image={image} sizes="(min-width: 1024px) 200px, 46vw" className="aspect-square lg:aspect-[4/5]" />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
