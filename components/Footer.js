import Link from "next/link";
import { site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/groups", label: "Groups" },
  { href: "/signup", label: "Sign Up" },
  { href: "/blogs", label: "Blogs" },
  { href: "/work", label: "Work For Us" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <p className="logo logo--footer">{site.name}</p>
        <p className="site-footer__address">
          {site.address}
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        </p>
        <p className="site-footer__copy">© {site.name} {new Date().getFullYear()}</p>
      </div>
      <div className="site-footer__bar">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`}>E: {site.email}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
