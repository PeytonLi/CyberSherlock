"use client";

import Link, { type LinkProps } from "next/link";
import { useLocaleContext } from "./LocaleProvider";

type Props = Omit<LinkProps, "href"> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

/** Prefixes href with the active locale (href should start with /). */
export default function LocaleLink({ href, children, ...rest }: Props) {
  const { locale } = useLocaleContext();
  const localized = href.startsWith("/") ? `/${locale}${href === "/" ? "" : href}` : href;
  return (
    <Link href={localized} {...rest}>
      {children}
    </Link>
  );
}
