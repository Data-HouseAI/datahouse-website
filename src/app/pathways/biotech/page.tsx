'use client';

import React from 'react';
import { motion } from 'framer-motion';

const biotechCourses = [
  {
    title: "Genomic Data Analysis",
    description: "Learn to analyze and interpret genomic data using modern computational tools and AI techniques.",
    duration: "14 weeks",
    level: "Intermediate"
  },
  {
    title: "AI in Drug Discovery",
    description: "Explore how AI is revolutionizing drug discovery and development processes in the pharmaceutical industry.",
    duration: "16 weeks",
    level: "Advanced"
  },
  {
    title: "Clinical Data Science",
    description: "Master the analysis of clinical trial data and healthcare analytics using machine learning.",
    duration: "12 weeks",
    level: "Intermediate to Advanced"
  }
];

const careerOutcomes = [
  "Bioinformatician",
  "AI in Pharma Analyst",
  "Clinical Data Scientist",
  "Computational Biology Specialist",
  "Healthcare AI Researcher"
];

export default function BiotechPathway() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-gradient text-center">Biotech & Pharma Pathway</h1>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            Shape the future of healthcare and pharmaceutical research with advanced data science and AI techniques. Learn to analyze complex biological data and contribute to groundbreaking discoveries.
          </p>
        </motion.div>

        {/* Courses Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-gradient">Specialized Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {biotechCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/40 p-6 rounded-xl hover-glow"
              >
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="text-sm text-gray-400">
                  <p>Duration: {course.duration}</p>
                  <p>Level: {course.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career Outcomes */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-gradient">Career Opportunities</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {careerOutcomes.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 p-4 rounded-lg text-center hover-glow"
              >
                <p className="font-semibold">{career}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 