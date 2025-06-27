'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techCourses = [
  {
    title: "Python for Data Science",
    description: "Master Python programming with focus on data analysis, visualization, and machine learning libraries.",
    duration: "12 weeks",
    level: "Beginner to Intermediate"
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Learn core ML concepts, algorithms, and practical implementation using industry-standard tools.",
    duration: "16 weeks",
    level: "Intermediate"
  },
  {
    title: "AI in Software Engineering",
    description: "Advanced course on implementing AI solutions in software applications and systems.",
    duration: "14 weeks",
    level: "Advanced"
  }
];

const careerOutcomes = [
  "Data Engineer",
  "AI Developer",
  "ML Engineer",
  "Data Scientist",
  "AI Solutions Architect"
];

export default function TechPathway() {
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
              <span className="text-3xl">💻</span>
            </div>
            <h1 className="heading-1 mb-6">Tech Industry Pathway</h1>
            <p className="body-large text-secondary mb-12 max-w-3xl mx-auto">
              Embark on a journey to become a skilled professional in the tech industry. 
              Master the tools and technologies that power modern data science and AI solutions.
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
            <h2 className="heading-2 mb-4">Our Courses</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Comprehensive curriculum designed to take you from beginner to industry-ready professional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {techCourses.map((course, index) => (
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
            <h2 className="heading-2 mb-4">Career Outcomes</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Launch your career in high-demand tech roles with competitive salaries and growth opportunities.
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
                  <span className="text-xl">🚀</span>
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