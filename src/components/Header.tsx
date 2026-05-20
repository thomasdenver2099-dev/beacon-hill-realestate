'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-beacon-blue" />
            <span className="text-2xl font-bold text-beacon-dark">Beacon Hill</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-beacon-dark hover:text-beacon-blue transition">
              Home
            </Link>
            <Link href="/properties" className="text-beacon-dark hover:text-beacon-blue transition">
              Properties
            </Link>
            <Link href="/agents" className="text-beacon-dark hover:text-beacon-blue transition">
              Agents
            </Link>
            <Link href="/about" className="text-beacon-dark hover:text-beacon-blue transition">
              About
            </Link>
          </div>

          <div className="space-x-4">
            <button className="px-4 py-2 text-beacon-blue border border-beacon-blue rounded-lg hover:bg-beacon-blue hover:text-white transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-beacon-blue text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
