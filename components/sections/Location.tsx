import { MapPin, Phone, Clock } from "lucide-react";
import { openingHours, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/icons";
import { MapEmbed } from "./MapEmbed";

export function Location() {
  const { address, phone, social } = siteConfig;
  return (
    <section id="localizacao" className="grain bg-cream-dark/60 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Como chegar" title={<>Venha viver o <span className="italic text-green">Trem de Minas.</span></>} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-wood/25 bg-cream p-7 sm:p-9">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-ocre-dark" size={22} aria-hidden="true" />
                <address className="not-italic leading-relaxed text-wood">
                  {address.street}
                  <br />
                  {address.neighborhood}
                  <br />
                  {address.city} – {address.state}
                </address>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <Phone className="shrink-0 text-ocre-dark" size={22} aria-hidden="true" />
                <a href={`tel:${phone.tel}`} className="link-underline font-semibold text-wood">{phone.display}</a>
              </div>

              <div className="mt-7 flex gap-4">
                <Clock className="mt-1 shrink-0 text-ocre-dark" size={22} aria-hidden="true" />
                <dl className="w-full text-[0.95rem]">
                  {openingHours.map((d) => (
                    <div key={d.day} className="flex justify-between border-b border-wood/10 py-1.5 last:border-0">
                      <dt className="text-wood/85">{d.day}</dt>
                      <dd className={d.open ? "font-semibold text-wood" : "font-semibold text-ocre-dark"}>{d.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href={siteConfig.whatsapp.url} icon={<WhatsAppIcon />}>Reservar pelo WhatsApp</Button>
                <Button href={social.googleMaps} variant="outline">Abrir no Google Maps</Button>
              </div>
            </div>
          </Reveal>

          <Reveal className="overflow-hidden rounded-2xl border border-wood/25 lg:col-span-7" delay={0.1}>
            <MapEmbed
              src={social.mapEmbed}
              title="Mapa com a localização do Trem de Minas Ribeirão"
              mapsUrl={social.googleMaps}
              addressLines={[address.street, `${address.neighborhood}, ${address.city} – ${address.state}`]}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
