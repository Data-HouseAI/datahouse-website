'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="The Data House Logo"
              width={40}
              height={16}
              className="w-auto h-8"
            />
            <span className="text-lg font-semibold text-white">The Data House</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-white bg-gray-900' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              href="/pathways/tech"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/pathways/tech') 
                  ? 'text-white bg-gray-900' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-900'
              }`}
            >
              Tech Industry
            </Link>
            <Link
              href="/pathways/biotech"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/pathways/biotech') 
                  ? 'text-white bg-gray-900' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-900'
              }`}
            >
              Biotech & Pharma
            </Link>
          </div>

          <Link href="#contact" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-green-600 text-white border border-green-600 hover:bg-green-700 hover:border-green-700 transition-all duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
} 