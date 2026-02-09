"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import TypingText from "@/components/TypingText";

export default function Founder() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-blue-900/5">
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full text-4xl font-serif shadow-lg">
              &ldquo;
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
              <div>
                <div className="text-lg sm:text-xl font-normal text-gray-700 leading-relaxed mb-8 min-h-[5rem]">
                   <TypingText 
                     text='"We built Ayris Global to solve the fragmentation in payment infrastructure. After years leading certification at Discover, I realized the industry needed a unified, modular stack that just works."'
                     speed={20}
                     delay={500}
                   />
                </div>
                
                <div>
                  <div className="font-bold text-gray-900 text-base">Krishna Mohan</div>
                  <div className="text-gray-500 text-sm">Founder & Architect, Ayris Global</div>
                </div>
              </div>

              <div className="relative flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100 relative group">
                  <Image 
                    src="/founder.png" 
                    alt="Krishna Mohan" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <a 
                  href="https://www.linkedin.com/in/krishna-mohan-62432b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077b5] hover:bg-[#006097] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
