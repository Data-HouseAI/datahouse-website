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
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-8 mx-auto">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Thank You!</h2>
            <p className="text-lg md:text-xl text-gray-300">
              We've received your message and will get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 transition-all duration-200 mt-8"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-lg md:text-xl text-gray-300">
              Ready to start your journey in Data Science & AI? Contact us today!
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
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
                className="w-full px-3 py-2 border rounded-md text-sm transition-colors bg-gray-950 border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25 focus:outline-none placeholder:text-gray-400 disabled:opacity-50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
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
                className="w-full px-3 py-2 border rounded-md text-sm transition-colors bg-gray-950 border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25 focus:outline-none placeholder:text-gray-400 disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="pathway" className="block text-sm font-medium text-white mb-2">
                Interested Pathway
              </label>
              <select
                id="pathway"
                name="pathway"
                value={formData.pathway}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-3 py-2 border rounded-md text-sm transition-colors bg-gray-950 border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25 focus:outline-none disabled:opacity-50"
              >
                <option value="tech">Tech Industry</option>
                <option value="biotech">Biotech & Pharma</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
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
                className="w-full px-3 py-2 border rounded-md text-sm transition-colors bg-gray-950 border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25 focus:outline-none placeholder:text-gray-400 disabled:opacity-50 resize-none"
                placeholder="Tell us about your goals and interests"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500 disabled:opacity-50"
            >
              {isLoading ? <LoadingSpinner /> : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 