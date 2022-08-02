import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import hoverEffect from "hover-effect";
import Ronnie from "../../assets/images/homepage/profile.webp";
import Ronnie2 from "../../assets/images/homepage/profile2.webp";
import HeatMap from "../../assets/images/homepage/heightMap.webp";

const MainSectionStyles = styled.div`
  margin: 20vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 10vh;
  }
  .main-pic {
    width: 25vw;
    height: 30vw;
    margin-right: 5vw;
    text-align: center;
    overflow: hidden;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 100%;
      width: 50vw;
      height: 55vw;
    }
  }
  .main-text {
    width: 45%;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 95%;
    }
    p {
      margin: 3vw 0;
      mix-blend-mode: normal;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin: 5vw 0;
      }
      a {
        font-family: Grotesk;
        text-transform: none;
        mix-blend-mode: normal;
      }
    }
  }
`;

const MainSection = () => {
  const profileRef = useRef(null);
  useEffect(() => {
    new hoverEffect({
      parent: profileRef.current,
      intensity: 1.4,
      image1: Ronnie2,
      image2: Ronnie,
      displacementImage: HeatMap,
    });
  });
  return (
    <MainSectionStyles data-scroll-section className="main">
      <div
        data-scroll
        data-scroll-speed="6"
        className="main-pic"
        ref={profileRef}
      ></div>
      <div className="main-text">
        <p>
          For whatever reason that brought you to my portfolio, welcome. I hope
          you enjoyed browsing this site as much as I enjoyed building it. First
          off, please allow me to introduce myself.
        </p>
        <p>
          I'm currently front-end developer currently from Rajasthan, India.
          Prior to that, I was pursuing my bachelor's degree in Computer Science
          and Engineering. Then I started learning web development. I have made
          50+ projects using front end technology with beautiful UI and
          features. I don't have any work experience so I am looking for the job
          now a days.
        </p>
        <p>
          As a web developer, I always love to learn about new technologies. So
          I keeps myself updated by adapting new technologies. Aspiring
          Full-Stack Web Developer improving my programming skill-set and
          personal web development projects. My objective is to gain experience
          in the web development industry to expand my programming knowledge and
          abilities.
        </p>
        <p>
          Also I am a technical writer on{" "}
          <a
            href="https://medium.com/@adityayaduvanshi"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>{" "}
          where I writes about programming languages. I have linked my some
          articles below this section. So you can also read my articles.
        </p>
        <p>In my spare time, I loves to make paintings and listening songs.</p>
        {/* <p>
          You can connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/theaditya-yaduvanshi-/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          , <a>Twitter</a>
        </p> */}
      </div>
    </MainSectionStyles>
  );
};

export { MainSection };
