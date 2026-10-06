import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { cities, getCity } from "@/lib/content";
import { getUniversities } from "@/lib/universities";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "City" };
  return {
    title: `Welcome to ${city.name}`,
    description: `Welcome to ${city.name}. Join a university group chat, then follow Instagram and Snapchat.`,
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const universities = getUniversities(city.slug);

  return (
    <main>
      <PageHeader title={`Welcome to ${city.name}`} meta="Freshers week" />

      <section className="section">
        <div className="container container--narrow center">
          <p className="lede">
            Welcome to {city.name}. Choose your university to join that group
            chat, then use the Instagram and Snapchat buttons further down the
            page.
          </p>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container">
          <h2 className="section-heading">Group chats</h2>
          <p className="center lede">
            University group chats for students arriving in {city.name}.
          </p>
          <div className="chip-grid">
            {universities.map((name) => (
              <button key={name} className="btn" type="button">
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container container--narrow center">
          <h2>Follow us on Instagram</h2>
          <p>Stories, dates, and the week as it happens.</p>
          <a
            className="btn btn--light"
            href="https://www.instagram.com/freshersguide/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Follow us on Instagram
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow center">
          <h2 className="section-heading">Join our Snapchat</h2>
          <p className="lede">Add the account and the city chat stays in your pocket.</p>
          <a
            className="btn"
            href="https://www.snapchat.com/@london.freshers"
            target="_blank"
            rel="noreferrer"
          >
            Join our Snapchat
          </a>
        </div>
      </section>
    </main>
  );
}
