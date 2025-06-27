'use client';

import React, { useState } from 'react';
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
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f6f8fa] dark:bg-[#161b22]">
        <div className="container-gh">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#2da44e1a] dark:bg-[#238636] rounded-full flex items-center justify-center mb-8 mx-auto">
              <span className="text-[#2da44e] dark:text-white text-3xl">✓</span>
            </div>
            <h2 className="heading-2">Thank You!</h2>
            <p className="body-large">
              We've received your message and will get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="btn btn-primary mt-8"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f6f8fa] dark:bg-[#161b22]">
      <div className="container-gh">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2">Get in Touch</h2>
            <p className="body-large">
              Ready to start your journey in Data Science & AI? Contact us today!
            </p>
          </div>

          {error && (
            <div className="bg-[#ffebe9] dark:bg-[#ff000022] border border-[#cf222e] dark:border-[#f85149] text-[#cf222e] dark:text-[#f85149] px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#24292f] dark:text-white mb-2">
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
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#24292f] dark:text-white mb-2">
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
                className="form-input"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="pathway" className="block text-sm font-medium text-[#24292f] dark:text-white mb-2">
                Interested Pathway
              </label>
              <select
                id="pathway"
                name="pathway"
                value={formData.pathway}
                onChange={handleChange}
                disabled={isLoading}
                className="form-input"
              >
                <option value="tech">Tech Industry</option>
                <option value="biotech">Biotech & Pharma</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#24292f] dark:text-white mb-2">
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
                className="form-input resize-none"
                placeholder="Tell us about your goals and interests"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full justify-center"
            >
              {isLoading ? <LoadingSpinner /> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 