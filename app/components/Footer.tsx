"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs md:text-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">শি</div>
            <span>শিক্ষকসেবা</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            সারাদেশে দক্ষ টিউটর এবং শিক্ষার্থীদের মাঝে বিশ্বাসযোগ্য মেলবন্ধন তৈরি করাই আমাদের লক্ষ্য।
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 hover:text-white transition"><FaFacebook /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 hover:text-white transition"><FaYoutube /></a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">পছন্দের লিঙ্কসমূহ</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-emerald-400 transition">টিউটর খুঁজুন</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">বিষয়ভিত্তিক কোর্স</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">টিউটর হিসেবে যুক্ত হোন</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">অনলাইন ব্যাচসমূহ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">জনপ্রিয় বিষয়সমূহ</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-emerald-400 transition">এইচএসসি ও এসএসসি গণিত</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">পদার্থবিজ্ঞান ও রসায়ন</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">স্পোকেন ইংলিশ ও গ্রামার</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition">বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">যোগাযোগ করুন</h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>ঢাকা, বাংলাদেশ</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+৮৮০ ১৭০০-০০০০০</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>info@shikkhaseba.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 text-center py-4 text-[11px] text-slate-500">
        © {new Date().getFullYear()} শিক্ষকসেবা। সর্বস্বত্ব সংরক্ষিত। Next.js, Tailwind CSS ও Framer Motion দ্বারা নির্মিত।
      </div>
    </footer>
  );
};