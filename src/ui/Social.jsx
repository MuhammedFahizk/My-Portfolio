import React from "react";
import { Div } from "../common/Div";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

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
    external: true, // Flag for external links
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

export const Social = () => {
  return (
    <>
      <Div className="z-50   w-fit  fixed dark:text-light     bottom-40 left-2 md:left-10 flex flex-col gap-2 ">
        {contactLinks.map(({ href, label, icon, external }, index) => (
          <a
            key={index}
            href={href}
            className="p-1 sm:p-1  bg-neutral text-base-100 rounded-full hover:bg-lightS  bg-light   transition duration-300 cursor-pointer"
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <div>{icon}</div>
          </a>
        ))}
        <hr className=" absolute rotate-90  -bottom-12 -left-6.5  w-20 text-primary " />
      </Div>
      <div className="z-50 -rotate-90 w-fit fixed top-40 -right-24 md:-right-20 flex items-center gap-2">
        {/* Horizontal Line */}
        <hr className="w-20  text-primary" />

        <a
          href="https://www.fahizk.com/"
          className="p-5 px-4  sm:p-1 text-xs bg-neutral text-primary  rounded-full  hover:bg-light  transition"
        >
          &nbsp; fahizk100@gmail.com &nbsp;
        </a>
      </div>
    </>
  );
};
