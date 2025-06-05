'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <header className="w-full flex justify-center py-5 border-b border-neutral-200 bg-[#f8f5ee]">
      <nav className="flex gap-10 text-base font-medium">
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
    </header>
  );
} 