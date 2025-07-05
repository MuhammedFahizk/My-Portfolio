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
      id="footer-trigger"
      style={{
        backgroundImage: `url('/src/assets/SVG/map.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="z-50 w-full py-10 bg-darkS text-white rounded-t-3xl overflow-hidden"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-9 gap-8 px-6 sm:px-10">
        {/* Message & Contact Info Section */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-8">
          {/* Heading */}
          <div>
            <p className="text-base sm:text-lg text-white/70 mb-4">
              Let’s build something exceptional together — drop me a message to
              get started.
            </p>
            <h1 className="text-6xl text-center sm:text-7xl md:text-8xl lg:text-9xl font-Bubblegum uppercase relative leading-tight">
              <span className="absolute inset-0 text-[#ffffff76] z-0">
                Reach Out
              </span>
            </h1>
          </div>

          {/* Buttons & Contact Info */}
          <div className="flex  mt-10 md:mt-0 flex-col gap-6 md:flex-row md:justify-between text-white/70 text-sm">
            {/* Buttons & Contact Links */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/file/d/1QwGigzV3-Hm4cpVbU6_YvnXgYPZnJbwp/view?usp=sharing"
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" hero flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 text-gray-900/30 dark:text-gray-100/60 backdrop-blur-xl border border-black/30 dark:border-white/30 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-100"
                >
                  <FaDownload className="text-lg" />
                  Download CV
                </a>
                <a
                  href="tel:9961130563"
                  link="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-gray-100/60 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-100"
                >
                  <FaEnvelopeOpenText className="text-lg" />
                  Contact Me
                </a>
              </div>

              {/* Link List */}
              <div className="flex flex-wrap gap-3 text-sm">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-primary dark:hover:text-lightS text-lightS underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1 text-left md:text-end">
              <p>Mavoor, Kozhikode, Kerala, India</p>
              <p>fahizk100@gmail.com</p>
              <p>+91 9961130563</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 w-full">
          <ContactForm />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 px-6 text-center text-sm text-primary">
        © {new Date().getFullYear()} Muhammed Fahiz . K — Built with React /
        GSAP.
      </div>
    </footer>
  );
};
