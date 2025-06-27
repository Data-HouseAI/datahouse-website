import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black z-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 z-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="/logo.png"
                alt="The Data House Logo"
                width={200}
                height={80}
                className="mx-auto mb-8"
              />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                We are here to make your data shine
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Sri Lanka's Premier Data Science & AI Learning Hub
              </p>
              <Link href="/pathways" className="button-primary">
                Start Your Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gradient">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              At The Data House, we're dedicated to empowering Sri Lankan youth with cutting-edge education in AI & Data Science. Our industry-driven curriculum ensures you're prepared for the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/40 p-8 rounded-xl hover-glow"
            >
              <h3 className="text-2xl font-bold mb-4">Tech Industry</h3>
              <p className="text-gray-300 mb-4">
                Master software development, machine learning, cloud computing, and automation. Become a proficient data scientist or AI engineer.
              </p>
              <Link href="/pathways/tech" className="button-secondary">
                Learn More
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-black/40 p-8 rounded-xl hover-glow"
            >
              <h3 className="text-2xl font-bold mb-4">Biotech & Pharma</h3>
              <p className="text-gray-300 mb-4">
                Explore AI-driven drug discovery, genomics, and bioinformatics. Shape the future of healthcare with data science.
              </p>
              <Link href="/pathways/biotech" className="button-secondary">
                Learn More
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