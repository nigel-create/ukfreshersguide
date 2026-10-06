import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Halloween",
  description: "The October weekend on the harbour.",
};

export default function HalloweenPage() {
  return (
    <main>
      <PageHeader title="Halloween" meta="October" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            The listed nights are the LSE sports night and the A-level results
            party. Both are on the events page.
          </p>
          <p>
            <Link className="btn" href="/events">
              See the events
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
