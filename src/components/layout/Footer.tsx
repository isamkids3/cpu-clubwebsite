import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <p>© {new Date().getFullYear()} CPU Club. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
