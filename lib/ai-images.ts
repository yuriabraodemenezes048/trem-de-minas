import fs from "node:fs";
import path from "node:path";
import { aiSlots, type AiSlotKey } from "@/data/ai-images";
import type { SiteImage } from "@/data/site";

/** Retorna a imagem de IA do slot se o arquivo existir em /public/images/ai; caso contrário, null. */
export function getAiImage(key: AiSlotKey): SiteImage | null {
  const slot = aiSlots[key];
  const file = path.join(process.cwd(), "public", "images", "ai", slot.file);
  if (!fs.existsSync(file)) return null;
  return { src: `/images/ai/${slot.file}`, width: slot.width, height: slot.height, alt: slot.alt };
}