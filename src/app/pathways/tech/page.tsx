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
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-gradient text-center">Tech Industry Pathway</h1>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            Embark on a journey to become a skilled professional in the tech industry. Master the tools and technologies that power modern data science and AI solutions.
          </p>
        </motion.div>

        {/* Courses Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-gradient">Our Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techCourses.map((course, index) => (
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
          <h2 className="text-3xl font-bold mb-12 text-gradient">Career Outcomes</h2>
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