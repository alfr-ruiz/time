"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Common letter spacing style
  const letterSpacingStyle = { letterSpacing: '0.05em' };

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full px-6 py-3 flex items-center justify-between bg-white border-b border-gray-100">
        {/* Left: Hamburger Menu */}
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex items-center space-x-2 focus:outline-none uppercase text-sm font-['IBM_Plex_Sans']"
            style={{ letterSpacing: '0.05em' }}
            aria-label="Toggle menu"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden md:inline">MENU</span>
          </button>

          {/* Language Selector (optional) */}
          <button className="ml-6 hidden md:block text-sm text-gray-500 font-['IBM_Plex_Sans']">
            <span className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
              EN
            </span>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <Image 
              src="/images/logo.svg" 
              alt="Time Logo" 
              width={120} 
              height={40} 
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Right: Search and Account icons */}
        <div className="flex items-center space-x-5">
          {/* Search Icon */}
          <button 
            className="focus:outline-none"
            aria-label="Search"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              <path 
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Wishlist Icon */}
          <button 
            className="focus:outline-none hidden md:block"
            aria-label="Wishlist"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              <path 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Account Icon */}
          <button 
            className="focus:outline-none"
            aria-label="Account"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              <path 
                d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Secondary Navigation (categories) */}
      <div className="w-full bg-white border-b border-gray-100 hidden md:block">
        <div className="container mx-auto px-6">
          <ul className="flex justify-center space-x-10 py-3 text-sm font-['IBM_Plex_Sans'] uppercase" style={{ letterSpacing: '0.05em' }}>
            <li><Link href="/collection" className="text-gray-800 hover:text-gray-600 transition-colors">Collection</Link></li>
            <li><Link href="/constellation" className="text-gray-800 hover:text-gray-600 transition-colors">Constellation</Link></li>
            <li><Link href="/seamaster" className="text-gray-800 hover:text-gray-600 transition-colors">Seamaster</Link></li>
            <li><Link href="/speedmaster" className="text-gray-800 hover:text-gray-600 transition-colors">Speedmaster</Link></li>
            <li><Link href="/de-ville" className="text-gray-800 hover:text-gray-600 transition-colors">De Ville</Link></li>
            <li><Link href="/accessories" className="text-gray-800 hover:text-gray-600 transition-colors">Accessories</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="font-medium text-lg font-['IBM_Plex_Sans']" style={letterSpacingStyle}>Menu</div>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="p-2 focus:outline-none"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4 font-['IBM_Plex_Sans']" style={letterSpacingStyle}>
            <li><Link href="/collection" className="block px-2 py-2 border-b">Collection</Link></li>
            <li><Link href="/constellation" className="block px-2 py-2 border-b">Constellation</Link></li>
            <li><Link href="/seamaster" className="block px-2 py-2 border-b">Seamaster</Link></li>
            <li><Link href="/speedmaster" className="block px-2 py-2 border-b">Speedmaster</Link></li>
            <li><Link href="/de-ville" className="block px-2 py-2 border-b">De Ville</Link></li>
            <li><Link href="/accessories" className="block px-2 py-2 border-b">Accessories</Link></li>
            <li><Link href="/about" className="block px-2 py-2 border-b">About</Link></li>
            <li><Link href="/contact" className="block px-2 py-2 border-b">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
