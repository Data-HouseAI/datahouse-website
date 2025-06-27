'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-12">
              <Image
                src="/logo.svg"
                alt="The Data House Logo"
                width={240}
                height={96}
                className="mx-auto mb-8 opacity-90"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              We are here to make your{' '}
              <span className="text-blue-400">data shine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
              Sri Lanka's Premier Data Science & AI Learning Hub. 
              Empowering youth with industry-driven education and cutting-edge skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/pathways/tech" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 transition-all duration-200"
              >
                Start Your Journey
              </Link>
              <Link 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              At The Data House, we're dedicated to empowering Sri Lankan youth with cutting-edge education 
              in AI & Data Science. Our industry-driven curriculum ensures you're prepared for the future of technology.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-950 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Industry-Focused</h3>
                <p className="text-base text-gray-300">
                  Curriculum designed with industry partners to ensure relevance and career readiness.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-950 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Cutting-Edge</h3>
                <p className="text-base text-gray-300">
                  Learn the latest technologies and methodologies in AI and data science.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-950 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Expert-Led</h3>
                <p className="text-base text-gray-300">
                  Learn from industry experts and experienced practitioners in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Choose Your Path</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Select a specialized pathway that aligns with your career goals and interests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 transition-all duration-200 hover:border-gray-600 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Tech Industry</h3>
                <p className="text-base text-gray-300 mb-6">
                  Master software development, machine learning, cloud computing, and automation. 
                  Become a proficient data scientist or AI engineer.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-400">Python & Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-400">Cloud Computing & DevOps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-400">AI Development & Deployment</span>
                  </div>
                </div>
              </div>
              <Link 
                href="/pathways/tech" 
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Explore Tech Path
              </Link>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 transition-all duration-200 hover:border-gray-600 hover:shadow-xl">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Biotech & Pharma</h3>
                <p className="text-base text-gray-300 mb-6">
                  Explore AI-driven drug discovery, genomics, and bioinformatics. 
                  Shape the future of healthcare with data science.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-400">Genomic Data Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-400">AI in Drug Discovery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-400">Clinical Data Science</span>
                  </div>
                </div>
              </div>
              <Link 
                href="/pathways/biotech" 
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Explore Biotech Path
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
} 