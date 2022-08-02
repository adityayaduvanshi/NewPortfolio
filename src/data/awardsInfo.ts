import Medium1 from "../assets/images/articles/medium1.webp";
import Medium2 from "../assets/images/articles/medium2.webp";
import Medium3 from "../assets/images/articles/medium3.webp";
import Medium4 from "../assets/images/articles/medium4.webp";
import Medium5 from "../assets/images/articles/medium5.webp";
import Medium6 from "../assets/images/articles/medium6.webp";
import Medium7 from "../assets/images/articles/medium7.webp";
import Medium8 from "../assets/images/articles/medium8.webp";

type AwardInfo = {
  id: number;
  text: string;
  imgURL: string;
  link: string;
};

export const AwardsInfo: AwardInfo[] = [
  {
    id: 0,
    text: "How JavaScript Works behind the scenes?",
    imgURL: Medium1,
    link: "https://blog.devgenius.io/how-javascript-works-behind-the-scenes-88c546173f32",
  },
  {
    id: 1,
    text: "Inside the JavaScript Runtime Environment",
    imgURL: Medium2,
    link: "https://blog.devgenius.io/inside-the-javascript-runtime-environment-457c02100827",
  },
  {
    id: 2,
    text: "Inside the JavaScript Engine",
    imgURL: Medium3,
    link: "https://blog.devgenius.io/inside-the-javascript-engine-bb7b9f26e84b",
  },
  {
    id: 3,
    text: "How CPU works and Why is Apple Silicon...",
    imgURL: Medium4,
    link: "https://blog.devgenius.io/how-cpu-works-and-why-apple-silicon-is-faster-than-intel-i9-8b9303a98dca",
  },
  {
    id: 4,
    text: "Wavy Background with CSS & SVG",
    imgURL: Medium7,
    link: "https://blog.devgenius.io/wavy-background-with-css-svg-4910821c2b87",
  },
  {
    id: 5,
    text: "Concurrency, Multi-threading, Multi-pro....",
    imgURL: Medium8,
    link: "https://blog.devgenius.io/concurrency-multi-threading-multi-processing-asynchronous-programming-and-event-loop-1b8df9fa6c20",
  },
  {
    id: 6,
    text: "What is REST API?",
    imgURL: Medium5,
    link: "https://blog.devgenius.io/what-is-rest-api-466cbc112916",
  },
  {
    id: 7,
    text: "What is Web 3.0",
    imgURL: Medium6,
    link: "https://blog.devgenius.io/what-is-web-3-0-2be70e587bed",
  },
];
