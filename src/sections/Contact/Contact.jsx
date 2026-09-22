import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Send,
  Mail,
  Copy,
  Check,
  Github,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.jsx';
import { Button } from '../../components/Button/Button.jsx';
import { useClipboard } from '../../hooks/useClipboard.js';
import { emailjsConfig } from '../../config/emailjs.js';
import { smoothEase, defaultViewport } from '../../utils/animations.jsx';

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { copied: copiedEmail, copy: copyEmail } = useClipboard();
  const { copied: copiedTelegram, copy: copyTelegram } = useClipboard();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (!emailjsConfig.isConfigured()) {
      setStatus('missing_config');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        reply_to: formState.email,
        subject: formState.subject,
        message: formState.message,
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || 'Failed to send message. Please try reaching out directly via Telegram or Email.'
      );
    }
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: smoothEase,
      },
    },
  };

  return (
    <section id="contact" className="py-12 md:py-18 flex flex-col gap-6 sm:gap-8 scroll-mt-24 sm:scroll-mt-28">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: smoothEase }}
      >
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let’s Discuss Your Next Project"
          description="Whether you have an open Front-End position, a freelance project, or just want to connect, feel free to reach out directly or use the contact form."
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Column (staggered cards) */}
        <motion.div
          variants={cardsContainerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Telegram Card */}
          <motion.div
            variants={cardVariants}
            className="p-5 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl flex flex-col gap-3 group card-hover-glow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center border border-[#38bdf8]/20 group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#87929a] uppercase">Telegram</span>
                  <span className="font-sans text-sm font-semibold text-[#dfe2ee]">@ItsParhamDev</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyTelegram('@ItsParhamDev')}
                  aria-label="Copy Telegram username"
                  className="p-2 rounded-lg bg-[#262a33] text-[#bdc8d1] hover:text-white hover:bg-[#31353e] transition-colors cursor-pointer"
                  title="Copy username"
                >
                  {copiedTelegram ? <Check className="w-4 h-4 text-[#56e5a9]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href="https://t.me/ItsParhamDev"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Telegram"
                  className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] hover:bg-[#38bdf8]/20 transition-colors"
                  title="Open Telegram"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="font-sans text-xs text-[#87929a] leading-relaxed">
              Fastest way to reach me for direct messaging, project questions, and quick updates.
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            className="p-5 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl flex flex-col gap-3 group card-hover-glow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c0c1ff]/10 text-[#c0c1ff] flex items-center justify-center border border-[#c0c1ff]/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#87929a] uppercase">Email</span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[#dfe2ee] break-all sm:break-normal">parhamtaghikhani.31@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyEmail('parhamtaghikhani.31@gmail.com')}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-[#262a33] text-[#bdc8d1] hover:text-white hover:bg-[#31353e] transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#56e5a9]" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href="mailto:parhamtaghikhani.31@gmail.com"
                  aria-label="Send email directly"
                  className="p-2 rounded-lg bg-[#c0c1ff]/10 text-[#c0c1ff] hover:bg-[#c0c1ff]/20 transition-colors"
                  title="Send email"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <p className="font-sans text-xs text-[#87929a] leading-relaxed">
              For formal inquiries, detailed project briefs, or recruitment opportunities.
            </p>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            variants={cardVariants}
            className="p-5 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl shadow-xl flex flex-col gap-3 group card-hover-glow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#87929a] uppercase">GitHub</span>
                  <span className="font-sans text-sm font-semibold text-[#dfe2ee]">github.com/Parham-Codes</span>
                </div>
              </div>
              <a
                href="https://github.com/Parham-Codes"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="font-sans text-xs text-[#87929a] leading-relaxed">
              Explore public repositories, commits, and codebase architectures.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form Column (single container animation, no per-field animation) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
          className="lg:col-span-7 rounded-2xl bg-[#181c24]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 shadow-xl"
        >
          <h3 className="font-display text-xl font-bold text-[#dfe2ee] mb-1">
            Send a Direct Message
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#87929a] mb-6">
            Fill out the form below and it will be sent directly to my inbox via EmailJS.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs text-[#bdc8d1] font-medium">
                  Your Name <span className="text-[#38bdf8]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Parham Taghikhani"
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0f131c] border text-sm text-[#dfe2ee] placeholder:text-[#87929a]/60 focus:outline-none transition-colors ${
                    errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#38bdf8]'
                  }`}
                />
                {errors.name && <span className="font-sans text-xs text-rose-400">{errors.name}</span>}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs text-[#bdc8d1] font-medium">
                  Email Address <span className="text-[#38bdf8]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="parham@company.com"
                  disabled={status === 'loading'}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0f131c] border text-sm text-[#dfe2ee] placeholder:text-[#87929a]/60 focus:outline-none transition-colors ${
                    errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#38bdf8]'
                  }`}
                />
                {errors.email && <span className="font-sans text-xs text-rose-400">{errors.email}</span>}
              </div>
            </div>

            {/* Subject field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="font-mono text-xs text-[#bdc8d1] font-medium">
                Subject <span className="text-[#38bdf8]">*</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Front-End Role / New Project Discussion"
                disabled={status === 'loading'}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#0f131c] border text-sm text-[#dfe2ee] placeholder:text-[#87929a]/60 focus:outline-none transition-colors ${
                  errors.subject ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#38bdf8]'
                }`}
              />
              {errors.subject && <span className="font-sans text-xs text-rose-400">{errors.subject}</span>}
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs text-[#bdc8d1] font-medium">
                Message <span className="text-[#38bdf8]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, or requirements..."
                disabled={status === 'loading'}
                className={`w-full px-4 py-2.5 rounded-xl bg-[#0f131c] border text-sm text-[#dfe2ee] placeholder:text-[#87929a]/60 focus:outline-none transition-colors resize-y min-h-[100px] ${
                  errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-[#38bdf8]'
                }`}
              />
              {errors.message && <span className="font-sans text-xs text-rose-400">{errors.message}</span>}
            </div>

            {/* Status alerts */}
            {status === 'success' && (
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'missing_config' && (
              <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs flex flex-col gap-1">
                <div className="flex items-center gap-2 font-semibold">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>EmailJS keys not configured yet</span>
                </div>
                <p className="text-[#bdc8d1] text-[11px] leading-relaxed">
                  Please reach out directly via Telegram (<a href="https://t.me/ItsParhamDev" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">@ItsParhamDev</a>) or Email (<a href="mailto:parhamtaghikhani.31@gmail.com" className="text-[#38bdf8] underline">parhamtaghikhani.31@gmail.com</a>).
                </p>
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === 'loading'}
              icon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              iconPosition="right"
              className="mt-2 w-full sm:w-auto self-start"
            >
              {status === 'loading' ? 'Sending Message...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
