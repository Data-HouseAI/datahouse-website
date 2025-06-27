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
      <div className="min-h-screen bg-canvas">
        <div className="container-gh py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-accent border-r-accent"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      <div className="container-gh py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h1 className="heading-1 mb-4">Contact Form Submissions</h1>
            <p className="body-large text-secondary">
              Manage and review contact form submissions from potential students.
            </p>
          </div>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="badge">Total: {submissions.length}</span>
              <span className="body-small text-muted">submissions received</span>
            </div>
            <button
              onClick={fetchSubmissions}
              className="btn-secondary"
            >
              🔄 Refresh
            </button>
          </div>

          {submissions.length === 0 ? (
            <div className="card text-center py-16">
              <div className="w-16 h-16 bg-canvas-subtle rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="heading-3 mb-2">No submissions yet</h3>
              <p className="body-medium text-secondary">
                Contact form submissions will appear here once students start reaching out.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {submissions.map((submission) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card hover-lift"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="heading-4 mb-1">{submission.name}</h3>
                      <p className="text-accent font-medium">{submission.email}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <span className={`badge ${
                        submission.pathway === 'tech' 
                          ? 'badge-primary' 
                          : 'badge-success'
                      }`}>
                        {submission.pathway === 'tech' ? '💻 Tech Industry' : '🧬 Biotech & Pharma'}
                      </span>
                      <span className="body-small text-muted">
                        {submission.created_at && formatDate(submission.created_at)}
                      </span>
                    </div>
                  </div>
                  <div className="bg-canvas-subtle p-4 rounded-lg border border-default">
                    <h4 className="body-small font-medium text-secondary mb-2 uppercase tracking-wide">
                      Message
                    </h4>
                    <p className="body-medium text-primary whitespace-pre-wrap leading-relaxed">
                      {submission.message}
                    </p>
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