"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const { messages: m } = useLocale();
  const serviceCategories = useServiceCategories();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${m.contactForm.mailSubject} ${form.name}`,
    );
    const body = encodeURIComponent(
      `${m.contactForm.mailName}: ${form.name}\n${m.contactForm.mailEmail}: ${form.email}\n${m.contactForm.mailPhone}: ${form.phone}\n${m.contactForm.mailService}: ${form.service}\n\n${m.contactForm.mailMessage}:\n${form.message}`,
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface-muted p-8 text-center">
        <p className="text-lg font-semibold text-brand">
          {m.contactForm.successTitle}
        </p>
        <p className="mt-2 text-muted">
          {m.contactForm.successBody}{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-semibold text-brand"
          >
            {site.contact.email}
          </a>
        </p>
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
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
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
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
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
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
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
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
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
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder={m.contactForm.messagePlaceholder}
        />
      </div>

      <Button type="submit" size="lg">
        {m.contactForm.submit}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
