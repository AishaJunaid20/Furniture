// /pages/products.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div>
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
</div>
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#8B5E34] text-white py-12 pt-24 text-center">
        <h1 className="text-4xl font-bold">Our Exclusive Furniture Collection</h1>
        <p className="mt-4 text-lg">Find the perfect pieces to enhance your space</p>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Product 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/public/doc2.jpg" alt="Product 1" width={300} height={200} className="rounded-md" />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Modern Sofa</h3>
            <p className="text-gray-600 mt-2">Stylish and comfortable sofa perfect for living rooms.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-[#8B5E34]">$499.99</span>
              <Link href="/product-details/1">
                <div className="text-[#8B5E34] hover:text-[#C6A664]">View Details</div>
              </Link>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/public/pro2.jpg" alt="Product 2" width={300} height={200} className="rounded-md" />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Wooden Dining Set</h3>
            <p className="text-gray-600 mt-2">Elegant dining set for your home or office space.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-[#8B5E34]">$699.99</span>
              <Link href="/product-details/2">
                <div className="text-[#8B5E34] hover:text-[#C6A664]">View Details</div>
              </Link>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/public/pro3.jpg" alt="Product 3" width={300} height={200} className="rounded-md" />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Vintage Coffee Table</h3>
            <p className="text-gray-600 mt-2">Add a touch of elegance with this stunning coffee table.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-[#8B5E34]">$299.99</span>
              <Link href="/product-details/3">
                <div className="text-[#8B5E34] hover:text-[#C6A664]">View Details</div>
              </Link>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image src="/public/pro4.jpg" alt="Product 4" width={300} height={200} className="rounded-md" />
            <h3 className="text-xl font-semibold text-[#8B5E34] mt-4">Luxurious Armchair</h3>
            <p className="text-gray-600 mt-2">Designed for maximum comfort and luxury in your living room.</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-[#8B5E34]">$399.99</span>
              <Link href="/product-details/4">
                <div className="text-[#8B5E34] hover:text-[#C6A664]">View Details</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
       {/* Footer Section */}
       <div className="bg-[#8B5E34] text-white text-center py-4 mt-12">
        <p>© 2024 FurniHaven. All rights reserved.</p>
      </div>
    </div>
</div>  );
};

export default ProductPage;
