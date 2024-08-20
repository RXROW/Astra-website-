"use client";

import { useState } from "react";
import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const NavbarClient = ({ user }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="w-8 h-8" />
            <span className="text-lg font-medium">Astra</span>
          </Link>

        

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-14 md:top-0 left-0 md:left-auto w-72 md:w-auto bg-gray-900/70 h-[100vh] md:h-auto md:bg-transparent shadow-md md:shadow-none z-50`}
          >
            <ul className="flex flex-col md:flex-row md:items-center justify-center gap-8 p-4 md:p-0">
              <li>
                <Link href="#" className="hover:text-foreground/80 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground/80 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground/80 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground/80 text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-gray-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
            {user ? (
              <UserButton />
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden md:flex",
                  })}
                >
                  Start free trial
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavbarClient;