"use client";

import { useMemo, useState } from "react";
import EventCard from "./EventCard";

export default function EventSearch({ events }) {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return events;
    return events.filter((event) =>
      `${event.title} ${event.place} ${event.date}`.toLowerCase().includes(needle)
    );
  }, [events, query]);

  return (
    <div>
      <label className="search">
        <span className="sr-only">Search events</span>
        <input
          type="search"
          value={query}
          placeholder="Search by name or place"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      {visible.length === 0 ? (
        <p className="empty">Nothing matches that search.</p>
      ) : (
        visible.map((event) => <EventCard key={event.slug} event={event} />)
      )}
    </div>
  );
}
