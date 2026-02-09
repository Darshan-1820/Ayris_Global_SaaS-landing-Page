"use client";
import React from 'react';
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
                Ready to modernize your payments?
              </h2>
              <p className="text-xl font-normal text-gray-600 mb-10 leading-relaxed">
                Contact our team to discuss your requirements, request a demo, or learn more about our certification services.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* 1. Email Card */}
              <a 
                href="mailto:contact@ayrisglobal.com?subject=Inquiry&body=I%20would%20like%20to%20contact%20Ayris%20Global%20about..."
                className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-gray-900 font-medium text-lg">contact@ayrisglobal.com</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
              
              {/* 2. Location Card */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=570+Lake+Cook+Rd,+Deerfield,+IL+60015,+USA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-900 font-medium text-lg">Deerfield, IL, USA</p>
                </div>
                 <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>

               {/* 3. LinkedIn Card */}
               <a 
                href="https://www.linkedin.com/company/ayris-global-llc/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-100">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Social</p>
                  <p className="text-gray-900 font-medium text-lg">Ayris Global LinkedIn</p>
                </div>
                 <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
