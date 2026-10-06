"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cities, site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  {
    href: "/#cities",
    label: "Select Your City",
    wide: true,
    children: cities.map((city) =>
      city.slug === "london"
        ? {
            href: "https://www.londonfreshers.com/",
            label: city.name,
            external: true,
          }
        : {
            href: `/cities/${city.slug}`,
            label: city.name,
          }
    ),
  },
  { href: "/events", label: "Events" },
  { href: "/groups", label: "Groups" },
  { href: "/a-levels", label: "A-Levels" },
  { href: "/halloween", label: "Halloween" },
  { href: "/signup", label: "Sign Up" },
  { href: "/blogs", label: "Blogs" },
  { href: "/work", label: "Work For Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
  }, [open]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 8);
      if (open) return;
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 90);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`site-header${hidden && !open ? " is-hidden" : ""}${
        atTop ? " is-top" : " is-scrolled"
      }${open ? " is-open" : ""}`}
    >
      <div className="site-header__bar">
        <Link className="logo" href="/" aria-label={`${site.name} home`}>
          {site.name}
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {links.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  onMouseEnter={(event) => {
                    if (!window.matchMedia("(min-width: 1180px)").matches) return;
                    const details = event.currentTarget.querySelector("details");
                    if (details) details.open = true;
                  }}
                  onMouseLeave={(event) => {
                    if (!window.matchMedia("(min-width: 1180px)").matches) return;
                    const details = event.currentTarget.querySelector("details");
                    if (!details) return;
                    details.open = false;
                    if (details.contains(document.activeElement)) {
                      document.activeElement.blur();
                    }
                  }}
                >
                  <details className="nav-details">
                    <summary>{link.label}</summary>
                    <ul className={link.wide ? "submenu submenu--wide" : "submenu"}>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          {child.external ? (
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link href={child.href} onClick={() => setOpen(false)}>
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
