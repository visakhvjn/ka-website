"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const { messages: m } = useLocale();
  const serviceCategories = useServiceCategories();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError(m.contactForm.errorBody);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${m.contactForm.mailSubject} ${form.name}`,
          from_name: site.shortName,
          name: form.name.trim(),
          email: form.email.trim(),
          replyto: form.email.trim(),
          phone: form.phone.trim() || "Not provided",
          service: form.service.trim() || "Not specified",
          message: form.message.trim(),
        }),
      });

      let result: { success?: boolean; message?: string };

      try {
        result = (await response.json()) as {
          success?: boolean;
          message?: string;
        };
      } catch {
        throw new Error(m.contactForm.errorBody);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? m.contactForm.errorBody);
      }

      setForm(emptyForm);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : m.contactForm.errorBody);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface-muted p-8 text-center">
        <p className="text-lg font-semibold text-brand">
          {m.contactForm.successTitle}
        </p>
        <p className="mt-2 text-muted">{m.contactForm.successBody}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-brand hover:underline"
        >
          {m.common.sendAnotherMessage}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-semibold underline"
          >
            {site.contact.email}
          </a>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-muted"
          >
            {m.contactForm.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            required
            disabled={submitting}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
            placeholder={m.contactForm.namePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-muted"
          >
            {m.contactForm.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            required
            disabled={submitting}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
            placeholder={m.contactForm.emailPlaceholder}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-muted"
          >
            {m.contactForm.phoneLabel}
          </label>
          <input
            id="phone"
            type="tel"
            disabled={submitting}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
            placeholder={m.contactForm.phonePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-muted"
          >
            {m.contactForm.serviceLabel}
          </label>
          <select
            id="service"
            disabled={submitting}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          >
            <option value="">{m.contactForm.servicePlaceholder}</option>
            {serviceCategories.map((cat) => (
              <option key={cat.slug} value={cat.title}>
                {cat.title}
              </option>
            ))}
            <option value={m.common.other}>{m.common.other}</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-muted"
        >
          {m.contactForm.messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          disabled={submitting}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          placeholder={m.contactForm.messagePlaceholder}
        />
      </div>

      <Button type="submit" size="lg" disabled={submitting}>
        {submitting ? m.contactForm.submitting : m.contactForm.submit}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
