'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas backdrop-blur-sm border-b border-default">
      <div className="container-gh">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.svg"
              alt="The Data House Logo"
              width={40}
              height={16}
              className="w-auto h-8"
            />
            <span className="text-lg font-semibold text-primary">The Data House</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary bg-canvas-subtle' 
                  : 'text-secondary hover:text-primary hover:bg-canvas-subtle'
              }`}
            >
              Home
            </Link>
            <Link
              href="/pathways/tech"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/pathways/tech') 
                  ? 'text-primary bg-canvas-subtle' 
                  : 'text-secondary hover:text-primary hover:bg-canvas-subtle'
              }`}
            >
              Tech Industry
            </Link>
            <Link
              href="/pathways/biotech"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/pathways/biotech') 
                  ? 'text-primary bg-canvas-subtle' 
                  : 'text-secondary hover:text-primary hover:bg-canvas-subtle'
              }`}
            >
              Biotech & Pharma
            </Link>
          </div>

          <Link href="#contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
} 