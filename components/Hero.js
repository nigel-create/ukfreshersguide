"use client";

import { useState } from "react";

export default function Hero() {
  const [playing, setPlaying] = useState(true);

  return (
    <section className={`hero${playing ? " is-playing" : ""}`} aria-label="Harbour film">
      <div className="hero__stage">
        <p className="hero__kicker">Welcome week</p>
        <p className="hero__title">UK Freshers Guide</p>
        <p className="hero__line">Move-in on the harbour</p>
      </div>
      <button
        className="hero__toggle"
        type="button"
        aria-pressed={playing}
        onClick={() => setPlaying((value) => !value)}
      >
        <span className="sr-only">{playing ? "Pause the harbour film" : "Play the harbour film"}</span>
        {playing ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        )}
      </button>
    </section>
  );
}
