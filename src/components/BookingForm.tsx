"use client";

import { useState } from "react";
import services from "@/data/services.json";

type FormFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

type FormErrors = Partial<FormFields>;

const empty: FormFields = {
  name: "",
  phone: "",
  email: "",
  service: services[0]?.title ?? "",
  date: "",
  message: "",
};

function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!form.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!form.service) errors.service = "Please select a service.";
  if (form.message && form.message.length > 1000)
    errors.message = "Message must be under 1000 characters.";
  return errors;
}

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState<FormFields>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: validate({ ...form, [name]: value })[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(form)[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allErrors = validate(form);
    setErrors(allErrors);
    setTouched({ name: true, phone: true, email: true, service: true, date: true, message: true });

    if (Object.keys(allErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xrewkwqe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(empty);
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field = "w-full bg-charcoal border rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold outline-none";

  if (status === "success") {
    return (
      <div className="text-center bg-charcoal-light border border-gold/30 rounded-2xl p-10">
        <h3 className="font-display text-2xl text-gold mb-3">Booking Received!</h3>
        <p className="text-cream/70 text-sm">
          Thank you. We&apos;ll reach out to confirm your fitting shortly. For a faster response, message us directly on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-charcoal-light border border-gold/15 rounded-2xl p-6 sm:p-10"
    >
      <div className="sm:col-span-1">
        <label htmlFor="name" className="block text-sm text-cream/70 mb-2">Full Name *</label>
        <input
          id="name" name="name" required
          value={form.name} onChange={handleChange} onBlur={handleBlur}
          className={`${field} ${errors.name ? "border-red-500" : "border-gold/20"}`}
          placeholder="Your full name"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className="block text-sm text-cream/70 mb-2">Phone Number *</label>
        <input
          id="phone" name="phone" type="tel" required
          value={form.phone} onChange={handleChange} onBlur={handleBlur}
          className={`${field} ${errors.phone ? "border-red-500" : "border-gold/20"}`}
          placeholder="+234..."
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className="block text-sm text-cream/70 mb-2">Email Address *</label>
        <input
          id="email" name="email" type="email" required
          value={form.email} onChange={handleChange} onBlur={handleBlur}
          className={`${field} ${errors.email ? "border-red-500" : "border-gold/20"}`}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="service" className="block text-sm text-cream/70 mb-2">Service Required *</label>
        <select
          id="service" name="service" required
          value={form.service} onChange={handleChange} onBlur={handleBlur}
          className={`${field} ${errors.service ? "border-red-500" : "border-gold/20"}`}
        >
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>
        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="date" className="block text-sm text-cream/70 mb-2">Preferred Date</label>
        <input
          id="date" name="date" type="date"
          value={form.date} onChange={handleChange} onBlur={handleBlur}
          className={`${field} border-gold/20`}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm text-cream/70 mb-2">Message</label>
        <textarea
          id="message" name="message" rows={4}
          value={form.message} onChange={handleChange} onBlur={handleBlur}
          className={`${field} ${errors.message ? "border-red-500" : "border-gold/20"} resize-none`}
          placeholder="Tell us about the occasion, fabric preference, sizing notes, etc."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        <p className="text-cream/30 text-xs mt-1 text-right">{form.message.length}/1000</p>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto bg-gold text-charcoal font-semibold px-8 py-3.5 rounded-full uppercase tracking-wide text-sm hover:bg-gold-light transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Booking Request"}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Something went wrong. Please try again or message us on WhatsApp.</p>
        )}
      </div>
    </form>
  );
}