'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <div className="text-center max-w-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="w-24 h-24 bg-canvas-subtle rounded-full flex items-center justify-center mb-8 mx-auto">
            <span className="text-4xl">🔍</span>
          </div>
          <div>
            <h1 className="text-6xl font-bold mb-4 text-accent">404</h1>
            <h2 className="heading-3 mb-4">Page Not Found</h2>
            <p className="body-medium text-secondary mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/pathways/tech" className="btn-secondary">
              Browse Pathways
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 