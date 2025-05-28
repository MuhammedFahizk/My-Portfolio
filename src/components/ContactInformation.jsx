import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export const ContactInformation = () => {
  return (
    <div className="grid-cols-1 flex flex-col items-center relative bg-emerald-300  dark:bg-emerald-400 shadow-lg rounded-4xl p-5 px-10 overflow-hidden">
      <h1 className="text-4xl font-Acme text-white">Contact Information</h1>
      <p className="text-center text-sm font-Fira text-lightS  mb-4">
        Feel free to reach out for collaborations, project inquiries, or just to
        say hello!
      </p>

      <div className="flex flex-col h-1/3 items-start p-2 justify-around text-white text-sm font-Nunito">
        <a
          href="mailto:fahizk100@gmail.com"
          className="flex items-center gap-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="text-lg text-lightS" />
          <span>fahizk100@gmail.com</span>
        </a>

        <a
          href="tel:+919961130563"
          className="flex items-center gap-2 hover:underline"
        >
          <MdPhone className="text-lg text-lightS" />
          <span>+91 9961130563</span>
        </a>

        <a
          href="https://www.google.com/maps?q=Kozhikode,+Kerala,+India,+673601"
          className="flex items-center gap-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdLocationOn className="text-lg text-lightS" />
          <span>Kozhikode, Kerala, India, 673601</span>
        </a>
      </div>

      <div className=" h-1/2  w-full "></div>
      <div className="bg-gradient-to-r  shadow-2xl  from-primary to-lightS h-50 w-50 rounded-full -end-10 -bottom-10 absolute"></div>
      <div className="bg-gradient-to-r shadow-2xl  to-primary from-lightS h-15 w-15 rounded-full end-27 bottom-27 absolute"></div>
    </div>
  );
};
