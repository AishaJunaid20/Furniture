import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
  );
};

export default Header;
