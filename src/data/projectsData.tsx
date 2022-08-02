import Ecommerce1 from "../assets/images/projects/e-Commerce/ecommerceFinal.webp";
import Ecommerce2 from "../assets/images/projects/e-Commerce/ecommerce1.webp";
import Ecommerce3 from "../assets/images/projects/e-Commerce/ecommerce4.webp";
import Ecommerce4 from "../assets/images/projects/e-Commerce/ecommerce5.webp";
import Ecommerce5 from "../assets/images/projects/e-Commerce/ecoomerce3.webp";
import Ecommerce6 from "../assets/images/projects/e-Commerce/nothing1.webp";
import Ecommerce7 from "../assets/images/projects/e-Commerce/ecommerce7.webp";

import Disney1 from "../assets/images/projects/disney/disney1.webp";
import Disney2 from "../assets/images/projects/disney/disney2.webp";
import Disney3 from "../assets/images/projects/disney/disney3.webp";
import Disney4 from "../assets/images/projects/disney/disney4.webp";
import Disney5 from "../assets/images/projects/disney/disney5.webp";
import Disney6 from "../assets/images/projects/disney/disney7.webp";
import Tiktok1 from "../assets/images/projects/tiktok/tiktik1.webp";
import Tiktok2 from "../assets/images/projects/tiktok/tiktik2.webp";
import Tiktok3 from "../assets/images/projects/tiktok/tiktik3.webp";
import Tiktok4 from "../assets/images/projects/tiktok/tiktik4.webp";

import Tiktok6 from "../assets/images/projects/tiktok/tiktik6.webp";
import Tiktok7 from "../assets/images/projects/tiktok/tiktik7.webp";
import Tiktok8 from "../assets/images/projects/tiktok/tiktok8.webp";

import Travel1 from "../assets/images/projects/travel/travel1.webp";
import Travel2 from "../assets/images/projects/travel/travel2.webp";
import Travel3 from "../assets/images/projects/travel/travel3.webp";
import Travel4 from "../assets/images/projects/travel/travel5.webp";
import Travel6 from "../assets/images/projects/travel/travel7.webp";
import Travel8 from "../assets/images/projects/travel/travel8.webp";
import Travel9 from "../assets/images/projects/travel/travel9.webp";
import Mapty1 from "../assets/images/projects/mapty/mapty1.webp";
import Mapty2 from "../assets/images/projects/mapty/mapty2.PNG.webp";

import Forkify1 from "../assets/images/projects/forkify/forkify1.webp";
import Forkify2 from "../assets/images/projects/forkify/forkify1.webp";
import Forkify3 from "../assets/images/projects/forkify/forkify1.webp";
import Forkify4 from "../assets/images/projects/forkify/forkify1.webp";

import Headphone1 from "../assets/images/projects/headphone-landing/headphone1.webp";
import Headphone2 from "../assets/images/projects/headphone-landing/headphone2.webp";
import Headphone3 from "../assets/images/projects/headphone-landing/headphone3.webp";
import Headphone4 from "../assets/images/projects/headphone-landing/headphone4.webp";
import Headphone5 from "../assets/images/projects/headphone-landing/headphone5.webp";

export type ProjectDataType = {
  id: string;
  sequence: number;
  title: string;
  text: string[];
  secondary: string[];
  phoneImgSrc: string[];
  desktopImgSrc: string[] | [];
  tabletImgSrc: string[];
  mobileFirst: boolean;
  githubLink: string;
  liveLink: string;
  next: string;
};

export const ProjectData: ProjectDataType[] = [
  {
    id: "full-stack-ecommerce",
    sequence: 1,
    title: "Full Stack E-Commerce Web App",
    text: [
      "A fully responsive Modern Full Stack Ecommerce application with Payment functionality. ",
      "With Modern design, animations, ability to add and edit products on the go using a CMS, all advanced cart functionalities, and  the complete integration with Stripe for REAL payments.",
    ],
    secondary: ["NextJs", "React", "Sanity", "Stripe", "React Context API"],
    phoneImgSrc: [Ecommerce2, Ecommerce3, Ecommerce4],
    desktopImgSrc: [Ecommerce1, Ecommerce7],
    tabletImgSrc: [Ecommerce6, Ecommerce5],
    mobileFirst: false,
    githubLink:
      "https://github.com/adityayaduvanshi/Modern-Full-Stack-ECommerce",
    liveLink: "https://modern-full-stack-ec-ommerce.vercel.app/",
    next: "disney",
  },
  {
    id: "disney",
    sequence: 2,
    title: "Disney+ Clone",
    text: [
      "It is a Disney+ Clone application which gives an exact UI/UX experience like that of the original Disney+ web application.",
    ],
    secondary: [
      "React",
      "Redux",
      "React Styled Components",
      "React Router",
      "Firebase",
    ],
    phoneImgSrc: [Disney3, Disney4, Disney6],
    desktopImgSrc: [Disney1, Disney2],
    tabletImgSrc: [Disney5],
    mobileFirst: false,
    githubLink: "https://github.com/adityayaduvanshi/Disney-Clone",
    liveLink: "https://disney-plus-sooty.vercel.app/",
    next: "tiktok",
  },
  {
    id: "tiktok",
    sequence: 3,
    title: "Full Stack TikTok Clone",
    text: [
      "A fully responsive Full Stack Tiktok Clone.",
      "This application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more",
    ],
    secondary: ["NextJs", "React", "Typescript", "Tailwind CSS", "Sanity"],
    phoneImgSrc: [Tiktok4, Tiktok7, Tiktok8],
    desktopImgSrc: [Tiktok1, Tiktok2],
    tabletImgSrc: [Tiktok6, Tiktok3],
    mobileFirst: false,
    githubLink: "https://github.com/adityayaduvanshi/Full-Stack-TikTok-Clone",
    liveLink: "https://tiktik-steel.vercel.app/",
    next: "recipe-serach-web-app",
  },
  {
    id: "recipe-serach-web-app",
    sequence: 4,
    title: "Recipe Search Web App",
    text: [
      "It is a JavaScript project which is powered by food2fork API delivering great recipes and featuring users to add the recipe ingredients to their shopping list.The app uses modern JavaScript tools and dependencies like Babel, Webpack, and other 3rd party libraries. The user can like and save the recipes in a liked list which is then saved to browser's local storage which can be accessed throughout the browsing session.",
      "Search over 1000 recipes for directions and ingredients • Save recipes to liked items and can be accessed later • Add ingredients to shopping cart and refactoring count, unit, and ingredient data.",
    ],
    secondary: ["JavaScript", "HTML", "CSS", "Webpack"],
    phoneImgSrc: [""],
    desktopImgSrc: [Forkify1, Forkify2],
    tabletImgSrc: [Forkify3, Forkify4],
    mobileFirst: false,
    githubLink: "https://github.com/adityayaduvanshi/Forkify-App",
    liveLink: "https://forkifyapp-aditya.netlify.app/",
    next: "travel",
  },
  {
    id: "travel",
    sequence: 5,
    title: "Travel Website",
    text: [
      "A full responsive travel website to the most beautiful beaches using HTML,CSS and JavaScript. Website contains animation on scrolling. Also inlcludes a dark and and light mode.",
      "Developed first with the Mobile First methodology, then for desktop.Compatible with all mobile devices and with a beautiful and pleasant user interface.",
    ],
    secondary: ["JavaScript", "HTML", "CSS", "Sipwer"],
    phoneImgSrc: [Travel4, Travel8, Travel6],
    desktopImgSrc: [Travel1, Travel2],
    tabletImgSrc: [Travel3, Travel9],
    mobileFirst: true,
    githubLink: "https://github.com/adityayaduvanshi/Responsive-travel-website",
    liveLink: "https://travel-addy.netlify.app/",
    next: "workout-app",
  },
  {
    id: "workout-app",
    sequence: 6,
    title: "Workout Web App",
    text: [
      "Built with Vanilla Javascript and by using Leaflet library.Its structure is built with OOP using classes and objects.",
      "This website is use to see all of your workout's places on map and some details about workout like distance covered,duration,cadence,speed,pace,elevation gain.",
      "Displays Map using Leaflet library,Positions automatically obtained by the browser using Geolocation API, Shows workouts on map,Moves to marker when workout is clicked,Saves workouts to localstorage",
    ],
    secondary: ["JavaScript", "HTML", "CSS"],
    phoneImgSrc: [""],
    desktopImgSrc: [Mapty1, Mapty2],
    tabletImgSrc: [""],
    mobileFirst: false,
    githubLink: "https://github.com/adityayaduvanshi/Mapty",
    liveLink: "https://mapty-byaditya.netlify.app/",
    next: "headphone",
  },
  {
    id: "headphone",
    sequence: 7,
    title: "Headphone Landing Page",
    text: [
      "Another landing page with beautiful UI experience and animation.Full responsive with dark interface. Animation on scrolling. Developed first with the Mobile First methodology, then for desktop.Compatible with all mobile devices and with a beautiful and pleasant user interface.",
    ],
    secondary: ["HTML", "CSS", "JavaScript"],
    phoneImgSrc: [Headphone3, Headphone4, Headphone5],
    desktopImgSrc: [Headphone2],
    tabletImgSrc: [Headphone1],
    mobileFirst: true,
    githubLink: "https://github.com/adityayaduvanshi/Headphone-LandingPage",
    liveLink: "https://beats-addy.netlify.app/",
    next: "full-stack-ecommerce",
  },
];
