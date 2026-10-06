import { notFound } from "next/navigation";
import Poster from "@/components/Poster";
import { events, getEvent } from "@/lib/content";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event" };
  return { title: event.title, description: event.summary };
}

function Icon({ children }) {
  return (
    <span className="event-single__icon" aria-hidden="true">
      {children}
    </span>
  );
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const shareText = encodeURIComponent(event.title);

  return (
    <main className="event-single">
      <div className="event-single__image">
        <Poster kicker={event.kicker} title={event.title} tone={event.tone} />
      </div>

      <div className="event-single__body">
        <h1 className="event-single__heading">{event.title}</h1>

        <div className="event-single__meta">
          <div className="event-single__meta-row">
            <Icon>
              <svg viewBox="0 0 24 24">
                <path
                  d="M7 3v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V3h-2v2H9V3H7zm12 8H5v8h14v-8z"
                  fill="currentColor"
                />
              </svg>
            </Icon>
            <span>{event.date}</span>
          </div>
          <div className="event-single__meta-row">
            <Icon>
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                  fill="currentColor"
                />
              </svg>
            </Icon>
            <span>{event.place}</span>
          </div>
        </div>

        <a
          className="btn event-single__ticket"
          href={event.ticket}
          target="_blank"
          rel="noreferrer"
        >
          Get ticket
        </a>

        <div className="event-single__share">
          <span className="event-single__share-label">Share</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareText}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on Facebook"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on X"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 4l6.8 8.7L4.4 20H6.6l5.1-5.6L16.2 20H20l-7.2-9.2L19.4 4H17.2l-4.6 5.1L8 4H4z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        <div className="event-single__content">
          <p>{event.summary}</p>
          <ul>
            {event.details.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
