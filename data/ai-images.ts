/**
 * Slots para imagens de apoio geradas por IA (uso moderado, apenas onde faltam fotos reais).
 * Para ativar um slot, salve o arquivo indicado em /public/images/ai/ — nenhum código precisa mudar.
 * Slots sem arquivo são ignorados e o site usa a foto real correspondente.
 * Recomenda-se identificar essas imagens como ilustrativas caso a legislação/plataforma exija.
 */

export type AiSlot = {
  file: string;
  width: number;
  height: number;
  alt: string;
  prompt: string;
  negative: string;
};

const negative =
  "illustration, cartoon, 3D render, extra fingers, deformed hands, deformed food, glossy fake food, plastic look, surreal lighting, unrealistic faces, overprocessed, oversaturated, stock photo look, text, watermark, logo";

export const aiSlots = {
  comidaBuffet: {
    file: "comida-buffet-mineiro.webp",
    width: 1600,
    height: 1067,
    alt: "Buffet de comida mineira em panelas de barro e ferro sobre balcão de madeira",
    prompt:
      "Authentic Brazilian Minas Gerais buffet in a rustic colonial farmhouse restaurant in Florianópolis, clay and cast-iron pots with feijão tropeiro, tutu, couve refogada, frango com quiabo and rice, wooden counter, brick wall, warm natural window light, documentary food photography, 35mm, shallow depth of field, believable textures, slightly imperfect real food styling, premium but authentic, no exaggeration, landscape 3:2",
    negative,
  },
  comidaPrato: {
    file: "comida-prato-mineiro.webp",
    width: 1200,
    height: 1200,
    alt: "Prato servido com comida mineira sobre mesa de madeira",
    prompt:
      "Close-up of a home-style plate of traditional Minas Gerais food (rice, beans, couve, pork, farofa, cassava) on a worn wooden table in a rustic Brazilian restaurant, side window light, warm tones, hyper realistic food photography, not commercial stock, natural imperfections, slight steam, 50mm, shallow depth of field, square 1:1",
    negative,
  },
  fazendaAnimais: {
    file: "fazendinha-animais.webp",
    width: 1600,
    height: 1200,
    alt: "Galinhas e pequenos animais em área verde da fazendinha",
    prompt:
      "Small family-friendly farm area at a rustic countryside restaurant in southern Brazil, a few chickens and a couple of rabbits on natural grass, wooden fence, big shade trees, old colonial house in the background, warm late-morning daylight, documentary photography, realistic, authentic and welcoming, not a zoo, no fantasy, landscape 4:3",
    negative,
  },
  fazendaCrianca: {
    file: "fazendinha-familia.webp",
    width: 1600,
    height: 1067,
    alt: "Família passeando pela fazendinha do restaurante",
    prompt:
      "A family with a small child (seen mostly from behind or side, candid) feeding chickens at a rustic farm corner next to a Brazilian countryside restaurant, natural grass, trees, relaxed Sunday outing mood, warm natural light, hyper realistic candid photo, authentic environment, landscape 3:2",
    negative,
  },
  ambiente: {
    file: "ambiente-almoco-familia.webp",
    width: 1600,
    height: 1067,
    alt: "Almoço em família em salão rústico de madeira",
    prompt:
      "Cozy rustic colonial restaurant interior in Brazil, exposed wood beams and clay tile roof, warm light from tall green-shuttered windows, a family sharing a long lunch at a wooden table, natural candid moment, authentic people, realistic editorial photography, landscape 3:2",
    negative,
  },
} satisfies Record<string, AiSlot>;

export type AiSlotKey = keyof typeof aiSlots;