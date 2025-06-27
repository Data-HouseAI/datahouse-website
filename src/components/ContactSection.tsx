'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import LoadingSpinner from './LoadingSpinner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    pathway: 'tech'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            pathway: formData.pathway,
          },
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        pathway: 'tech'
      });
    } catch (err) {
      setError('Failed to submit form. Please try again later.');
      console.error('Contact form error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (success) {
    return (
      <section id="contact" className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Thank You!</h2>
            <p className="text-xl text-gray-300">
              We've received your message and will get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="button-primary mt-8"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-gradient text-center">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Ready to start your journey in Data Science & AI? Contact us today!
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white disabled:opacity-50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="pathway" className="block text-sm font-medium text-gray-300 mb-2">
                Interested Pathway
              </label>
              <select
                id="pathway"
                name="pathway"
                value={formData.pathway}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white disabled:opacity-50"
              >
                <option value="tech">Tech Industry</option>
                <option value="biotech">Biotech & Pharma</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={4}
                className="w-full px-4 py-3 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white disabled:opacity-50"
                placeholder="Tell us about your goals and interests"
              />
            </div>

            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full button-primary disabled:opacity-50"
            >
              {isLoading ? <LoadingSpinner /> : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 