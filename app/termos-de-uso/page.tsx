import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Termos de Uso | Trem de Minas Ribeirão",
  description: "Condições de uso do site do Trem de Minas Ribeirão.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updated="Última atualização: setembro de 2026.">
      <p>Ao navegar neste site, você concorda com as condições abaixo. Elas são simples e valem para o uso normal do site.</p>

      <h2>Finalidade do site</h2>
      <p>O site é informativo. Ele apresenta o {siteConfig.name}, seu espaço, horários, localização e programação.</p>

      <h2>Horários e programação</h2>
      <p>
        Horários de funcionamento e a programação de música podem mudar. Sempre que for importante para o seu passeio,
        confirme as informações com o restaurante pelo WhatsApp ou acompanhe as novidades no Instagram.
      </p>

      <h2>Reservas e contatos pelo WhatsApp</h2>
      <p>
        Mensagens enviadas pelo WhatsApp dependem de resposta e confirmação do restaurante. O envio de uma mensagem não
        garante mesa, horário ou disponibilidade.
      </p>

      <h2>Links externos</h2>
      <p>
        Links para WhatsApp, Instagram, Google Maps e outros serviços são oferecidos por conveniência. Cada serviço tem seus
        próprios termos e políticas, e não nos responsabilizamos por seu conteúdo.
      </p>

      <h2>Conteúdo e identidade</h2>
      <p>
        Nome, logo, fotografias, vídeos e textos pertencem aos seus respectivos titulares. Não é permitido copiar ou
        reutilizar esse material sem autorização.
      </p>

      <h2>Uso adequado</h2>
      <p>Use o site de forma normal e legítima, sem tentar prejudicar seu funcionamento ou o de terceiros.</p>

      <h2>Atualizações</h2>
      <p>
        Estes termos podem ser atualizados. A data da última revisão aparece no topo desta página. Para saber como tratamos
        dados e cookies, veja a <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
      </p>
    </LegalPage>
  );
}