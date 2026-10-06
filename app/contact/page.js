import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Write to the UK Freshers Guide desk.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="Contact" meta="Ropewalk desk" />
      <section className="section">
        <div className="container contact-layout">
          <div>
            <p className="lede">
              The desk is open on weekdays in term, 10 am to 4 pm.
            </p>
            <p>
              {site.address}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
