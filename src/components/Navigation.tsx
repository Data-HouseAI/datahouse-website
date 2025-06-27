import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="The Data House Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="text-xl font-bold">The Data House</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive('/') ? 'text-white' : 'text-gray-400'
              } hover:text-white transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/pathways/tech"
              className={`${
                isActive('/pathways/tech') ? 'text-white' : 'text-gray-400'
              } hover:text-white transition-colors`}
            >
              Tech Industry
            </Link>
            <Link
              href="/pathways/biotech"
              className={`${
                isActive('/pathways/biotech') ? 'text-white' : 'text-gray-400'
              } hover:text-white transition-colors`}
            >
              Biotech & Pharma
            </Link>
          </div>

          <Link href="#contact" className="button-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
} 