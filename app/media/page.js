import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Media",
  description: "Photos and film from welcome week.",
};

export default function MediaPage() {
  return (
    <main>
      <PageHeader title="Media" meta="Pictures" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            Film and stills from the harbour week are collected here after each
            event. Nothing is posted from a night until the following Monday.
          </p>
          <p>
            If you took pictures and want them included, write to
            hello@ukfreshers.guide with the city and the date.
          </p>
        </div>
      </section>
    </main>
  );
}
