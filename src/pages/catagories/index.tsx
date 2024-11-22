// /pages/categories.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <div>
           <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full shadow-md z-50">
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
        <h1 className="text-4xl font-bold">Explore Our Furniture Categories</h1>
        <p className="mt-4 text-lg">Discover the perfect category for your space</p>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Category 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/public/c1.jpg"
              alt="Living Room"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Living Room</h3>
            <p className="text-gray-600 mt-2">Comfortable and stylish furniture for your living room.</p>
            <Link href="/products">
              <div className="text-[#8B5E34] hover:text-[#C6A664] mt-4 inline-block">
                Browse Living Room Furniture
              </div>
            </Link>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/public/b.jpg"
              alt="Bedroom"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Bedroom</h3>
            <p className="text-gray-600 mt-2">Elegant and relaxing furniture for your bedroom.</p>
            <Link href="/products">
              <div className="text-[#8B5E34] hover:text-[#C6A664] mt-4 inline-block">
                Browse Bedroom Furniture
              </div>
            </Link>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/public/o.jpg"
              alt="Office"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Office</h3>
            <p className="text-gray-600 mt-2">Ergonomic and modern furniture for your office space.</p>
            <Link href="/products">
              <div className="text-[#8B5E34] hover:text-[#C6A664] mt-4 inline-block">
                Browse Office Furniture
              </div>
            </Link>
          </div>

          {/* Category 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/public/ot.jpg"
              alt="Outdoor"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Outdoor</h3>
            <p className="text-gray-600 mt-2">Durable and stylish furniture for your outdoor spaces.</p>
            <Link href="/products">
              <div className="text-[#8B5E34] hover:text-[#C6A664] mt-4 inline-block">
                Browse Outdoor Furniture
              </div>
            </Link>
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

export default CategoriesPage;
