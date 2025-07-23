import React from "react";
import { FaMedium, FaGithub } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Blog = () => {
  const blogRef = useScrollReveal();

  return (
    <section
      ref={blogRef}
      className="w-full bg-lightS dark:bg-darkS py-10 px-4"
    >
      {/* Main heading for blog section */}
      <h2 className="text-3xl md:text-4xl font-bold font-Acme text-center mb-10 text-gray-900 dark:text-white">
        Latest Blog Insight
      </h2>

      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start shadow-2xl rounded-2xl p-6 gap-10">
        {/* Image Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 gap-0">
          <a
            href="https://medium.com/@mohamadshahkhajeh/axios-jwt-refresh-token-flow-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-w-full h-auto relative rotate-12 top-4 rounded-4xl shadow-2xl"
              src="https://res.cloudinary.com/dnqx8sqdw/image/upload/e_improve,w_400,h_200,c_thumb,g_auto/v1753282403/Gemini_Generated_Image_b3dihtb3dihtb3di_crxqbd.png"
              alt="JWT Blog"
            />
          </a>

          <a
            href="https://medium.com/@mohamadshahkhajeh/axios-jwt-refresh-token-flow-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="max-w-full h-auto -rotate-12 rounded-4xl shadow-2xl"
              src="https://res.cloudinary.com/dnqx8sqdw/image/upload/e_improve,w_400,h_200,c_thumb,g_auto/v1753282441/Shares_are_ekrbnp.png"
              alt="Axios Diagram"
            />
          </a>
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col justify-center w-full md:w-1/2 text-gray-900 dark:text-white">
          {/* Blog Title */}
          <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] italic font-Acme text-center md:text-left">
            Auto-Refreshing JWTs in Axios :
          </h1>

          <span
            className="text-md md:text-xl lg:text-[2rem] italic font-Acme text-center md:text-right mt-2"
            style={{
              WebkitTextStroke: "2px #e07a5f",
              color: "transparent",
            }}
          >
            No More Expired Token Errors
          </span>

          {/* Description */}
          <p className="mt-4 max-w-prose text-sm md:text-base leading-relaxed">
            In this blog, I dive deep into solving token expiry issues in MERN
            apps using Axios interceptors. Learn how to implement a secure and
            seamless token refresh system with real examples. Written for
            developers facing session handling headaches in production apps.
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-end gap-6 mt-6">
            <a
              href="https://medium.com/@fahizk100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-green-600 transition-transform transform hover:scale-110"
            >
              <FaMedium size={32} />
            </a>
            <a
              href="https://github.com/MuhammedFahizk/MERN-User-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-black transition-transform transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
          </div>

          {/* Profile Avatar */}
          <div className="mt-8">
            <div className="bg-[#f5f5f7] dark:bg-[#1c1c1e] text-black dark:text-white rounded-3xl rotate-6 overflow-hidden">
              <div className="dark:bg-[#2c2c2e] bg-[#e5e5ea] h-12 rounded-t-3xl flex justify-between items-center px-4">
                {/* Mac-style dots */}
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                {/* Profile Link */}
                <a
                  href="https://medium.com/@mohamadshahkhajeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                >
                  mohamad shahkhajeh
                </a>
              </div>

              {/* Review/comment */}
              <div className="p-2 flex items-center gap-2">
                <img
                  src="https://miro.medium.com/v2/resize:fill:88:88/1*dmbNkD5D-u45r44go_cf0g.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                />
                <p className="text-xs">
                  This is a solid explanation of handling JWT expiration using
                  Axios and refresh tokens. The step-by-step guide is clear and
                  practical for building a more seamless user experience. Good
                  balance between security and UX!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
