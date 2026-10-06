import CityScreen from "@/components/CityScreen";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <CityScreen />

      <section className="band band--video" aria-label="Film">
        <div className="band__video">
          <video controls playsInline preload="none" aria-label="Video placeholder" />
          <p className="band__video-label">Video</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Events</h2>
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
