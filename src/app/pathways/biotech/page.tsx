'use client';

import React from 'react';

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
    <main className="min-h-screen bg-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 mx-auto">
              <span className="text-3xl">🧬</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white mb-6">Biotech & Pharma Pathway</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Shape the future of healthcare and pharmaceutical research with advanced data science and AI techniques. 
              Learn to analyze complex biological data and contribute to groundbreaking discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 transition-all duration-200">
                Enroll Now
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200">
                Download Curriculum
              </button>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-gray-900 rounded-xl mb-16">
          <div className="px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Specialized Courses</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced curriculum tailored for biotech and pharmaceutical industry applications.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {biotechCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-950 border border-gray-700 rounded-lg p-6 transition-all duration-200 hover:border-gray-600 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{course.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-600">{course.level}</span>
                  </div>
                  <p className="text-base text-gray-300 mb-6">{course.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-400 font-medium">📅 {course.duration}</span>
                    <span className="text-green-500 font-medium">⭐ {course.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Outcomes */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Career Opportunities</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Enter the rapidly growing biotech and pharmaceutical industry with specialized skills in high demand.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {careerOutcomes.map((career, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center transition-all duration-200 hover:border-gray-600 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">🔬</span>
                </div>
                <p className="font-semibold text-white">{career}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 