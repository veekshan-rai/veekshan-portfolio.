import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { social, emailJS } from '../data/portfolio';

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        emailJS.serviceId,
        emailJS.templateId,
        formRef.current,
        emailJS.publicKey
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: social.email,
      href: `mailto:${social.email}`,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'veekshan-rai',
      href: social.github,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Veekshan Rai',
      href: social.linkedin,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Karnataka, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg border border-gray-200 bg-white flex items-center gap-4 group hover:border-violet-500 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white transition-colors text-black">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {item.label}
                      </p>
                      <p className="text-sm text-black font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="p-4 rounded-lg border border-gray-200 bg-white flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-black">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {item.label}
                      </p>
                      <p className="text-sm text-black font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-lg border border-gray-200 bg-white space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="from_name" className="block text-sm text-black mb-2 font-medium">
                    Name
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block text-sm text-black mb-2 font-medium">
                    Email
                  </label>
                  <input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-black mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-400 text-sm focus:outline-none focus:border-violet-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                id="submit-contact"
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sent ? (
                  <>
                    <FaCheckCircle size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
