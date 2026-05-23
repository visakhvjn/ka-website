"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
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
      `Consultation request from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface-muted p-8 text-center">
        <p className="text-lg font-semibold text-brand">
          Thank you for reaching out!
        </p>
        <p className="mt-2 text-muted">
          Your email client should open shortly. If it doesn&apos;t, email us
          directly at{" "}
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
          Send another message
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
            Full name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-muted"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-muted"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="+971 56 237 1945"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-muted"
          >
            Service interest
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="">Select a service</option>
            {serviceCategories.map((cat) => (
              <option key={cat.slug} value={cat.title}>
                {cat.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-muted"
        >
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-border px-4 py-3 text-brand outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Tell us about your business and how we can help..."
        />
      </div>

      <Button type="submit" size="lg">
        Send message
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
