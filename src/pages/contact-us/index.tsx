
import React, { useState } from 'react';
import Link from 'next/link';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to a backend)
    console.log(formData);
  };

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

    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 pt-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#96682b]">Contact Us</h1>
          <p className="text-lg text-gray-600">We’re here to help! Reach out to us with any questions or inquiries.</p>
        </div>

        {/* Contact Details */}
        <div className="flex justify-between mb-12">
          <div className="w-full sm:w-1/3 p-4">
            <h3 className="text-xl font-semibold text-[#96682b]">Get in Touch</h3>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> support@furnihaven.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-700">
              <strong>Business Hours:</strong>
              <br /> Mon - Fri: 9:00 AM - 6:00 PM <br /> Sat: 10:00 AM - 4:00 PM <br /> Sun: Closed
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="w-full sm:w-2/3 p-4">
            <h3 className="text-xl font-semibold text-[#96682b]">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm text-gray-600">Phone Number (Optional)</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm text-gray-600">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Your Message"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-[#96682b] text-white font-semibold rounded-lg hover:bg-[#C6A664] transition-colors"
              >
                Send Message
              </button>
            </form>
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

export default ContactUs;
