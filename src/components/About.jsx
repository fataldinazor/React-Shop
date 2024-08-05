// src/AboutPage.jsx
import React from "react";
import aboutBg from "../assets/about2.jpg";
import pfp from "../assets/fataldianzor.jpg";
const About = () => {
  return (
    <div
      className="flex-grow flex bg-contain bg-no-repeat bg-black bg-fixed justify-end overflow-hidden"
      style={{ backgroundImage: `url(${aboutBg})`, backgroundPosition: "left" }}
    >
      <div className="w-1/2 md:w-7/12 flex bg-black justify-end my-4 mx-6 bg-opacity-90 rounded-2xl text-white shadow-lg animate-fadeIn">
        <div className="AboutPrj w-full md:w-1/2 my-2 mx-2 bg-blue-950 bg-opacity-30 rounded-lg animate-slideInFromLeft">
          <div className="bg-opacity-100 h-full flex flex-col justify-evenly p-4">
            <div>
              <h1 className="text-2xl font-semibold mb-2 text-pink-500 animate-fadeIn">
                The React Store
              </h1>
              <p className="text-base text-justify text-gray-300 animate-fadeIn">
                Welcome to React Store, your ultimate destination for a seamless
                and delightful online shopping experience. At React Store, we
                pride ourselves on offering a diverse range of high-quality
                products, carefully curated to meet the needs and preferences of
                our valued customers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mt-4 mb-2 text-pink-500 animate-fadeIn">
                Tech Stack
              </h2>
              <p className="text-gray-300 text-justify mb-2 animate-fadeIn">
                Built with React, the website ensures a dynamic and responsive
                interface.
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-300 animate-fadeIn">
                <li>
                  Utilizing <span className="font-bold">React Router</span> to
                  manage navigation, providing smooth transitions and a
                  single-page application feel.
                </li>
                <li>
                  Using <span className="font-bold">hooks</span> and{" "}
                  <span className="font-bold">loaders</span> to ensure faster
                  data fetching and component rendering, enhancing the user
                  experience.
                </li>
                <li>
                  Detailed pages with in-depth information and high-quality
                  images.
                </li>
                <li>
                  <span className="font-bold">Tailwind</span> has been used to
                  create the UI of the application.
                </li>
                <li>
                  API by{" "}
                  <a
                    className="text-bold text-indigo-500"
                    href="https://fakeapi.platzi.com/"
                  >
                    Platzi Fake Store API
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="aboutAuthor w-full md:w-1/2 my-2 mx-4 bg-opacity-70 rounded-lg animate-slideInFromRight">
          <div className="aboutMe p-4">
            <div className="flex animate-fadeIn">
              <img className="rounded-full w-24 mb-4" src={pfp} alt="Author" />
              <div className="text-3xl font-semibold ml-10 content-center mb-7 text-pink-500">
                About Me
              </div>
            </div>
            <div className="text-gray-300 text-justify animate-fadeIn">
              <p>
                I am a passionate frontend developer focused on creating dynamic
                user interfaces.
              </p>
              <br />
              <p>
                With a strong foundation in HTML, CSS, and JavaScript, I build
                seamless web experiences. My primary tool is React, and I&apos;m
                also skilled in <span className="font-bold">Tailwind CSS</span>{" "}
                for efficient styling.
              </p>
              <br />
              <p>
                My portfolio showcases projects using{" "}
                <span className="font-bold">
                  React, vanilla JavaScript and CSS
                </span>
                , reflecting my ability to handle diverse frontend challenges. I
                stay current with trends to deliver high-quality, user-centric
                solutions.
              </p>
            </div>
          </div>
          <div className="myprofiles p-4 animate-fadeIn">
            <h2 className="text-xl font-semibold mb-4">My Profiles</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/fataldinazor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-7 h-8"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.305 3.438 9.8 8.205 11.388.6.112.82-.261.82-.577v-2.09c-3.338.728-4.043-1.614-4.043-1.614-.545-1.382-1.333-1.748-1.333-1.748-1.088-.743.082-.728.082-.728 1.207.085 1.838 1.23 1.838 1.23 1.073 1.849 2.812 1.314 3.493 1.004.107-.776.42-1.314.765-1.616-2.667-.306-5.467-1.336-5.467-5.942 0-1.315.47-2.388 1.237-3.23-.124-.305-.537-1.535.118-3.197 0 0 1.014-.325 3.316 1.236a11.415 11.415 0 0 1 3.028-.406c1.032.014 2.065.145 3.028.406 2.302-1.56 3.316-1.236 3.316-1.236.654 1.662.242 2.892.118 3.197.767.842 1.237 1.915 1.237 3.23 0 4.623-2.8 5.632-5.479 5.933.43.369.825 1.1.825 2.221v3.293c0 .319.219.69.825.577C20.563 21.798 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/pushpesh-joshi09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-8 h-8"
                  fill="white"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
