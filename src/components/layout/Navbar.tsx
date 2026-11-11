import React from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/announcements", label: "Announcements" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/feedback", label: "Feedback" },
];

export function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
      <Link href="/" className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
        CPU Club
      </Link>
      <nav className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
