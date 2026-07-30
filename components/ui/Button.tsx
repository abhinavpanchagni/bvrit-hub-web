import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-accent-black text-bg hover:shadow-lg"
      : "bg-white/60 dark:bg-black/10 border border-border/10 text-text-primary hover:bg-white/80 dark:hover:bg-black/20";

  const buttonClass = `
    inline-flex items-center justify-center gap-2
    rounded-2xl
    px-6 py-3
    text-sm font-bold
    shadow-sm
    transition-all
    hover:scale-[1.02]
    ${styles}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClass}>{children}</button>;
}
