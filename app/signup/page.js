import PageHeader from "@/components/PageHeader";
import SignupForm from "@/components/SignupForm";
import { isUniversity } from "@/lib/universities";

export const metadata = {
  title: "Sign up",
  description: "Join the UK Freshers Guide welcome-week list.",
};

export default async function SignupPage({ searchParams }) {
  const query = await searchParams;
  const requested = typeof query.group === "string" ? query.group : "";
  const group = isUniversity(requested) ? requested : "";

  return (
    <main>
      <PageHeader title="Sign up" meta={group ? "Group chat" : "The list"} />
      <section className="section">
        <div className="container container--narrow">
          <p className="lede">
            {group
              ? `Join the ${group} group chat. Leave your name and email and the desk will add you.`
              : "One note when the wristband window opens, and a second if your college board goes live. No nightly mail."}
          </p>
          <SignupForm group={group} />
        </div>
      </section>
    </main>
  );
}
