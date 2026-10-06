import ALevelCities from "@/components/ALevelCities";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "The Biggest A Level Results Rous 2027",
  description: "Pick a city for the biggest A-level results night.",
};

export default function ALevelsPage() {
  return (
    <main>
      <PageHeader
        title="The Biggest A Level Results Tours 2027"
        meta="A-level results"
      />
      <section className="section">
        <div className="container">
          <p className="lede center">
            This page is for A-level results cities. Choose a city and the
            ticket page opens.
          </p>
          <ALevelCities />
        </div>
      </section>
    </main>
  );
}
