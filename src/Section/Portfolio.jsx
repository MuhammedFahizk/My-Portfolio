import React from 'react'
import { Project } from '../ui/Index';

export const Portfolio = () => {
    const projects = [
        {
          image: "/Images/ChatHive.png",
          title: "Chat Hive",
          subHead:"A  social media Application",
          description:
            "A  social media application featuring Socket.IO for seamless communication, with a focus on responsive design and intuitive UI.",
          technologies: [
            "React",
            "Node.js",
            "Tailwind css",
            "Socket.IO",
            "Express",
            "MongoDB",
          ],
          details:
            " A dynamic social media platform built using the MERN stack (MongoDB, Express, React, Node.js) following the MVC architecture. The platform features secure user authentication via JWT (JSON Web Token) and supports role-based access for admins and users. Users can engage in real-time messaging with Socket.IO, post feeds, share stories, write blogs, and interact through comments and likes. Additionally, users have the ability to report inappropriate content or users and hide posts they do not wish to see. Admins have full control to manage users, posts, reports, and notifications. The website is fully responsive thanks to Tailwind CSS, and ESLint ensures high code quality and consistency throughout the project.",
          links: {
            demo: "https://chathivemedia.vercel.app/",
            repo: "https://github.com/MuhammedFahizk/Social-Media-Frontend",
          },
        },
        {
          image: "/Images/DriveWave.png",
          title: "Drive Wave",
          subHead: "A car rental application",
          description:
            "A car rental application built with a Handlebars.js (HBS) frontend, offering secure payment options, efficient booking system, and intuitive user management tools.",
          technologies: ["Node.js", "MongoDB", "Express", "Razorpay", "Handlebars"],
          details:
            "Drive Wave is a car rental website designed to provide a seamless experience for users looking to rent vehicles. Built using modern web technologies such as Node.js, Express, MongoDB, and Handlebars (HBS), Drive Wave offers robust backend management paired with an intuitive user interface, catering to customers, administrators, and vendors. The platform not only allows users to rent cars but also enables third-party car owners to list and manage their vehicles, expanding the range of available options for renters.",
          links: {
            demo: "https://www.drivewave.site/",
            repo: "https://github.com/MuhammedFahizk/drive-Wave",
          },
        },
        {
          image: "/Images/SpotifyClone.png",
          title: "Spotify Clone",
          subHead: "A music streaming application",
          description:
            "A music streaming application similar to Spotify, integrated with the Shopify API for showcasing music collections while leveraging a custom database for authentication and user management.",
          technologies: [
            "Spotify API",
            "React",
            "Tailwind css",
            "Node.js",
            "Express",
            "MongoDB",
          ],
          details:
            "A responsive Spotify frontend clone built using React, featuring seamless integration with Spotify's original API for music-related functionalities such as fetching tracks, albums, and artist details. User authentication and playlist management are handled through a custom backend built with Node.js and Express, using JWT for secure access and refresh tokens for session management. User-generated playlists are stored in a dedicated database, while all music streaming and browsing data are fetched directly from Spotify's API, ensuring a rich and authentic user experience.",
    
          links: {
            demo: "https://track-me-demo.com",
            repo: "https://github.com/MuhammedFahizk/TrackVoice",
          },
        },
      ];
  return (
    <div className=' h-fit   bg-light rounded-4xl  px-1 py-6  dark:bg-dark w-full md:px-4 lg:px-20 md:py-10 '>
       <div className='  flex flex-col gap-7'>
        <h1 className='text-3xl font-bold text-center text-dark dark:text-light'>
        Things I've Worked on, Some of Them

        </h1>
       {
            projects.map((project, index) => (
                <Project project={project} key={index} index={index+1} />
            ))
        }
       </div>
    </div>
  )
}
