import { Navbar } from "@/app/components/Navbar";
import { DashboardCard } from "@/app/components/DashboardCard";
import { ProductCard } from "@/app/components/ProductCard";
import { StatsCard } from "@/app/components/StatsCard";
import { Gallery } from "@/app/components/Gallery";
import { Testimonials } from "@/app/components/Testimonials";
import { Footer } from "@/app/components/Footer";
import {Hero} from "@/app/components/Hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            সব শিক্ষকসমূহ (Find Skilled Tutors)
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            আপনার পছন্দের বিষয় অনুযায়ী অভিজ্ঞ টিউটর খুঁজে নিন এবং ক্লাসের জন্য যোগাযোগ করুন।
          </p>
        </div> */}
        <Hero/>

        <section id="tutors">
          <DashboardCard />
        </section>

        <ProductCard />
        <StatsCard />
        <Gallery />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}