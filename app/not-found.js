import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <main>
      <PageHeader title="That page is not on the quay" />
      <section className="section">
        <div className="container center">
          <Link className="btn" href="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
