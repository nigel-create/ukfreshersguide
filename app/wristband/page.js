import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Harbour wristband",
  description: "One band for the first three weeks of term.",
};

export default function WristbandPage() {
  return (
    <main>
      <PageHeader title="Harbour wristband" meta="Tickets" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            The wristband is the simple way through welcome week. It is £42,
            it lasts from 14 September to 4 October, and it names the events
            you actually attend.
          </p>
          <h2>What it opens</h2>
          <ul>
            <li>Lantern Athletic Night and Signal Yard Late</li>
            <li>The Quay Market Crawl on the first two Sundays</li>
            <li>Breakfast at Beacon Hall on move-in weekend</li>
          </ul>
          <h2>How refunds work</h2>
          <p>
            Check in for the dates you want. If a night is still unused the
            Monday after the band expires, that share returns to the card you
            paid with. The band itself is not a ticket to every room in the
            city.
          </p>
          <p>
            <Link className="btn" href="/signup">
              Get on the sale list
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
