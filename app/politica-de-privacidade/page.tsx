import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { CookieSettingsButton } from "@/components/privacy/CookieSettingsButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Trem de Minas Ribeirão",
  description: "Como o site do Trem de Minas Ribeirão trata dados, cookies e conteúdo de terceiros.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updated="Última atualização: setembro de 2026.">
      <p>
        Este site tem finalidade informativa: apresenta o {siteConfig.name}, sua localização, horários e programação.
        Aqui explicamos, de forma direta, como tratamos informações quando você o visita.
      </p>

      <h2>O que não fazemos</h2>
      <ul>
        <li>Não há formulário de cadastro, login ou compra no site.</li>
        <li>Não vendemos dados pessoais.</li>
        <li>Não usamos ferramentas de análise de audiência nem pixels de publicidade.</li>
      </ul>

      <h2>Cookies e preferências</h2>
      <p>
        O site usa apenas o armazenamento essencial para funcionar. Ao escolher “Somente essenciais” ou “Aceitar” no aviso de
        privacidade, guardamos essa escolha no seu próprio navegador (armazenamento local), sem enviar nenhuma informação
        pessoal. Ela serve para lembrar sua decisão e não exibir o aviso novamente.
      </p>
      <p>
        Com “Aceitar”, o mapa do Google pode ser carregado automaticamente. Com “Somente essenciais”, o mapa só é carregado se
        você clicar em “Carregar mapa”. Você pode mudar sua escolha a qualquer momento em <CookieSettingsButton className="font-semibold text-green underline" />, no rodapé do site.
      </p>

      <h2>Conteúdo e links de terceiros</h2>
      <p>
        O site leva a serviços externos: WhatsApp, Instagram e Google Maps. Ao usá-los, você passa a estar sujeito às políticas
        de privacidade e aos termos de cada serviço, sobre os quais não temos controle. Ao clicar no WhatsApp, você inicia uma
        conversa direta com o restaurante pelo número {siteConfig.phone.display}.
      </p>

      <h2>Dados técnicos de hospedagem</h2>
      <p>
        Como em qualquer site, a infraestrutura de hospedagem pode processar dados técnicos necessários ao funcionamento e à
        segurança, como endereço IP, tipo de navegador e horário de acesso. Esses registros são tratados pelo provedor de hospedagem.
      </p>

      <h2>Contato</h2>
      <p>
        Dúvidas sobre esta política? Fale com a gente pelo{" "}
        <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer">WhatsApp {siteConfig.phone.display}</a>.
      </p>
      <p>Podemos atualizar esta página quando necessário; a data de revisão fica no topo.</p>
    </LegalPage>
  );
}