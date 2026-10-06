import Link from "next/link";
import Poster from "./Poster";

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <Link href={`/events/${event.slug}`} className="event-card__media">
        <Poster kicker={event.kicker} title={event.title} tone={event.tone} />
      </Link>
      <div className="event-card__body">
        <p className="meta">{event.date}</p>
        <h3>
          <Link href={`/events/${event.slug}`}>{event.title}</Link>
        </h3>
        <p className="meta meta--place">{event.place}</p>
      </div>
      <div className="event-card__cta">
        <Link className="btn" href={`/events/${event.slug}`}>
          View
        </Link>
      </div>
    </article>
  );
}
