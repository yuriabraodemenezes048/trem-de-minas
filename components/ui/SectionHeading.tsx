import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "mb-4 flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.22em]",
          align === "center" && "justify-center",
          dark ? "text-ocre-light" : "text-ocre-dark",
        )}
      >
        <span className="h-px w-8 bg-current opacity-70" aria-hidden="true" />
        {eyebrow}
      </p>
      <Tag
        className={cn(
          "font-serif text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl",
          dark ? "text-cream" : "text-green-deep",
        )}
      >
        {title}
      </Tag>
      {children && (
        <p className={cn("mt-6 text-lg leading-relaxed", dark ? "text-cream/80" : "text-wood/85")}>
          {children}
        </p>
      )}
    </div>
  );
}
