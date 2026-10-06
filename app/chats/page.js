import PageHeader from "@/components/PageHeader";
import { colleges } from "@/lib/content";

export const metadata = {
  title: "Campus chats",
  description: "College and hall boards for new arrivals.",
};

export default function ChatsPage() {
  return (
    <main>
      <PageHeader title="Campus chats" meta="Halls and colleges" />
      <section className="section">
        <div className="container">
          <p className="lede">
            Each board is run by returning students. Leave your college email
            with the Ropewalk desk and they send the thread. Links are not
            posted in public.
          </p>
          <div className="college-grid">
            {colleges.map((college) => (
              <article key={college.slug} id={college.slug} className="college-card">
                <h2>{college.name}</h2>
                <p>Ask the desk for this thread after you have a college email.</p>
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
