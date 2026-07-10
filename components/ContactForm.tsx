'use client';

import { FormEvent, useState } from 'react';
import { site } from '@/lib/data';

export function ContactForm() {
  const [status, setStatus] = useState('');

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const mobile = String(form.get('mobile') || '').trim();
    const service = String(form.get('service') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('Please add name, email and requirement details.');
      return;
    }

    const subject = encodeURIComponent(`Website enquiry - ${service || 'Consultancy requirement'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile || '-'}\nService: ${service || '-'}\n\nRequirement:\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app with the enquiry details.');
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="form-intro">
        <span className="panel-kicker">Enquiry Form</span>
        <h3>Tell us what you want to certify or improve.</h3>
        <p>Share the standard, business type and target timeline so the first response can be useful.</p>
      </div>
      <div className="form-row">
        <label>
          Your Name *
          <input name="name" placeholder="Full name" autoComplete="name" required />
        </label>
        <label>
          Email *
          <input name="email" type="email" placeholder="name@company.com" autoComplete="email" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Mobile
          <input name="mobile" placeholder="+91" autoComplete="tel" />
        </label>
        <label>
          Service Interested In
          <input name="service" placeholder="ISO 9001, FSSAI, HACCP, BRC, food testing lab..." />
        </label>
      </div>
      <label>
        Requirement Details *
        <textarea name="message" placeholder="Mention your business type, current system, target standard and timeline." rows={6} required />
      </label>
      <button className="btn btn-primary" type="submit">Prepare Enquiry Email</button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
