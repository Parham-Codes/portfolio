/**
 * EmailJS configuration layer
 * Reads configuration from client-side environment variables with sanitization.
 */
const sanitize = (val) => {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
};

export const emailjsConfig = {
  serviceId: sanitize(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateId: sanitize(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: sanitize(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),

  /**
   * Checks if all required EmailJS credentials have been set with real values
   */
  isConfigured() {
    const hasService =
      Boolean(this.serviceId) && this.serviceId !== 'YOUR_SERVICE_ID';
    const hasTemplate =
      Boolean(this.templateId) && this.templateId !== 'YOUR_TEMPLATE_ID';
    const hasKey =
      Boolean(this.publicKey) && this.publicKey !== 'YOUR_PUBLIC_KEY';

    return hasService && hasTemplate && hasKey;
  },
};
