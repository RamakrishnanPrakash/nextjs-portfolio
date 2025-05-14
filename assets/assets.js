import bg_img from "./bg.svg";
import logo_light from "./logo_light.svg";
import sun_icon from "./sun_icon.svg";
import arrow_light from "./arrow_light.svg";
import round_profile from "./round_profile.svg";
import hand_icon from "./hand-icon.svg";
import code from "./code.webp";
import profile from "./profile.svg";
import codeIcon from "./codeIcon.svg";
import project from "./project.svg";

//tools import

import vscode from "./vscode.svg";
import figma from "./figma.svg";
import postman from "./postman.svg";
import firebase from "./firebase.svg";
import git from "./git.svg";
import react from "./react.svg";
import nodejs from "./nodejs.svg";
import tailwind from "./tailwind.svg";
import rightarrow from "./rightarrow.svg";

// import capture from "./Capture.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import web_icon from "./web-icon.png";
import mail_icon from "./mail_icon.png";
import icon from "./icon.svg";
import arrow_icon_white from "./arrow-icon-white.png";
import git_icon from "./git_white.png";

export const assets = {
  bg_img,
  logo_light,
  sun_icon,
  arrow_light,
  round_profile,
  hand_icon,
  code,
  profile,
  codeIcon,
  project,
  // capture,
  react,
  nodejs,
  tailwind,
  rightarrow,
  mail_icon,
  icon,
  arrow_icon_white,
  git_icon,
};

export const BACKEND_URL = "https://fullstack-portfolio-jiwm.onrender.com";
export const languages1 = [
  "Html",
  "Css",
  "Javascript",
  "React",
  "Nodejs",
  "Express",
];
export const languages2 = [
  "Nextjs",
  "Tailwind",
  "Mongodb",
  "sql",
  "Json",
  "Rest api",
];
export const tools = [vscode, figma, postman, firebase, git];

export const service = [
  {
    title: "MERN Stack Development",
    image: web_icon,
    des: "Build full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    title: "Responsive Web Design",
    image: mobile_icon,
    des: "Create mobile-friendly, fully responsive websites that look great on all devices...",
  },
  {
    title: "UI/UX design",
    image: ui_icon,
    des: "UI/UX design focuses on creating a seamless user experience.Create designs that align with client goals",
  },
];

export const projects = {
  success: true,
  message: "Project data fetched successfully",
  projects: [
    {
      _id: "67f257bb12c47f21eddbed17",
      title: "My Portfolio website ",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743935418/porfolio.png",
      ],
      description:
        "This project is a modern portfolio website built using React.js and styled with Tailwind CSS,\r\n       featuring a dynamic light/dark mode toggle. The website provides an elegant and user-friendly interface to\r\n       showcase my skills, projects, and achievements while offering\r\n       a personalized experience for users through the light and dark theme options.\r\n        The clean, minimal design adapts to different environments and preferences, enhancing accessibility\r\n         and user satisfaction.",
      added_technology: [
        {
          category: "Frontend",
          technologies: [
            "ReactJs",
            "Tailwind CSS",
            "Tailwind CSS",
            "React State Management",
          ],
          _id: "67f257bb12c47f21eddbed18",
        },
      ],
      techstack: ["react", "tailwind", "motion"],
      github_link:
        "https://github.com/RamakrishnanPrakash/Fullstack-Portfolio/tree/main/MyPortfolio",
      website_link: "https://ramakrishna-4swr.onrender.com/",
      date: "2025-04-06T10:30:19.347Z",
      __v: 0,
    },
    {
      _id: "67f25a7812c47f21eddbed2c",
      title: "Mahal Booking System",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743936120/mahal.png",
      ],
      description:
        "Developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it incorporates e-commerce capabilities, enabling users to effortlessly choose venues and purchase additional services in a single, unified system. This project provides a wealth of knowledge, helping me to learn and apply concepts in full-stack development, database management, e-commerce integration, and user-centric design.",
      added_technology: [
        {
          category: "Frondend",
          technologies: [
            "React.js ",
            "Tailwind CSS",
            "ToastContainer",
            "axios",
          ],
          _id: "67f25a7812c47f21eddbed2d",
        },
        {
          category: "Backend",
          technologies: ["Express.js ", "Node.js ", "MongoDB"],
          _id: "67f25a7812c47f21eddbed2e",
        },
        {
          category: "Security_Authentication",
          technologies: ["bcrypt ", "JSON Web Token (JWT)"],
          _id: "67f25a7812c47f21eddbed2f",
        },
        {
          category: "Utilities",
          technologies: ["Moment.js for date and time formatting"],
          _id: "67f25a7812c47f21eddbed30",
        },
      ],
      techstack: ["react", "tailwind", "express", "mongodb", "stripe"],
      github_link:
        "https://github.com/RamakrishnanPrakash/Wedding-Venue-Booking-System",
      website_link: "https://ecommerce-mahal-frontend.onrender.com",
      date: "2025-04-06T10:42:00.557Z",
      __v: 0,
    },
    {
      _id: "67f25bc412c47f21eddbed7a",
      title: "CRUD Application",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743936452/crud_img.png",
      ],
      description:
        "This project is a full-stack CRUD (Create, Read, Update, Delete) application built with Node.js,\r\n       Express.js, MongoDB, and EJS Template Engine. The application allows users to perform CRUD operations\r\n        on data stored in a MongoDB database. It features an intuitive user interface\r\n       and handles requests efficiently using Express.js, providing a seamless experience for managing data.",
      added_technology: [
        {
          category: "Frontend",
          technologies: ["EJS", "Template", "Engine HTML & CSS"],
          _id: "67f25bc412c47f21eddbed7b",
        },
        {
          category: "Backend",
          technologies: ["Node.js", "Express.js ", "MongoDB", "Mongoose "],
          _id: "67f25bc412c47f21eddbed7c",
        },
      ],
      github_link: "https://github.com/RamakrishnanPrakash/mondb",
      website_link: "https://github.com/RamakrishnanPrakash/mondb",
      date: "2025-04-06T10:47:32.593Z",
      __v: 0,
    },
    {
      _id: "67f25d0712c47f21eddbedd2",
      title: "pc Builder",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743936774/pc-built.jpg",
      ],
      description:
        "A dynamic and interactive PC Builder tool that allows users to configure their own custom PC by selecting compatible components. The UI is designed with smooth animations and modern styling for an intuitive experience.",
      added_technology: [
        {
          category: "Frontend",
          technologies: ["Reactjs", "Tailwind Css", "Framer Motion"],
          _id: "67f25d0712c47f21eddbedd3",
        },
      ],
      github_link: "https://github.com/RamakrishnanPrakash/pc-builder-website",
      website_link: "https://pc-builder-website-oq93.onrender.com",
      date: "2025-04-06T10:52:55.376Z",
      __v: 0,
    },
    {
      _id: "67f268981177bfc39a13f116",
      title: "Portfolio Admin",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743939735/porfolioadmin.jpg",
      ],
      description:
        "Portfolio Admin is a full-stack web application that allows users (typically a developer or creator) to add, manage, and display portfolio projects dynamically. It includes functionality to upload project images, store metadata, and easily update your personal project showcase.\r\n\r\nThe frontend is designed for simplicity and productivity, while the backend handles file uploads and data management efficiently using cloud services and a database.",
      added_technology: [
        {
          category: "Frontend",
          technologies: [
            "React.js – Component-based UI",
            "Axios – HTTP requests",
            "Tailwind CSS (if used) – For styling",
          ],
          _id: "67f268981177bfc39a13f117",
        },
        {
          category: " Backend",
          technologies: [
            "Node.js & Express.js – REST API",
            "Multer – Handle file uploads",
            "Cloudinary – Store and manage images in the cloud",
            "MongoDB – Store project data",
          ],
          _id: "67f268981177bfc39a13f118",
        },
      ],
      github_link: "https://github.com/RamakrishnanPrakash/",
      website_link: "https://portfolioadmin-2u3n.onrender.com/",
      date: "2025-04-06T11:42:16.302Z",
      __v: 0,
    },
    {
      _id: "67f26da01566fe189ca72ff6",
      title: " Shapify – E-Commerce Web App",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743941024/shopify.jpg",
      ],
      description:
        "Shapify is a modern, full-stack e-commerce web app built to deliver a smooth and professional online shopping experience. It features product browsing, a responsive cart system, and clean UI—all designed with user experience in mind.\r\n\r\nThe project is now expanding with secure user authentication, one-time password (OTP) login, and Stripe-powered payments to make it production-ready.",
      added_technology: [
        {
          category: " Frontend",
          technologies: [
            "React.js – UI development",
            "React Router – Routing",
            "Axios – API communication",
            "Tailwind CSS – Styling",
            "Framer Motion – Animations",
            "Vercel – Deployment",
          ],
          _id: "67f26da01566fe189ca72ff7",
        },
        {
          category: "Backend",
          technologies: [
            "Node.js + Express.js – API server",
            "MongoDB + Mongoose – Database",
            "CORS & dotenv – Config and security",
            "Stripe Payment Gateway",
            "OTP Authentication",
          ],
          _id: "67f26da01566fe189ca72ff8",
        },
      ],
      github_link: "https://github.com/RamakrishnanPrakash/shopify",
      website_link: "https://shapify-nu.vercel.app",
      date: "2025-04-06T12:03:44.494Z",
      __v: 0,
    },
    {
      _id: "67f272711566fe189ca73014",
      title: "Add cart functionality",
      images: [
        "https://res.cloudinary.com/djkzjsgqj/image/upload/v1743942257/mobile_img.png",
      ],
      description:
        "This feature enables users to add products to a shopping cart, view selected items, update quantities, and remove them—all without requiring backend support. It is powered by vanilla JavaScript and uses localStorage to persist cart data across page reloads",
      added_technology: [
        {
          category: "Frontend",
          technologies: ["HTML-5", "Css", "Vannila javascript", "Localstorage"],
          _id: "67f272711566fe189ca73015",
        },
      ],
      github_link: "https://github.com/RamakrishnanPrakash/electronic-project",
      website_link: "https://github.com/RamakrishnanPrakash/electronic-project",
      date: "2025-04-06T12:24:17.590Z",
      __v: 0,
    },
  ],
};
