"use client";
import Link from "next/link";
import { Bubbles, X, Menu } from "lucide-react";
import SignInButton from "./auth/sign-in-button";
import { useState } from "react";

export function Header() {
  // List of navigation links
  const navItems = [
    { href: "/features", label: "Features" },
    { href: "/about", label: "About Mirage" },
  ];
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur">
      {/* Bottom border */}
      <div className="absolute inset-0 border-b border-primary/10"></div>
      <header className="w-full">
        <div className="flex h-16 items-center justify-between w-full px-4">
          {/* Logo and app name (left side) */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80">
            <Bubbles className="h-7 w-7 text-primary" />
            <span className="text-lg font-semibold text-primary bg-gradient-to-r from-primary to-primary/80 
            bg-clip-text text-transparent">
              Mirage
            </span>
          </Link>
          {/* Navigation links, sign in, and hamburger (right side) */}
          <div className="flex items-center gap-3">
            {/* Show nav links only on desktop */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Sign in button */}
            <SignInButton className="rounded-full" />
            {/* Hamburger menu for mobile */}
            <button
              type="button"
              className="md:hidden p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              {/* Show X icon if open, hamburger if closed */}
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/10">
          <nav className="flex flex-col space-y-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-4 text-sm font-medium text-muted-foreground hover:text-foreground 
                hover:bg-primary/5 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
