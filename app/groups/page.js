import PageHeader from "@/components/PageHeader";
import { colleges } from "@/lib/content";

export const metadata = {
  title: "Groups",
  description: "College and hall boards for new arrivals.",
};

export default function GroupsPage() {
  return (
    <main>
      <PageHeader title="Groups" meta="Boards" />
      <section className="section">
        <div className="container">
          <p className="lede">
            Each college and hall has a board for offer holders. Ask the desk
            for the live thread after you have a college email.
          </p>
          <div className="college-grid">
            {colleges.map((college) => (
              <article key={college.slug} id={college.slug} className="college-card">
                <h2>{college.name}</h2>
                <p>Request this thread from the Ropewalk desk.</p>
                <a className="btn" href="mailto:hello@ukfreshers.guide">
                  Request the thread
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
