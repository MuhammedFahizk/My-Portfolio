import React from "react";
import { ContactForm } from "../components/ContactForm";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="z-50 w-full bg-darkS text-white rounded-3xl">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[400px] p-5 gap-8">
        <div className="col-span-2">
          <p className="text-lg text-white/70 mb-4">
            Let’s build something exceptional together — drop me a message to get started.
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Bubblegum uppercase relative">
            <span className="absolute inset-0 text-[#ffffff76] z-0">
              Reach Out
            </span>
          </h1>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row items-center justify-end px-5 pb-2 gap-4">
        <p className="text-sm text-primary">
          © {new Date().getFullYear()} Muhammed Fahiz . K Built with React / GSAP .
        </p>
        
      </div>
    </footer>
  );
};
