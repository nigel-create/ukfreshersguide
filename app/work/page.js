import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Work for us",
  description: "Roles on the door, the desk, and the city pages.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader title="Work for us" meta="Term roles" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            Welcome week needs people on the door, at the Ropewalk desk, and
            writing the city pages. Roles run from results week through the
            first three weeks of term.
          </p>
          <p>You need to be based in the city you want to cover.</p>
          <p>
            <Link className="btn" href="/contact">
              Write to the desk
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
