"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { cities, site } from "@/lib/content";

export default function CityScreen() {
  const router = useRouter();

  return (
    <section className="city-screen" aria-label="Choose a city">
      <p className="city-screen__mark">{site.name}</p>
      <p className="city-screen__line">SELECT YOUR CITY</p>

      <div className="city-pills">
        {cities.map((city) =>
          city.slug === "london" ? (
            <a
              key={city.slug}
              className="city-pill"
              href="https://www.londonfreshers.com/"
              target="_blank"
              rel="noreferrer"
            >
              {city.name}
            </a>
          ) : (
            <Link key={city.slug} className="city-pill" href={`/cities/${city.slug}`}>
              {city.name}
            </Link>
          )
        )}
      </div>

      <label className="city-select">
        <span className="sr-only">Select a city</span>
        <select
          defaultValue=""
          onChange={(event) => {
            const value = event.target.value;
            if (!value) return;
            if (value.startsWith("http")) {
              window.open(value, "_blank", "noopener,noreferrer");
              event.target.value = "";
              return;
            }
            router.push(value);
          }}
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city) => (
            <option
              key={city.slug}
              value={
                city.slug === "london"
                  ? "https://www.londonfreshers.com/"
                  : `/cities/${city.slug}`
              }
            >
              {city.name}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
