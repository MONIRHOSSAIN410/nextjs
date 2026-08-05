"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Clock, Users } from "lucide-react";

const courses = [
  { id: 1, title: "এইচএসসি পদার্থবিজ্ঞান স্পেশাল ক্র্যাশ কোর্স", category: "বিজ্ঞান", duration: "১২ ঘণ্টা", enrolled: "১.২কে শিক্ষার্থী", tag: "জনপ্রিয়" },
  { id: 2, title: "ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট উইথ Next.js", category: "আইসিটি", duration: "৩৫ ঘণ্টা", enrolled: "৩.৫কে শিক্ষার্থী", tag: "বেস্টসেলার" },
  { id: 3, title: "স্পোকেন ইংলিশ ও কমিউনিকেশন স্কিলস", category: "ভাষা", duration: "১৮ ঘণ্টা", enrolled: "২.১কে শিক্ষার্থী", tag: "ফিচার্ড" },
  { id: 4, title: "ভার্সিটি এডমিশন ম্যাথ শর্টকাট ট্রিকস ২০২৬", category: "এডমিশন", duration: "১৫ ঘণ্টা", enrolled: "৪.০কে শিক্ষার্থী", tag: "হট" },
];

export const ProductCard = () => {
  return (
    <section id="courses" className="my-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">সেরা কোর্সসমূহ</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
            আমাদের জনপ্রিয় লার্নিং মডিউল
          </h2>
        </div>
        <a href="#" className="text-xs md:text-sm font-semibold text-emerald-600 hover:underline">
          সবগুলো কোর্স দেখুন &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between"
          >
            <div className="h-40 bg-gradient-to-tr from-emerald-700 to-teal-500 relative flex items-center justify-center p-4 text-white">
              <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-white/20">
                {course.category}
              </span>
              <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px]">
                {course.tag}
              </span>
              <PlayCircle className="w-12 h-12 opacity-80 hover:opacity-100 hover:scale-110 transition cursor-pointer" />
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base line-clamp-2 leading-snug">
                  {course.title}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 border-t pt-3 border-slate-100">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {course.enrolled}</span>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs py-2 rounded-lg transition">
                  এনরোল করুন
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};