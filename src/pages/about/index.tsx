// /pages/about.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
           <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full shadow-md z-50 ">
      <div className="flex justify-between items-center px-8 py-2 gap-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#9c632e] cursor-pointer">
          FurniHaven
        </div>
        <div className="flex justify-center text-[#333333] gap-10 py-4 ml-8">
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
      <Link href="/catagories">
        <div className="hover:text-[#C6A664] cursor-pointer transition-colors">
          <i><b>Categories</b></i>
        </div>
      </Link>      <Link href="/about">
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
       
       </div>
    </header>

    <div className="bg-gray-50 min-h-screen">
      {/* Title Section */}
      <div className="bg-[#8B5E34] text-white py-12 pt-24 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">Learn more about our journey and values</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/public/doc.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-semibold text-[#8B5E34]">Our Story</h2>
            <p className="mt-4 text-lg">
              At FurniHaven, we believe that furniture is not just about filling your space; it’s about creating an environment where you can feel comfortable, inspired, and relaxed. We are a team of passionate designers and craftsmen who strive to offer high-quality furniture that suits every style and budget.
            </p>
            
            <h3 className="text-2xl font-semibold text-[#8B5E34] mt-8">Our Mission</h3>
            <p className="mt-4 text-lg">
              Our mission is to provide stylish, durable, and affordable furniture solutions to enhance your home or office. We aim to bring quality and elegance to every corner of your space, transforming it into a haven of comfort and style.
            </p>

            <h3 className="text-2xl font-semibold text-[#8B5E34] mt-8">Why Choose Us?</h3>
            <ul className="list-disc pl-6 mt-4">
              <li className="text-lg">Premium quality furniture at affordable prices</li>
              <li className="text-lg">A wide variety of styles to match every taste</li>
              <li className="text-lg">Expert craftsmanship and attention to detail</li>
              <li className="text-lg">Sustainable practices and eco-friendly materials</li>
              <li className="text-lg">Excellent customer service and support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#8B5E34] text-white text-center py-4 mt-12">
        <p>© 2024 FurniHaven. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
