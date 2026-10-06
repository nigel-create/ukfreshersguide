import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Blogs",
  description: "Short notes for the first weeks of term.",
};

const posts = [
  {
    href: "/a-levels",
    title: "What to do on results morning",
    note: "A desk, a phone call, and breakfast before you book a train.",
  },
  {
    href: "/events/lse-sports-night-xoyo",
    title: "LSE sports night at XOYO",
    note: "Wednesday night at XOYO, with tickets on the event page.",
  },
  {
    href: "/groups",
    title: "Finding your hall board",
    note: "Why the link is sent to a college email and not posted here.",
  },
];

export default function BlogsPage() {
  return (
    <main>
      <PageHeader title="Blogs" meta="Notes" />
      <section className="section">
        <div className="container container--narrow">
          {posts.map((post) => (
            <article key={post.href} className="college-card">
              <h2>
                <Link href={post.href}>{post.title}</Link>
              </h2>
              <p>{post.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
