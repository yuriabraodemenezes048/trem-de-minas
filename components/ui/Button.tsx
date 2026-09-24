import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "outline" | "outline-light" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-green text-cream hover:bg-green-deep",
  whatsapp: "bg-ocre-light text-coal hover:bg-cream",
  outline: "border border-wood/40 text-wood hover:bg-wood hover:text-cream",
  "outline-light": "border border-cream/50 text-cream hover:bg-cream hover:text-green-deep",
  ghost: "text-green hover:text-green-deep",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
  "aria-label"?: string;
};

/** Botão em formato de link. O ícone (padrão: seta) desliza alguns pixels no hover. */
export function Button({
  href,
  children,
  variant = "primary",
  external,
  icon,
  className,
  ...rest
}: ButtonProps) {
  const isExternal = external ?? /^https?:/.test(href);
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-px",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        {icon ?? <ArrowRight size={18} />}
      </span>
    </Link>
  );
}
