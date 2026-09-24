"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type SaveDataNavigator = Navigator & { connection?: { saveData?: boolean } };

function canAutoplay() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = (navigator as SaveDataNavigator).connection?.saveData === true;
  return !reduce && !saveData;
}

const subscribe = () => () => {};

type LoopVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  /** "metadata" para a primeira dobra; "none" para vídeos abaixo dela. */
  preload?: "metadata" | "none";
};

/**
 * Vídeo decorativo em loop, posicionado sobre uma imagem (que serve de poster/fallback).
 * Não é renderizado com prefers-reduced-motion ou economia de dados, e só toca quando visível.
 */
export function LoopVideo({ src, poster, className, preload = "none" }: LoopVideoProps) {
  const enabled = useSyncExternalStore(subscribe, canAutoplay, () => false);
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!enabled || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={cn(
        "absolute inset-0 size-full object-cover transition-opacity duration-700",
        playing ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}