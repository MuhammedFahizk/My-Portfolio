import React from "react";
import { ContactForm } from "../components/ContactForm";
import {
  FaDownload,
  FaEnvelopeOpenText,
  FaEnvelope,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  const contactLinks = [
    {
      href: "mailto:fahizk100@gmail.com",
      label: "Email",
      icon: <FaEnvelope className="text-md text-primary sm:text-xl" />,
    },
    {
      href: "https://github.com/MuhammedFahizk",
      label: "GitHub",
      icon: <FaGithub className="text-md text-primary sm:text-xl" />,
      external: true,
    },
    {
      href: "https://wa.me/9961130563",
      label: "WhatsApp",
      icon: <FaWhatsapp className="text-md text-primary sm:text-xl" />,
      external: true,
    },
    {
      href: "https://www.instagram.com/fahiz_._k/",
      label: "Instagram",
      icon: <FaInstagram className="text-md text-primary sm:text-xl" />,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/muhammed-fahiz-96726b287",
      label: "LinkedIn",
      icon: <FaLinkedin className="text-md text-primary sm:text-xl" />,
      external: true,
    },
  ];
  return (
    <footer
      style={{
        backgroundImage: `url('/src/assets/SVG/map.svg')`,
      }}
      className="z-50 w-full mb-10 pb-20 py-10 bg-darkS text-white rounded-t-3xl"
    >
      {/* Top Section */}
     <div className="grid grid-cols-1 md:grid-cols-9 h-auto p-5 gap-8">
  {/* Message & Contact Info Section */}
  <div className="md:col-span-6 flex flex-col justify-between">
    {/* Heading Section */}
    <div>
      <p className="text-lg text-white/70 mb-4">
        Let’s build something exceptional together — drop me a message to get started.
      </p>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Bubblegum uppercase relative">
        <span className="absolute inset-0 text-[#ffffff76] z-0">Reach Out</span>
      </h1>
    </div>

    {/* Buttons & Contact Info */}
    <div className="mt-10 flex flex-col md:flex-row justify-between gap-6 text-white/70 text-sm">
      {/* Buttons & Links */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-gray-100/60 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-100"
          >
            <FaDownload className="text-lg" />
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-gray-100/60 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-100"
          >
            <FaEnvelopeOpenText className="text-lg" />
            Contact Me
          </a>
        </div>

        {/* Text-only Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-white text-primary underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Address Info */}
      <div className="flex flex-col gap-2 text-end">
        <p>Mavoor, Kozhikode, Kerala, India</p>
        <p>fahizk100@gmail.com</p>
        <p>+91 9961130563</p>
      </div>
    </div>
  </div>

  {/* Contact Form */}
  <div className="md:col-span-3">
    <ContactForm />
  </div>
</div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-center  mt-10">
        <p className="text-sm text-primary">
          © {new Date().getFullYear()} Muhammed Fahiz . K — Built with React /
          GSAP.
        </p>
      </div>
    </footer>
  );
};
