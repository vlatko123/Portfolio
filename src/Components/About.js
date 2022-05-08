import React from "react";
import "../Components/About.css";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiJson } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import resume from '../../src/Vlatko Bogojevski.pdf';

const About = () => {
  return (
    <div className="about">
      <a className="anchor" id="about"></a>
      <div className="about-title">
        <h1>Something about me</h1>
      </div>
      <div className="about-content">
        <div className="education">
          <h1>Related education</h1>
          <div>
            <ul>
              <li>
                <FaCheckSquare /> Brainster - Front-end academy
              </li>
              <li>
                <FaCheckSquare /> Brainster - React course
              </li>
              <li>
                <FaCheckSquare /> Many more JavaScript and React.js online
                courses
              </li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <div className="list">
            <ul>
              <li>
                <FaJsSquare /> JavaScript
              </li>
              <li>
                <FaReact /> React.js
              </li>

              <li>
                <SiJquery /> jQuery
              </li>
              <li>AJAX</li>
            </ul>
            <ul>
              <li>
                <FaHtml5 /> HTML 5
              </li>
              <li>
                <FaCss3Alt /> CSS3
              </li>
              <li>
                <FaGithubSquare /> GIT
              </li>

              <li>
                <SiJson /> JSON
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="resume">
          Here you can find my resume
          <a href={resume} target="_blank">
            {" "}
            <FaDownload />
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
