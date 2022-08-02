import TravelPage from "../assets/images/projects/travel1.webp";
import RecipePage from "../assets/images/projects/forkify1.webp";

import HeadphonePage from "../assets/images/projects/headphone1.webp";

import EcommercePage from "../assets/images/projects/ecommerceFinal.webp";
import DisneyPage from "../assets/images/projects/disney1.webp";
import TiktokPage from "../assets/images/projects/tiktik1.webp";
import WorkOutPage from "../assets/images/projects/mapty1.webp";

export type WorksListItem = {
  id: string;
  title: string;
  src: string;
  leftFlex: 0 | 1 | 2 | 3;
  rightFlex: 0 | 1 | 2 | 3;
  thumbnailOffset: string;
  offsetX: number;
  offsetY: number;
};

export const WorksList: WorksListItem[] = [
  {
    id: "full-stack-ecommerce",
    title: "E-Commerce",
    src: EcommercePage,
    leftFlex: 0,
    rightFlex: 1,
    thumbnailOffset: "60%",
    offsetX: 30,
    offsetY: -10,
  },
  {
    id: "disney",
    title: "Disney Clone",
    src: DisneyPage,
    leftFlex: 3,
    rightFlex: 1,
    thumbnailOffset: "20%",
    offsetX: 30,
    offsetY: -10,
  },
  {
    id: "tiktok",
    title: "TikTok Clone",
    src: TiktokPage,
    leftFlex: 1,
    rightFlex: 3,
    thumbnailOffset: "70%",
    offsetX: -10,
    offsetY: 5,
  },
  {
    id: "recipe-serach-web-app",
    title: "Recipe App",
    src: RecipePage,
    leftFlex: 1,
    rightFlex: 1,
    thumbnailOffset: "10%",
    offsetX: -10,
    offsetY: -2,
  },
  {
    id: "travel",
    title: "Travel Website",
    src: TravelPage,
    leftFlex: 1,
    rightFlex: 3,
    thumbnailOffset: "70%",
    offsetX: 30,
    offsetY: -2,
  },
  {
    id: "workout-app",
    title: "Workout App",
    src: WorkOutPage,
    leftFlex: 3,
    rightFlex: 0,
    thumbnailOffset: "15%",
    offsetX: 25,
    offsetY: 10,
  },
  {
    id: "headphone",
    title: "Landing Page",
    src: HeadphonePage,
    leftFlex: 1,
    rightFlex: 2,
    thumbnailOffset: "60%",
    offsetX: 30,
    offsetY: 5,
  },
];
