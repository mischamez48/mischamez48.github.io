'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full flex justify-center py-5 border-b border-neutral-200 bg-[#f8f5ee] relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 text-base font-medium">
        {navItems.map(({ href, label }) => {
          const isActive = pathname === href || (href === '/' && pathname === '');
          return (
            <Link
              key={href}
              href={href}
              className={
                isActive
                  ? 'px-4 py-2 rounded-full bg-neutral-900 text-white font-bold'
                  : 'px-4 py-2 rounded-full hover:bg-neutral-200 transition'
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full px-4">
        <div className="text-lg font-bold text-neutral-900">Mischa Mez</div>
        
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-neutral-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#f8f5ee] border-b border-neutral-200 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href || (href === '/' && pathname === '');
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={
                    isActive
                      ? 'px-4 py-3 rounded-lg bg-neutral-900 text-white font-bold text-center'
                      : 'px-4 py-3 rounded-lg hover:bg-neutral-200 transition text-center'
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
} 