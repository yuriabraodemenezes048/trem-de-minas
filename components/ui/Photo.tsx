import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/data/site";
import { cn } from "@/lib/utils";

type PhotoProps = {
  image: SiteImage;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Mantém a proporção original da imagem em vez de preencher o contêiner. */
  natural?: boolean;
  /** Conteúdo sobreposto à imagem (ex.: vídeo em loop). */
  children?: ReactNode;
};

/** Imagem com cantos suaves e zoom sutil no hover. */
export function Photo({ image, sizes, className, imgClassName, priority, natural, children }: PhotoProps) {
  return (
    <div className={cn("group/photo relative overflow-hidden rounded-2xl bg-cream-dark", className)}>
      {natural ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className={cn("h-auto w-full transition-transform duration-700 group-hover/photo:scale-[1.02]", imgClassName)}
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover transition-transform duration-700 group-hover/photo:scale-[1.02]", imgClassName)}
        />
      )}
      {children}
    </div>
  );
}
