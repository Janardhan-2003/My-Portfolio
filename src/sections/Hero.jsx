import React from "react";
import { FileText } from "lucide-react";
import profile from "../assets/profile.jpg";
import Resume from "../../public/Janardhan Reddy.pdf";

const Hero = () => {
  return (
    <>
      <section id="hero" className="flex pt-15">
        <div className="px-2">
          <div className="p-8 md:p-12">
            <div className="flex flex-row items-center md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500/30 shadow-xl"
                  />
                </div>
              </div>

              <div className="flex-1 text-left mt-10">
                <div className="flex items-center justify-start gap-3 mb-2">
                  <h1 className="text-2xl md:text-4xl font-bold text-white">
                    Janardhan Reddy
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-blue-500 h-6 w-6 mt-3"
                    data-state="closed"
                    data-slot="tooltip-trigger"
                  >
                    <path
                      fill="currentColor"
                      d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                    ></path>
                  </svg>
                </div>

                <p className="text-md md:text-xl text-gray-300 mb-6">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-8 flex-1 text-md text-gray-300 font-serif text-left">
              <p>
                I’m a Spotify-powered problem solver who talks to computers
                until they listen. Skilled in MERN, AI,
                <br /> and debugging at 3 AM, I turn “impossible” into side
                projects.
              </p>
              <p>
                I mix skill with stubborn will, turning ideas into smooth,
                working projects that actually feel alive. One commit, one
                crash, and one comeback at a time.
              </p>
              <p>
                Always curious, always experimenting, I thrive on challenges
                that push limits, and I’m on a mission to
                <br />
                craft tech that’s not just functional, but unforgettable. Wrote by AI.
              </p>
            </div>

            <div>
              <a
                href="/resume.pdf"
                download
                className="bg-sky-50 mt-6 py-3 w-60 text-black rounded-2xl flex justify-center gap-2 scale-100 hover:scale-95 hover:bg-gray-300 transition-transform duration-200"
              >
                <FileText />
                Download my Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
