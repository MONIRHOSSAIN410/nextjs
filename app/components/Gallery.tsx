"use client";

import React from "react";
import { motion } from "framer-motion";

const instructors = [
  { id: 1, name: "ড. শামসুল আলম", role: "পদার্থবিজ্ঞান লিড", exp: "১৫+ বছর অভিজ্ঞতা" },
  { id: 2, name: "ফরহানা আহমেদ", role: "আইইএলটিএস ইন্সট্রাক্টর", exp: "৮+ বছর অভিজ্ঞতা" },
  { id: 3, name: "মাহমুদ হাসান", role: "গণিত বিশেষজ্ঞ", exp: "১২+ বছর অভিজ্ঞতা" },
  { id: 4, name: "আনিকা তবেস্সুম", role: "রসায়ন শিক্ষক", exp: "৬+ বছর অভিজ্ঞতা" },
  { id: 5, name: "সাব্বির হোসেন", role: "আইসিটি মেন্টর", exp: "১০+ বছর অভিজ্ঞতা" },
];

export const Gallery = () => {
  return (
    <section id="instructors" className="my-16 bg-slate-100/60 rounded-3xl p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-xl mx-auto mb-10"
      >
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">আমাদের মেন্টরবৃন্দ</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
          দেশের সেরা শিক্ষকদের কাছ থেকে শিখুন
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-2">
          শীর্ষস্থানীয় বিশ্ববিদ্যালয় থেকে যাচাইকৃত অভিজ্ঞ মেন্টরবৃন্দ।
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {instructors.map((person, i) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-1 shadow-md group-hover:shadow-emerald-500/30 transition">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-slate-700 font-extrabold text-xl border-2 border-white">
                {person.name.split(" ").map(n => n[0]).join("")}
              </div>
            </div>
            <h4 className="font-bold text-slate-800 text-sm mt-3 group-hover:text-emerald-600 transition">
              {person.name}
            </h4>
            <p className="text-xs text-slate-500">{person.role}</p>
            <span className="text-[10px] text-emerald-700 bg-emerald-100 font-semibold px-2 py-0.5 rounded-full mt-1">
              {person.exp}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};