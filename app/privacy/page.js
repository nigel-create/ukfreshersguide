import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/content";

export const metadata = {
  title: "Privacy",
  description: "What UK Freshers Guide stores when you write to the desk.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader title="Privacy" meta="A short note" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            {site.name} keeps the name, email, and college you type into the
            sign-up or contact form so the Ropewalk desk can reply. This demo
            keeps that message in your browser only. Nothing is sent to a
            server.
          </p>
          <p>
            The cookie box stores a single flag, <code>uk-freshers-cookie</code>,
            so it does not return on the next visit. Clear site data in your
            browser and the box comes back.
          </p>
          <p>
            Questions go to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
