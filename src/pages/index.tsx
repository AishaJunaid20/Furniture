
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Background Section */}
      <div className="bg-[url('/public/img1.jpg')] bg-cover bg-center h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full shadow-md z-50">
          <div className="flex justify-between items-center px-8 py-2 gap-10">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#9c632e] cursor-pointer">
              FurniHaven
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center text-[#333333] gap-10 py-4 ml-8">
              <Link href="/">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors">
                  <i><b>Home</b></i>
                </div>
              </Link>
              <Link href="/product">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors">
                  <i><b>Products</b></i>
                </div>
              </Link>
              <Link href="/categories">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors">
                  <i><b>Categories</b></i>
                </div>
              </Link>
              <Link href="/about">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors">
                  <i><b>About Us</b></i>
                </div>
              </Link>
              <Link href="/contact-us">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors">
                  <i><b>Contact Us</b></i>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden flex items-center">
              <button 
                className="text-[#9c632e] hover:text-[#C6A664]"
                onClick={toggleMenu}
              >
                <i className="fa fa-bars text-xl"></i> {/* Hamburger icon */}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center py-4 bg-white shadow-md">
              <Link href="/">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors py-2">
                  <i><b>Home</b></i>
                </div>
              </Link>
              <Link href="/product">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors py-2">
                  <i><b>Products</b></i>
                </div>
              </Link>
              <Link href="/categories">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors py-2">
                  <i><b>Categories</b></i>
                </div>
              </Link>
              <Link href="/about">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors py-2">
                  <i><b>About Us</b></i>
                </div>
              </Link>
              <Link href="/contact-us">
                <div className="hover:text-[#C6A664] cursor-pointer transition-colors py-2">
                  <i><b>Contact Us</b></i>
                </div>
              </Link>
            </div>
          )}
        </header>

        {/* Hero Content */}
        <div className="text-center mt-40 sm:mt-52 px-6 flex flex-col justify-center items-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-[#8B5E34] font-serif drop-shadow-lg">
            FurniHaven
          </h1>
          {/* Description */}
          <p className="text-lg sm:text-xl text-[#C6A664] mt-4 italic">
            Elegant furniture for every space
          </p><br />
          {/* Call to Action Button */}
          <button className="mt-8 px-8 py-3 bg-[#8B5E34] text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-[#734c29] transition">
            Explore Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#8B5E34] text-white text-center py-4">
        <p>© 2024 FurniHaven. All rights reserved.</p>
      </div>
    </div>
  );
}

