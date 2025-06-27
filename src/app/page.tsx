'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="container-gh">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="mb-12">
                <Image
                  src="/logo.svg"
                  alt="The Data House Logo"
                  width={240}
                  height={96}
                  className="mx-auto mb-8 opacity-90"
                />
              </div>
              <h1 className="heading-1 text-center">
                We are here to make your{' '}
                <span className="text-accent">data shine</span>
              </h1>
              <p className="body-large text-center max-w-2xl mx-auto mb-12">
                Sri Lanka's Premier Data Science & AI Learning Hub. 
                Empowering youth with industry-driven education and cutting-edge skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/pathways/tech" className="btn-primary text-base px-8 py-3">
                  Start Your Journey
                </Link>
                <Link href="#about" className="btn-secondary text-base px-8 py-3">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-canvas-subtle">
        <div className="container-gh">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-8">Our Mission</h2>
            <p className="body-large mb-12">
              At The Data House, we're dedicated to empowering Sri Lankan youth with cutting-edge education 
              in AI & Data Science. Our industry-driven curriculum ensures you're prepared for the future of technology.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-canvas rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="heading-4 mb-2">Industry-Focused</h3>
                <p className="body-medium">
                  Curriculum designed with industry partners to ensure relevance and career readiness.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-canvas rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="heading-4 mb-2">Cutting-Edge</h3>
                <p className="body-medium">
                  Learn the latest technologies and methodologies in AI and data science.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-canvas rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="heading-4 mb-2">Expert-Led</h3>
                <p className="body-medium">
                  Learn from industry experts and experienced practitioners in the field.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="section-padding bg-canvas">
        <div className="container-gh">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Choose Your Path</h2>
            <p className="body-large max-w-2xl mx-auto">
              Select a specialized pathway that aligns with your career goals and interests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              className="card hover-lift"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="heading-3 mb-4">Tech Industry</h3>
                <p className="body-medium mb-6">
                  Master software development, machine learning, cloud computing, and automation. 
                  Become a proficient data scientist or AI engineer.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span className="body-small">Python & Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span className="body-small">Cloud Computing & DevOps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span className="body-small">AI Development & Deployment</span>
                  </div>
                </div>
              </div>
              <Link href="/pathways/tech" className="btn-secondary w-full justify-center">
                Explore Tech Path
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="card hover-lift"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="heading-3 mb-4">Biotech & Pharma</h3>
                <p className="body-medium mb-6">
                  Explore AI-driven drug discovery, genomics, and bioinformatics. 
                  Shape the future of healthcare with data science.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span className="body-small">Genomic Data Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span className="body-small">AI in Drug Discovery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-success rounded-full"></span>
                    <span className="body-small">Clinical Data Science</span>
                  </div>
                </div>
              </div>
              <Link href="/pathways/biotech" className="btn-secondary w-full justify-center">
                Explore Biotech Path
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 