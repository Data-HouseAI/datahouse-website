'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase, type ContactSubmission } from '@/lib/supabase';

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setSubmissions(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch submissions');
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gradient">Contact Form Submissions</h1>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-400">Total submissions: {submissions.length}</p>
            <button
              onClick={fetchSubmissions}
              className="button-secondary"
            >
              Refresh
            </button>
          </div>

          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No submissions yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-black/40 p-6 rounded-xl border border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{submission.name}</h3>
                      <p className="text-gray-400">{submission.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        submission.pathway === 'tech' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {submission.pathway === 'tech' ? 'Tech Industry' : 'Biotech & Pharma'}
                      </span>
                      <p className="text-gray-500 text-sm mt-1">
                        {submission.created_at && formatDate(submission.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Message:</h4>
                    <p className="text-gray-100 whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 