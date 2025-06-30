// skillData.js

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongoose,
  // SiMulter,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiReactrouter,
  SiBabel,
  SiAntdesign,
  SiHandlebarsdotjs,
  SiAxios,
  SiChartdotjs,
  SiReacthookform,
  SiGit,
  SiPostman,
  SiFigma,
  // SiAmazonaws,
  SiEslint,
  SiSwagger
} from 'react-icons/si'

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript , color: '#F7DF1E' },
      { name: 'HTML', icon: SiHtml5 , color: '#E44D26' },
      { name: 'CSS', icon: SiCss3 , color: '#1572B6' },
      { name: 'C++', icon: SiCplusplus , color: '#00599C' },
      { name: 'TypeScript', icon: SiTypescript , color: '#3178C6' }
    ]
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Node.js', icon: SiNodedotjs , color: '#339933' },
      { name: 'Express', icon: SiExpress , color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb , color: '#47A248' },
      { name: 'Socket.IO', icon: SiSocketdotio , color: '#010101' },
      { name: 'JWT', icon: SiJsonwebtokens , color: '#000000' },
      { name: 'Mongoose', icon: SiMongoose , color: '#880000' },
      // { name: 'Multer', icon: SiMulter , color: '#f97316' } // Custom fallback
    ]
  },
  {
    category: 'Front-end',
    items: [
      { name: 'React.js', icon: SiReact , color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs , color: '#000000' },
      { name: 'React Native', icon: SiReact , color: '#61DAFB' },
      { name: 'GSAP', icon: SiReact , color: '#88CE02' },
      { name: 'Redux', icon: SiRedux , color: '#764ABC' },
      { name: 'Redux Toolkit', icon: SiRedux , color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss , color: '#06B6D4' },
      { name: 'DaisyUI', icon: SiTailwindcss , color: '#9333EA' },
      { name: 'Bootstrap', icon: SiBootstrap , color: '#7952B3' },
      { name: 'React Router', icon: SiReactrouter , color: '#CA4245' },
      { name: 'Babel', icon: SiBabel , color: '#F9DC3E' },
      { name: 'Socket.IO Client', icon: SiSocketdotio , color: '#010101' },
      { name: 'Ant Design', icon: SiAntdesign , color: '#0170FE' },
      { name: 'Handlebars', icon: SiHandlebarsdotjs , color: '#F0772B' },
      { name: 'Axios', icon: SiAxios , color: '#5A29E4' },
      { name: 'Chart.js', icon: SiChartdotjs , color: '#FF6384' },
      { name: 'React Hook Form', icon: SiReacthookform , color: '#EC5990' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit , color: '#F05032' },
      { name: 'Postman', icon: SiPostman , color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma , color: '#F24E1E' },
      // { name: 'Nginx', icon: SiAmazonaws , color: '#009639' },
      // { name: 'AWS', icon: SiAmazonaws , color: '#FF9900' },
      { name: 'ESLint', icon: SiEslint , color: '#4B32C3' },
      { name: 'Swagger', icon: SiSwagger , color: '#85EA2D' }
    ]
  },
  {
    category: 'Core Skills',
    items: [
      { name: 'DSA (Arrays, Stacks, Queues)', icon: SiJavascript , color: '#F7DF1E' }
    ]
  }
]
