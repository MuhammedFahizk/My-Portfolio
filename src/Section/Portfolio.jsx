import React from 'react'
import { Project } from '../ui/Index';

export const Portfolio = () => {
   const projects = [
  {
    title: "Chat Hive",
    subtitle: "A Social Media Application",
    image: "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703389/ChatHive_wgtmkf.png",
    description:
      "Built a full-featured social media application using the MERN stack with real-time chat using Socket.IO. Focused on responsive UI, intuitive user interactions, and role-based access control with JWT.",
    responsibilities: [
      "Implemented real-time messaging and notifications with Socket.IO",
      "Developed secure authentication using JWT with role-based access",
      "Built reusable UI components with React and Tailwind CSS",
      "Managed posts, likes, blogs, comments, and content moderation",
      "Admin dashboard for managing users, posts, reports, and analytics"
    ],
    technologies: [
      "React", "Node.js", "Tailwind CSS", "Socket.IO", "Express", "MongoDB"
    ],
    links: {
      demo: "https://chathivemedia.vercel.app/",
      repo: "https://github.com/MuhammedFahizk/Social-Media-Frontend"
    }
  },
  {
    title: "Drive Wave",
    subtitle: "A Car Rental Application",
    image: "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703408/DriveWave_bhbe0n.png",
    description:
      "Designed and developed a car rental platform using Handlebars for the frontend and a Node.js backend with Razorpay integration. Supports user bookings and third-party vendor listings.",
    responsibilities: [
      "Built a multi-role system for users, admins, and vendors",
      "Integrated Razorpay for secure online payments",
      "Designed backend using MVC architecture with Express and MongoDB",
      "Enabled third-party car listing and management features"
    ],
    technologies: [
      "Node.js", "MongoDB", "Express", "Razorpay", "Handlebars"
    ],
    links: {
      demo: "https://www.drivewave.site/",
      repo: "https://github.com/MuhammedFahizk/drive-Wave"
    }
  },
  {
    title: "Spotify Clone",
    subtitle: "A Music Streaming Application",
    image: "https://res.cloudinary.com/dnqx8sqdw/image/upload/v1751703437/SpotifyClone_zrg7bi.png",
    description:
      "Created a responsive Spotify clone using React with Spotify API integration. Included user authentication, custom playlist management, and seamless audio experience.",
    responsibilities: [
      "Integrated Spotify API for track, album, and artist retrieval",
      "Built a custom backend with JWT auth and refresh token handling",
      "Managed user playlists using MongoDB",
      "Focused on UX and responsive UI using Tailwind CSS"
    ],
    technologies: [
      "Spotify API", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"
    ],
    links: {
      demo: "https://track-me-demo.com",
      repo: "https://github.com/MuhammedFahizk/TrackVoice"
    }
  }
];

  return (
    <div className=' h-fit   bg-light rounded-4xl  px-1 py-6  dark:bg-dark w-full md:px-4 lg:px-20 md:py-10 '>
       <div className='  flex flex-col gap-7'>
        {/* <h1 className='text-3xl font-bold text-center text-dark dark:text-light'>
        Things I've Worked on, Some of Them

        </h1> */}
        <div className="col-span-2 z-50 relative justify-center py-10 items-center bg-transparent flex opacity-55 flex-col   h-full">
        <h1 className="text-4xl md:text-7xl lg:text-[6rem] me-auto italic font-Acme text-gray-900 dark:text-light  ">
           Things I've Worked on
        </h1>
        <h1
          className="text-3xl md:text-6xl md:-mt-12 -mt-4  lg:text-[5rem] ms-auto italic font-Bubblegum text-transparent"
          style={{
            WebkitTextStroke: "2px #e07a5f",
            color: "transparent",
          }}
        >
          Some of Them ... 
        </h1>
      </div>
       {
            projects.map((project, index) => (
                <Project project={project} key={index} index={index+1} />
            ))
        }
       </div>
    </div>
  )
}
