"use client";

import { cities } from "@/lib/content";

const ticket = "https://www.fatsoma.com/e/grh0ku0f/la/wpak";

export default function ALevelCities() {
  return (
    <>
      <label className="alevel-select">
        <span className="sr-only">Select a city</span>
        <select
          defaultValue=""
          onChange={(event) => {
            if (!event.target.value) return;
            window.open(ticket, "_blank", "noopener,noreferrer");
            event.target.value = "";
          }}
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
      <div className="chip-grid alevel-cities">
        {cities.map((city) => (
          <a key={city.slug} className="btn" href={ticket} target="_blank" rel="noreferrer">
            {city.name}
          </a>
        ))}
      </div>
    </>
  );
}
