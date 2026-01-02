import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "../data/navigation";
import { site } from "../data/site";
import { profile } from "../data/profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const buildHref = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-slate-900/70">
            <img src={profile.avatarUrl} alt={profile.avatarAlt} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{profile.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{profile.title}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} to={buildHref(item.href)} className="transition hover:text-azure">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to={buildHref("#contact")}
            className="hidden rounded-full bg-azure px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-glow transition hover:bg-azure-dark sm:inline-flex"
          >
            {site.navCtaLabel}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 text-slate-600 transition hover:border-azure/60 hover:text-azure dark:border-slate-800/70 dark:text-slate-300 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            <span className="h-0.5 w-5 rounded-full bg-current" />
          </button>
        </div>
      </Container>
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200/70 bg-white/95 dark:border-slate-800/70 dark:bg-slate-950/95 lg:hidden">
          <Container className="flex flex-col gap-4 py-4 text-sm text-slate-600 dark:text-slate-300">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={buildHref(item.href)}
                className="transition hover:text-azure"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
