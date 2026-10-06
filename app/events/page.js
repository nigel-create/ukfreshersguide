import EventSearch from "@/components/EventSearch";
import PageHeader from "@/components/PageHeader";
import { events } from "@/lib/content";

export const metadata = {
  title: "All events",
  description: "LSE sports night at XOYO and the A-level results party at Ministry of Sound.",
};

export default function EventsPage() {
  return (
    <main>
      <PageHeader title="All events" meta="Tickets" />
      <section className="section">
        <div className="container">
          <EventSearch events={events} />
        </div>
      </section>
    </main>
  );
}
