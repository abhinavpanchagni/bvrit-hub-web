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
      ? "bg-black text-white"
      : "bg-white text-gray-700";

  const buttonClass = `
    inline-flex items-center justify-center
    rounded-2xl
    border-4 border-black
    px-6 py-3
    text-lg font-black
    shadow-[6px_6px_0_#000]
    transition-all
    hover:-translate-y-1
    hover:shadow-[8px_8px_0_#000]
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
