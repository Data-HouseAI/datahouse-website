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
    <main className="min-h-screen bg-canvas pt-16">
      <div className="container-gh">
        {/* Hero Section */}
        <section className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-8 mx-auto">
              <span className="text-3xl">🧬</span>
            </div>
            <h1 className="heading-1 mb-6">Biotech & Pharma Pathway</h1>
            <p className="body-large text-secondary mb-12 max-w-3xl mx-auto">
              Shape the future of healthcare and pharmaceutical research with advanced data science and AI techniques. 
              Learn to analyze complex biological data and contribute to groundbreaking discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-base px-8 py-3">
                Enroll Now
              </button>
              <button className="btn-secondary text-base px-8 py-3">
                Download Curriculum
              </button>
            </div>
          </motion.div>
        </section>

        {/* Courses Section */}
        <section className="section-padding bg-canvas-subtle rounded-xl mb-16">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Specialized Courses</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Advanced curriculum tailored for biotech and pharmaceutical industry applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {biotechCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="heading-4">{course.title}</h3>
                  <span className="badge">{course.level}</span>
                </div>
                <p className="body-medium text-secondary mb-6">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-accent font-medium">📅 {course.duration}</span>
                  <span className="text-success font-medium">⭐ {course.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career Outcomes */}
        <section className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Career Opportunities</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Enter the rapidly growing biotech and pharmaceutical industry with specialized skills in high demand.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {careerOutcomes.map((career, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center hover-lift"
              >
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">🔬</span>
                </div>
                <p className="font-semibold text-primary">{career}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 