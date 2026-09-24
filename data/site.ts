/**
 * Fonte única de conteúdo do site.
 * Para atualizar telefone, horários, agenda, nota do Google ou imagens,
 * edite apenas este arquivo.
 */

const whatsappNumber = "5548991225335";
const whatsappMessage =
  "Olá! Encontrei vocês pelo site do Trem de Minas e gostaria de mais informações.";

export const siteConfig = {
  name: "Trem de Minas Ribeirão",
  legalTitle: "Fazenda Restaurante Trem de Minas | Florianópolis",
  tagline: "Um casarão açoriano com amor e comida mineira!",
  /** Domínio oficial via NEXT_PUBLIC_SITE_URL; senão, a URL de produção da Vercel; senão, localhost. */
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  seo: {
    title: "Trem de Minas Ribeirão | Comida Mineira em Florianópolis",
    description:
      "Conheça o Trem de Minas Ribeirão, restaurante de comida mineira em um casarão histórico no Ribeirão da Ilha, em Florianópolis, com fazendinha, música e ambiente para toda a família.",
  },
  phone: {
    display: "(48) 99122-5335",
    tel: "+5548991225335",
  },
  whatsapp: {
    number: whatsappNumber,
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  address: {
    street: "Rod. Baldicero Filomeno, 239",
    neighborhood: "Ribeirão da Ilha",
    city: "Florianópolis",
    state: "SC",
    country: "BR",
    geo: { lat: -27.707578, lng: -48.510511 },
  },
  social: {
    instagram: "https://www.instagram.com/tremdeminasribeirao/",
    instagramHandle: "@tremdeminasribeirao",
    googleMaps:
      "https://www.google.com/maps/place/Trem+de+Minas+Ribeir%C3%A3o/@-27.707578,-48.510511,998m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95273b2dc66ae55f:0x375289caffde7f9a!8m2!3d-27.707578!4d-48.510511!16s%2Fg%2F11f55jrywc",
    mapEmbed: "https://www.google.com/maps?q=-27.707578,-48.510511&z=16&hl=pt-BR&output=embed",
  },
  rating: { value: "4,6", numeric: 4.6, reviewCount: "+1.000" },
} as const;

export const navItems = [
  { label: "O Trem", href: "#o-trem" },
  { label: "Buffet", href: "#buffet" },
  { label: "Fazendinha", href: "#fazendinha" },
  { label: "Agenda", href: "#agenda" },
  { label: "História", href: "#historia" },
  { label: "Localização", href: "#localizacao" },
] as const;

/** `schemaDay` segue o vocabulário do schema.org. */
export const openingHours = [
  { day: "Segunda", schemaDay: "Monday", hours: "12h às 17h", open: "12:00", close: "17:00" },
  { day: "Terça", schemaDay: "Tuesday", hours: "12h às 17h", open: "12:00", close: "17:00" },
  { day: "Quarta", schemaDay: "Wednesday", hours: "Fechado", open: null, close: null },
  { day: "Quinta", schemaDay: "Thursday", hours: "12h às 17h", open: "12:00", close: "17:00" },
  { day: "Sexta", schemaDay: "Friday", hours: "12h às 17h", open: "12:00", close: "17:00" },
  { day: "Sábado", schemaDay: "Saturday", hours: "12h às 17h", open: "12:00", close: "17:00" },
  { day: "Domingo", schemaDay: "Sunday", hours: "12h às 17h", open: "12:00", close: "17:00" },
] as const;

export const schedule = [
  {
    day: "Terça",
    title: "Vagão Botequim",
    description: "Roda de Samba",
    time: "19h",
  },
  {
    day: "Sábado",
    title: "Vagão Coletivo",
    description: "Reggae, Rock & MPB",
    time: "12h às 16h",
  },
  {
    day: "Domingo",
    title: "Almoço com Duo Nosso Samba",
    description: "Música ao vivo na hora do almoço",
    time: "12h30 às 15h30",
  },
] as const;

export const scheduleNotice =
  "Programação sujeita a alterações. Consulte o Instagram para acompanhar as novidades.";

export type SiteImage = { src: string; width: number; height: number; alt: string };

const img = (name: string, width: number, height: number, alt: string): SiteImage => ({
  src: `/images/${name}.jpg`,
  width,
  height,
  alt,
});

/** Todas as imagens usadas no site. Troque os arquivos em /public/images mantendo os nomes. */
export const images = {
  fachada: img("casa-janelas", 720, 640, "Fachada branca do casarão com janelas de venezianas verdes e jardineiras de flores"),
  jardim: img("casa-jardim", 720, 480, "Jardineiras com plantas sob as janelas do casarão, ao lado do gramado"),
  salao: img("salao-mesas", 720, 500, "Salão do restaurante com mesas de madeira, porta aberta e armário antigo amarelo"),
  telefone: img("telefone", 720, 500, "Detalhe de um telefone antigo de disco, decoração do casarão"),
  parede: img("parede-oleo", 720, 640, "Parede antiga feita com óleo de baleia, preservada no interior do casarão"),
  cozinha: img("cozinha", 720, 640, "Equipe trabalhando no buffet, sob o telhado de madeira do salão"),
  janela: img("janela-verde", 720, 640, "Janela com veneziana verde e vista para o campo, ao lado de uma mesa de madeira"),
  teto: img("balcao-teto", 720, 640, "Teto de telhas em formato circular sobre o salão do restaurante"),
  buffet: img("buffet", 720, 360, "Pessoas se servindo no buffet, com panelas de barro sobre o balcão"),
  geleias: img("balcao-geleias", 720, 480, "Balcão de tijolinhos com potes de geleias e conservas"),
  fogao: img("fogao", 720, 640, "Fogão a lenha de tijolinhos no salão do Trem de Minas"),
  bananas: img("bananas", 720, 640, "Cacho de bananas pendurado sob o telhado de madeira"),
  porta: img("porta", 720, 640, "Porta verde do casarão com ornamento na fachada e lampião"),
  salaAmarela: img("sala-amarela", 720, 640, "Sala do casarão com paredes amarelas, janelas verdes e lampião"),
  moedor: img("moedor", 720, 600, "Moedor de ferro antigo, peça histórica do casarão"),
  moldura: img("moldura", 720, 640, "Moldura antiga de madeira torneada encostada na parede"),
  gramado: img("gramado", 720, 480, "Gramado com bancos de madeira e construção rústica entre as árvores"),
  mata: img("mata", 720, 640, "Árvores e área verde ao redor do casarão"),
} satisfies Record<string, SiteImage>;
