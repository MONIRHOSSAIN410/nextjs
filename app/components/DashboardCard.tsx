"use client";

import React from "react";
import {motion} from "framer-motion"
import { Star, MapPin, CheckCircle2, BookOpen } from "lucide-react";

interface Tutor {
  id: number;
  name: string;
  subject: string;
  badge: string;
  badgeBg: string;
  gradient: string;
  rate: string;
  rating: number;
  location: string;
}

const tutors: Tutor[] = [
  { id: 1, name: "তানভীর হোসেন", subject: "উচ্চতর গণিত ও পদার্থবিজ্ঞান", badge: "সেরা রেটেড", badgeBg: "bg-purple-600", gradient: "from-purple-600 to-indigo-700", rate: "৳ ৮০০/ঘণ্টা", rating: 4.9, location: "ঢাকা" },
  { id: 2, name: "নুসরাত জাহান", subject: "ইংরেজি সাহিত্য ও আইইএলটিএস", badge: "ভেরিফায়েড", badgeBg: "bg-teal-600", gradient: "from-teal-600 to-emerald-700", rate: "৳ ৬৫০/ঘণ্টা", rating: 4.8, location: "চট্টগ্রাম" },
  { id: 3, name: "রহিম চৌধুরী", subject: "আইসিটি ও ওয়েব ডেভেলপমেন্ট", badge: "জনপ্রিয়", badgeBg: "bg-amber-500", gradient: "from-amber-500 to-orange-600", rate: "৳ ১০০০/ঘণ্টা", rating: 5.0, location: "সিলেট" },
  { id: 4, name: "সাদিয়া আহমেদ", subject: "রসায়ন ও জীববিজ্ঞান", badge: "ফিচার্ড", badgeBg: "bg-rose-500", gradient: "from-rose-500 to-pink-600", rate: "৳ ৭৫০/ঘণ্টা", rating: 4.7, location: "রাজশাহী" },
  { id: 5, name: "আরাফাত রহমান", subject: "হিসাববিজ্ঞান ও ফিন্যান্স", badge: "সেরা রেটেড", badgeBg: "bg-purple-600", gradient: "from-purple-700 to-violet-800", rate: "৳ ৯০০/ঘণ্টা", rating: 4.9, location: "ঢাকা" },
  { id: 6, name: "ফাহমিদা খান", subject: "সাধারণ বিজ্ঞান ও বাংলা", badge: "ভেরিফায়েড", badgeBg: "bg-emerald-600", gradient: "from-indigo-600 to-blue-700", rate: "৳ ৬০০/ঘণ্টা", rating: 4.8, location: "খুলনা" },
];

export const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {tutors.map((tutor, i) => (
        <motion.div
          key={tutor.id}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
        >
          <div className={`bg-gradient-to-r ${tutor.gradient} p-4 text-white relative`}>
            <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${tutor.badgeBg}`}>
              {tutor.badge}
            </span>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center font-bold text-white text-lg">
                {tutor.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-base flex items-center gap-1.5">
                  {tutor.name}
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 inline fill-emerald-400/30" />
                </h3>
                <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {tutor.location}
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs text-slate-500 mb-1">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>বিশেষজ্ঞতা</span>
              </div>
              <h4 className="font-bold text-slate-800 text-base line-clamp-1">
                {tutor.subject}
              </h4>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                ৮+ বছরের অভিজ্ঞতা। এইচএসসি, এসএসসি এবং বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতি পড়ানো হয়।
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-slate-800">{tutor.rating}</span>
                <span className="text-xs text-slate-400">(৪৫+ রিভিউ)</span>
              </div>
              <span className="text-base font-extrabold text-emerald-600">{tutor.rate}</span>
            </div>

            <button className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold py-2.5 rounded-xl text-xs transition-colors">
              ট্রায়াল ক্লাসের অনুরোধ করুন
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};