"use client";

import { useState } from "react";
import { colleges } from "@/lib/content";

export default function SignupForm({ group = "" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="form-note" role="status">
        {group
          ? `You are on the list for the ${group} group chat.`
          : "You are on the list. We will write when the wristband window opens."}
      </p>
    );
  }

  return (
    <form
      className="stack-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Name
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      {group ? (
        <label>
          Group chat
          <input name="group" type="text" defaultValue={group} readOnly />
        </label>
      ) : (
        <label>
          College or hall
          <select name="college" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {colleges.map((college) => (
              <option key={college.slug} value={college.slug}>
                {college.name}
              </option>
            ))}
          </select>
        </label>
      )}
      <label className="check">
        <input type="checkbox" name="wristband" />
        Tell me when the Harbour Wristband goes on sale
      </label>
      <button className="btn" type="submit">
        Join the list
      </button>
    </form>
  );
}
