'use client';

import React from 'react';

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
    <main className="min-h-screen bg-gray-950 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 mx-auto">
              <span className="text-3xl">💻</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white mb-6">Tech Industry Pathway</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Embark on a journey to become a skilled professional in the tech industry. 
              Master the tools and technologies that power modern data science and AI solutions.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Courses</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive curriculum designed to take you from beginner to industry-ready professional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {techCourses.map((course, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Career Outcomes</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Launch your career in high-demand tech roles with competitive salaries and growth opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {careerOutcomes.map((career, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center transition-all duration-200 hover:border-gray-600 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">🚀</span>
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