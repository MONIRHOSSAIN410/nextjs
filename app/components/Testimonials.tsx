"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "আইমান জুবাযের",
    role: "এইচএসসি শিক্ষার্থী",
    text: "বাসার কাছে ভালো ফিজিক্স টিউটর খুঁজে পাওয়া কঠিন ছিল। এই প্ল্যাটফর্মের মাধ্যমে আমি অসাধারণ একজন মেন্টর পেয়েছি!",
    rating: 5,
  },
  {
    id: 2,
    name: "মেহনাজ চৌধুরী",
    role: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার্থী",
    text: "লাইভ ক্লাস এবং শর্টকাট টেকনিকগুলো আমাকে ভর্তি পরীক্ষায় অনেক সাহায্য করেছে। সকলের জন্য অত্যন্ত দারুণ প্ল্যাটফর্ম!",
    rating: 5,
  },
  {
    id: 3,
    name: "তারিকুল ইসলাম",
    role: "অভিভাবক",
    text: "শিক্ষকদের ভেরিফিকেশন প্রসেস এবং রেগুলার ফিডব্যাক রিপোর্ট খুব কাজের। আমার মেয়ের রেজাল্ট অনেক ভালো হয়েছে।",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="my-16">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">মতামত</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
          শিক্ষার্থী ও অভিভাবকদের অভিজ্ঞতা
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between relative"
          >
            <Quote className="w-8 h-8 text-emerald-100 absolute top-4 right-4" />
            <div className="space-y-3">
              <div className="flex space-x-1">
                {[...Array(rev.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic">
                {rev.text}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                {rev.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-800">{rev.name}</h4>
                <p className="text-[11px] text-slate-400">{rev.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};