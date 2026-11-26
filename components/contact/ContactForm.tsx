"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

// Web3Forms emails each submission to the address registered with this key.
// The key is public by design (it can only send to that one inbox), so it lives in a build-time variable.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

// The n8n workflow finds these emails by this exact subject prefix. Keep the two in sync.
export const CONTACT_SUBJECT_PREFIX = "[Portfolio contact]";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-base text-text placeholder:text-muted focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (!accessKey) return null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${CONTACT_SUBJECT_PREFIX} ${data.get("name")}`,
          from_name: "Portfolio website",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!result.success) throw new Error("Web3Forms rejected the submission");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid max-w-2xl gap-4" aria-describedby="contact-form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" maxLength={100} className={field} />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" maxLength={200} className={field} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        Message
        <textarea name="message" required rows={5} maxLength={5000} className={field} />
      </label>
      {/* Honeypot: hidden from people, filled in by bots, rejected by Web3Forms. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent bg-accent px-5 py-2 font-medium text-on-accent transition hover:brightness-110 disabled:opacity-60"
        >
          <Send aria-hidden className="size-4" />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p id="contact-form-status" role="status" className="text-sm">
          {status === "sent" && <span className="text-success">Thanks! Your message is on its way.</span>}
          {status === "error" && (
            <span className="text-muted">Something went wrong. Please try again in a moment.</span>
          )}
        </p>
      </div>
    </form>
  );
}
