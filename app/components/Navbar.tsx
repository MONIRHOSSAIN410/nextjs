"use client";

import React, { useState } from "react";
import { Search, Bell, Menu, X, Globe } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top Notice Banner */}
      <div className="bg-emerald-700 text-white text-xs py-1.5 px-4 text-center font-medium flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 mx-auto md:mx-0">
          <span className="bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px]">নতুন</span>
          <span>দেশের সেরা অভিজ্ঞ টিউটর এবং অনলাইন ব্যাচে যুক্ত হোন!</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-xs opacity-90">
          <span className="flex items-center gap-1 cursor-pointer hover:underline">
            <Globe className="w-3.5 h-3.5" /> বাংলা
          </span>
          <a href="#" className="hover:underline">সাহায্য ও সাপোর্ট</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md shadow-emerald-200">
              শি
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              শিক্ষক<span className="text-emerald-600">সেবা</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-3 py-1.5 border border-slate-200 w-72 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:bg-white transition">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="বিষয় বা শিক্ষক খুঁজুন..." 
              className="bg-transparent border-none text-xs w-full focus:outline-none text-slate-700" 
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
          <a href="#tutors" className="text-emerald-600 font-bold hover:text-emerald-700">টিউটর খুঁজুন</a>
          <a href="#courses" className="hover:text-emerald-600 transition">কোর্সসমূহ</a>
          <a href="#instructors" className="hover:text-emerald-600 transition">মেন্টরবৃন্দ</a>
          <a href="#testimonials" className="hover:text-emerald-600 transition">মতামত</a>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <button className="text-slate-600 hover:text-emerald-600 p-2 rounded-full hover:bg-slate-100 transition">
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-sm font-medium text-slate-700 px-3 py-1.5 hover:text-emerald-600 transition">
            লগইন
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-md shadow-emerald-600/20 transition">
            শুরু করুন
          </button>
        </div>

        <button className="md:hidden text-slate-700 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <a href="#tutors" className="block text-sm font-medium text-slate-700 py-1">টিউটর খুঁজুন</a>
          <a href="#courses" className="block text-sm font-medium text-slate-700 py-1">কোর্সসমূহ</a>
          <a href="#instructors" className="block text-sm font-medium text-slate-700 py-1">মেন্টরবৃন্দ</a>
          <a href="#testimonials" className="block text-sm font-medium text-slate-700 py-1">মতামত</a>
          <div className="pt-2 flex flex-col space-y-2">
            <button className="w-full bg-slate-100 text-slate-800 py-2 rounded-lg text-sm font-medium">লগইন</button>
            <button className="w-full bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium">শুরু করুন</button>
          </div>
        </div>
      )}
    </header>
  );
};