import React from "react";
import styled from "styled-components";

const InfoStyles = styled.div`
  margin-bottom: 20vh;
  margin-right: 5vw;
  display: flex;
  justify-content: space-between;
  @media (hover: none) and (pointer: coarse), (max-width: 500px) {
    flex-wrap: wrap;
    margin-bottom: 10vh;
  }
  .info-main {
    width: 48%;
    @media (hover: none) and (pointer: coarse), (max-width: 500px) {
      width: 95%;
    }
    h2 {
      font-size: calc(var(--VW) * 2);
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 4);
      }
    }
    p {
      margin-bottom: 3vw;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        margin-bottom: 5vw;
      }
      :last-child {
        margin-bottom: 0;
      }
    }
  }
  .info-credits {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (hover: none) and (pointer: coarse) {
      width: 68%;
      margin-top: 10vh;
    }
    @media (hover: none) and (pointer: coarse) and (max-width: 500px) {
      width: 80%;
      margin-top: 10vh;
    }
    h1 {
      font-size: calc(var(--VW) * 4);
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 6);
      }
    }
    h2 {
      font-size: calc(var(--VW) * 2);
      margin: 0.5vw 0;
      @media (hover: none) and (pointer: coarse), (max-width: 500px) {
        font-size: calc(var(--VW) * 4);
      }
      :last-child {
        margin-bottom: 0;
      }
    }
    p {
      margin-bottom: 3vw;
      :nth-child(2) {
        margin-bottom: 1vw;
        margin-top: 0.5vw;
      }
    }
  }
`;

const Info = () => {
  return (
    <InfoStyles data-scroll-section className="info">
      <div className="info-main">
        <h2>Languages</h2>
        <p>JavaScript(ES6+), HTML, CSS/Sass, Java, SQL</p>
        <h2>Frameworks/Libraries/Others</h2>
        <p>
          React.js, NextJs, TailwindCss, Firebase, Framer Motion, Sanity, Styled
          Components, Webpack, Git, NPM, Node.js
        </p>
        {/* <h2>UI/UX</h2>
                <p>Responsive Design, Prototyping, Wireframing, Figma, Adobe Xd, Interview, Survey, Usability Testing</p> */}
        <h2>Learning</h2>
        <p>Node.js, MongoDB, Figma</p>
        <h2>Other Skills</h2>
        <p>Creativity, Writing, Team Work, Adaptability</p>
        <h2>Volunteer/Organizations</h2>
        <p>Dev Genius, NIT Kurukshetra</p>
      </div>
      <div className="info-credits">
        <h1>Education</h1>
        <p>
          Bachelor of Technology <br />
          Computer Science and Engineering <br />
          ITM Group of Instituiton 2022
        </p>
        <p>
          Higher Secondary School
          <br />
          Mathematics, Physics and Chemistry
          <br />
          St. Konard's School 2016
        </p>
        <h2>Copyright &#169;</h2>
        <p>
          I developed this website with React.js. Animations are powered by
          Framer Motion.
        </p>
      </div>
    </InfoStyles>
  );
};

export { Info };
