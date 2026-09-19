import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Send,
  ArrowRight,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../../components/Button/Button.tsx';
import { useClipboard } from '../../hooks/useClipboard.ts';
import { emailjsConfig } from '../../config/emailjs.ts';

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const lastSubmitTime = useRef<number>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Honeypot field for automated spam bots
  const [botTrap, setBotTrap] = useState('');

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const emailAddress = 'parhamtaghikhani.31@gmail.com';
  const { copied, copy } = useClipboard(2500);

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      errors.name = 'Please enter your name.';
    } else if (trimmedName.length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    } else if (trimmedName.length > 80) {
      errors.name = 'Name must be under 80 characters.';
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = 'Please enter a valid email address.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address.';
    } else if (trimmedEmail.length > 120) {
      errors.email = 'Email address is too long.';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      errors.message = 'Please enter a message.';
    } else if (trimmedMessage.length < 10) {
      errors.message = 'Please enter at least 10 characters.';
    } else if (trimmedMessage.length > 2500) {
      errors.message = 'Message must be under 2,500 characters.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Silent Bot Trap: if honeypot was filled, pretend success and abort immediately
    if (botTrap) {
      setIsSending(false);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    // 2. Prevent duplicate submissions while in-flight
    if (isSending) {
      return;
    }

    // 3. Client-side Rate Limiting (5-second throttle between attempts)
    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before submitting again.');
      return;
    }

    // 4. Offline Connectivity Check
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setStatus('error');
      setErrorMessage('Network connection offline. Please check your internet and try again.');
      return;
    }

    // 5. Input Validation
    if (!validate()) {
      return;
    }

    if (!form.current) {
      return;
    }

    // 6. Verify EmailJS configuration
    if (!emailjsConfig.isConfigured()) {
      setStatus('error');
      setErrorMessage(
        'The contact service is temporarily unavailable. Please reach out directly via email.'
      );
      return;
    }

    // 7. Execute Request with protected state
    setIsSending(true);
    setStatus('idle');
    setErrorMessage('');
    lastSubmitTime.current = now;

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        {
          publicKey: emailjsConfig.publicKey,
        }
      );

      // Verified success state
      setStatus('success');
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
      form.current.reset();
      setFieldErrors({});
    } catch {
      // Robust error handling: Never leak stack traces or internal IDs to the UI
      setStatus('error');
      setIsSending(false);
      setErrorMessage(
        'Unable to deliver your message right now. Your draft has been kept safe below — please try again or email me directly.'
      );
    }
  };

  const getButtonText = () => {
    if (isSending) return 'Sending...';
    if (status === 'error') return 'Try Again →';
    return 'Send Message →';
  };

  const contactMethods = [
    {
      id: '01',
      label: 'Email',
      value: emailAddress,
      description: emailAddress,
      href: `mailto:${emailAddress}`,
      isExternal: false,
      isEmail: true,
      icon: Mail,
      iconColor: 'text-[#38bdf8]',
      badgeBg: 'bg-[#38bdf8]/10 border-[#38bdf8]/20',
    },
    {
      id: '02',
      label: 'LinkedIn',
      value: 'parhamtaghikhani',
      description: 'Connect professionally',
      href: 'https://linkedin.com/in/parhamtaghikhani',
      isExternal: true,
      isEmail: false,
      icon: Linkedin,
      iconColor: 'text-[#38bdf8]',
      badgeBg: 'bg-[#38bdf8]/10 border-[#38bdf8]/20',
    },
    {
      id: '03',
      label: 'GitHub',
      value: 'Parham-Codes',
      description: 'View my projects and source code',
      href: 'https://github.com/Parham-Codes',
      isExternal: true,
      isEmail: false,
      icon: Github,
      iconColor: 'text-[#dfe2ee]',
      badgeBg: 'bg-white/10 border-white/15',
    },
    {
      id: '04',
      label: 'Telegram',
      value: '@parhamtaghikhani',
      description: 'Quick contact',
      href: 'https://t.me/parhamtaghikhani',
      isExternal: true,
      isEmail: false,
      icon: Send,
      iconColor: 'text-[#38bdf8]',
      badgeBg: 'bg-[#38bdf8]/10 border-[#38bdf8]/20',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 flex flex-col gap-10">
      {/* Section Header */}
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          GET IN TOUCH
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight leading-tight">
          Let's Work Together
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#bdc8d1] leading-relaxed">
          Have a project, job opportunity, or collaboration in mind? Let's talk.
        </p>
      </div>

      {/* Two-Column Grid: Form (Left ~60%) | Contact Methods (Right ~40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-xl flex flex-col gap-5">
          {/* Subtle Success Toast / Message */}
          {status === 'success' && (
            <div
              role="status"
              aria-live="polite"
              className="p-4 rounded-xl bg-[#56e5a9]/10 border border-[#56e5a9]/25 text-[#56e5a9] text-xs sm:text-sm font-sans flex items-center justify-between gap-3 animate-fade-in"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#56e5a9] shrink-0" />
                <span>Message sent successfully. I'll get back to you soon.</span>
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-xs font-mono text-[#56e5a9] hover:text-white px-2 py-1 rounded bg-[#56e5a9]/20 shrink-0 cursor-pointer transition-colors"
                aria-label="Dismiss success message"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Recoverable Error Message */}
          {status === 'error' && (
            <div
              role="alert"
              aria-live="polite"
              className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs sm:text-sm font-sans flex items-start justify-between gap-3 animate-fade-in"
            >
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5">
                  <span>
                    {errorMessage || (
                      <>
                        Something went wrong. Your message wasn't sent. Please try again or{' '}
                        <a
                          href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                            `Direct Inquiry from ${formData.name || 'Portfolio Visitor'}`
                          )}&body=${encodeURIComponent(formData.message || '')}`}
                          className="underline text-white hover:text-[#38bdf8] font-semibold transition-colors"
                        >
                          contact me directly by email
                        </a>
                        .
                      </>
                    )}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setErrorMessage('');
                }}
                className="text-xs font-mono text-rose-300 hover:text-white px-2 py-1 rounded bg-rose-500/20 shrink-0 cursor-pointer transition-colors"
                aria-label="Dismiss error message"
              >
                Dismiss
              </button>
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Bot Honeypot: Inaccessible to sighted users and screen readers, traps spam bots */}
            <div
              className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none"
              aria-hidden="true"
            >
              <label htmlFor="company_website_trap">Leave this blank</label>
              <input
                type="text"
                id="company_website_trap"
                name="company_website_trap"
                tabIndex={-1}
                autoComplete="off"
                value={botTrap}
                onChange={(e) => setBotTrap(e.target.value)}
              />
            </div>

            {/* Field: Your Name */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-name"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#dfe2ee]"
                >
                  Your Name
                </label>
                {fieldErrors.name ? (
                  <span
                    id="name-error"
                    role="alert"
                    className="text-[11px] font-sans text-rose-400 font-medium flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {fieldErrors.name}
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-[#87929a] font-normal">Required</span>
                )}
              </div>
              <input
                id="contact-name"
                name="name"
                type="text"
                maxLength={80}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                disabled={isSending}
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g. Alex Morgan"
                className={`w-full px-4 py-3 rounded-xl bg-[#0f131a] text-[#dfe2ee] placeholder:text-[#87929a] text-sm sm:text-base focus:outline-none transition-all ${
                  fieldErrors.name
                    ? 'border border-rose-500/60 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30'
                    : 'border border-white/10 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              />
            </div>

            {/* Field: Your Email */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-email"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#dfe2ee]"
                >
                  Your Email
                </label>
                {fieldErrors.email ? (
                  <span
                    id="email-error"
                    role="alert"
                    className="text-[11px] font-sans text-rose-400 font-medium flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {fieldErrors.email}
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-[#87929a] font-normal">Required</span>
                )}
              </div>
              <input
                id="contact-email"
                name="email"
                type="email"
                maxLength={120}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                disabled={isSending}
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#0f131a] text-[#dfe2ee] placeholder:text-[#87929a] text-sm sm:text-base focus:outline-none transition-all ${
                  fieldErrors.email
                    ? 'border border-rose-500/60 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30'
                    : 'border border-white/10 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              />
            </div>

            {/* Field: Your Message */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="contact-message"
                  className="font-sans text-xs sm:text-sm font-semibold text-[#dfe2ee]"
                >
                  Your Message
                </label>
                {fieldErrors.message ? (
                  <span
                    id="message-error"
                    role="alert"
                    className="text-[11px] font-sans text-rose-400 font-medium flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {fieldErrors.message}
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-[#87929a] font-normal">Required</span>
                )}
              </div>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                maxLength={2500}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                disabled={isSending}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Describe your project, role, or questions..."
                className={`w-full px-4 py-3 rounded-xl bg-[#0f131a] text-[#dfe2ee] placeholder:text-[#87929a] text-sm sm:text-base focus:outline-none transition-all resize-none ${
                  fieldErrors.message
                    ? 'border border-rose-500/60 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/30'
                    : 'border border-white/10 focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSending}
                icon={
                  isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  )
                }
                iconPosition="right"
                className="w-full sm:w-auto font-bold justify-center"
              >
                {getButtonText()}
              </Button>

              <span className="font-sans text-xs text-[#87929a] text-center sm:text-right">
                {isSending ? 'Sending message...' : 'Delivered directly to inbox'}
              </span>
            </div>
          </form>
        </div>

        {/* Right Column: Contact Methods & Availability */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#181c24] border border-[#56e5a9]/20 text-[#56e5a9] text-xs font-mono w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#56e5a9] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#56e5a9]" />
            </span>
            <span>Open to Front-End Opportunities</span>
          </div>

          {/* Compact Contact Methods List */}
          <div className="flex flex-col gap-2.5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className="relative group rounded-xl bg-[#181c24]/80 hover:bg-[#1c2028] border border-white/[0.06] hover:border-[#38bdf8]/40 transition-all duration-200"
                >
                  <a
                    href={method.href}
                    target={method.isExternal ? '_blank' : undefined}
                    rel={method.isExternal ? 'noreferrer' : undefined}
                    className="flex items-center justify-between p-3.5 sm:p-4 w-full"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Icon */}
                      <div
                        className={`w-9 h-9 rounded-lg ${method.badgeBg} border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                      >
                        <Icon className={`w-4 h-4 ${method.iconColor}`} />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-[#87929a]">
                            {method.id}
                          </span>
                          <span className="font-sans text-sm font-semibold text-[#dfe2ee] group-hover:text-white transition-colors">
                            {method.label}
                          </span>
                        </div>
                        <span className="font-sans text-xs text-[#87929a] group-hover:text-[#bdc8d1] truncate transition-colors">
                          {method.description}
                        </span>
                      </div>
                    </div>

                    {/* Arrow / indicator */}
                    <div className="flex items-center gap-1.5 shrink-0 ml-3">
                      {method.isEmail && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            copy(method.value);
                          }}
                          className="p-1.5 rounded-md hover:bg-white/10 text-[#87929a] hover:text-[#38bdf8] transition-colors cursor-pointer"
                          title="Copy email to clipboard"
                          aria-label="Copy email address"
                        >
                          {copied ? (
                            <Check className="w-3.5 h-3.5 text-[#56e5a9]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                      <div className="w-7 h-7 rounded-lg bg-white/[0.04] group-hover:bg-[#38bdf8]/15 text-[#87929a] group-hover:text-[#38bdf8] flex items-center justify-center transition-all">
                        {method.isExternal ? (
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
