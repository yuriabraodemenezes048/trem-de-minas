import { images, siteConfig } from "@/data/site";
import { getAiImage } from "@/lib/ai-images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/icons";

const gallery = [
  images.jardim,
  images.sobremesas,
  images.salaAmarela,
  images.gramado,
  images.geleias,
  images.bananas,
  images.porta,
  images.buffetBarro,
];

export function Gallery() {
  const items = [...gallery];
  const extras = [getAiImage("fazendaCrianca"), getAiImage("ambiente")];
  extras.forEach((image, i) => image && items.splice(3 + i * 3, 0, image));
  return (
    <section className="bg-cream-dark/60 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Galeria" title={<>Um pouco <span className="italic text-green">do Trem.</span></>} />
        </Reveal>
        <div className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {items.map((image) => (
            <Photo
              key={image.src}
              image={image}
              natural
              sizes="(min-width: 1024px) 400px, 46vw"
              className="mb-3 break-inside-avoid sm:mb-4"
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={siteConfig.social.instagram} variant="primary" icon={<InstagramIcon />}>
            Ver mais no Instagram
          </Button>
        </div>
      </Container>
    </section>
  );
}
