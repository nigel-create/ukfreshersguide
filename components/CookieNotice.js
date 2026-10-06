"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CookieNotice() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const raised = /^\/events\/.+/.test(pathname);

  useEffect(() => {
    setVisible(window.localStorage.getItem("uk-freshers-cookie") !== "ok");
  }, []);

  if (!visible) return null;

  return (
    <aside className={`cookie${raised ? " is-raised" : ""}`} role="dialog" aria-label="Cookies">
      <h2>Cookies</h2>
      <p>
        This site stores one note in your browser so this box stays closed.{" "}
        <Link href="/privacy">Read the privacy note.</Link>
      </p>
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem("uk-freshers-cookie", "ok");
          setVisible(false);
        }}
      >
        Okay
      </button>
    </aside>
  );
}
