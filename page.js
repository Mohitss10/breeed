"use client";

// app/page.js
import Link from "next/link";
import { Search, BarChart3, Users } from "lucide-react";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center pt-17 px-4 font-sans">
      <div className="font-display text-gray-700 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div
          className="relative flex flex-col items-center rounded-3xl justify-center min-h-[50vh] sm:min-h-[60vh] p-6 mt-2 sm:p-8 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 33, 17, 0.6), rgba(21, 33, 17, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKz1u9tJrAZlohL9Y6tfFH8wAK88yRRTfUwVXbDKyRDbB2F5duSoFXcn7WEGP0fTQ-FbedoKFggFxB1cReCSKMvhxwyHlSNsLBHyOX7Me43rg_Fl9SYdJ-vt7ZPUdsKJIBLQD9yX_De-eDCYJ5aBnImVC0djGgmIx_IVnsG6-63M9BH_K22EF7eckO_6oCYWKNt3Q9XHsc_PcpA7r3Dpuucad4KUv8FU5Pxpz1XeBwTEJdRty51hclyc3aSDHz5YmFrnC_T9WI6vsg")`,
          }}
        >
          <div className="flex flex-col gap-4 text-center max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Smart ML Based Breed Detection for Cattle and Buffaloes
            </h1>
            <h2 className="text-base sm:text-lg text-white/90">
              Identify breeds instantly with our advanced image recognition
              technology. Improve your herd management and productivity.
            </h2>
          </div>
          <Link
            href="/BreedDetection"
            className="mt-8 flex items-center justify-center h-12 px-8 
    bg-gradient-to-r from-green-600 to-green-700 
    text-white text-base font-semibold rounded-xl shadow-lg 
     
    hover:shadow-xl hover:scale-105 
    transition-all duration-300 ease-in-out"
          >
            <span>Get Started</span>
          </Link>
        </div>

        {/* Why Choose Section */}
        <div className="flex flex-col gap-10 px-2 pt-22 pb-10">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800  max-w-3xl mx-auto">
              Why Choose Our Breed Recognition Tool?
            </h1>
            <p className="text-base  max-w-3xl mx-auto">
              Our tool offers accurate and efficient breed identification,
              helping you make informed decisions for your livestock.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Accurate Identification",
                text: "Our tool uses advanced ML algorithms to accurately identify cattle and buffalo breeds from images.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Data-Driven Insights",
                text: "Gain valuable insights into your herd's composition and performance with detailed breed information.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Community Support",
                text: "Connect with other farmers and experts to share knowledge and best practices for breed management.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 items-center text-center p-6 
        bg-[#ECF6EA] rounded-xl shadow-md 
        transform transition-all duration-300 ease-in-out
        hover:scale-102 hover:shadow-xl  "
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#CAEEC0] text-green-700">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 px-4 py-16 text-center sm:pt-34">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800  max-w-2xl">
              Ready to Transform Your Livestock Management?
            </h1>
            <p className="text-base max-w-2xl mx-auto">
              Start using our breed recognition tool today and experience the
              difference.
            </p>
          </div>
        </div>
        <ContactUs />
        <Footer className="sticky bottom-0 w-full" />
      </div>
    </main>
  );
}
