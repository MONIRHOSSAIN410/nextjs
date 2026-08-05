"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "নিবন্ধিত শিক্ষক", val: "১৫,৪০০+", change: "এই মাসে +১২%" },
  { label: "সক্রিয় শিক্ষার্থী", val: "৮৫,০০০+", change: "২৪% বৃদ্ধি" },
  { label: "সফল ক্লাস", val: "২৫০,০০০+", change: "৯৯.২% সন্তুষ্টি" },
  { label: "অন্তর্ভুক্ত বিষয়", val: "১২০+", change: "সব শ্রেণির জন্য" },
];

export const StatsCard = () => {
  return (
    <section className="my-12">
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
          প্ল্যাটফর্মের অগ্রগতি ও পরিসংখ্যানে আমরা
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="space-y-1 p-3 rounded-xl hover:bg-slate-50 transition"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-emerald-600 tracking-tight">
                {stat.val}
              </p>
              <p className="text-xs font-semibold text-slate-700">{stat.label}</p>
              <span className="inline-block text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                {stat.change}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};