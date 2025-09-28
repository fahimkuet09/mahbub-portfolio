import React from "react";
import workingImg from "/src/assets/working.avif";

const AboutMe = () => {
  return (
    <div className="hero bg-gray-100 py-10">
      <div className="hero-content flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
          <img
            src={workingImg}
            alt="Working"
            className="w-64 h-64 lg:w-auto lg:h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="py-6 text-gray-700 leading-relaxed">
            Hi, I'm <strong>Mohammad Mahbubur Rahman</strong>, a dedicated{" "}
            <strong>Backend Developer</strong> with expertise in building
            scalable, secure, and high-performance applications. I specialize in
            server-side development using <strong>Laravel (PHP)</strong>,{" "}
            <strong>FastAPI (Python)</strong>
            along with designing and managing enterprise databases like{" "}
            <strong>MySQL</strong>, <strong>PostgreSQL</strong>,{" "}
            and <strong>Oracle</strong>.
          </p>
          <p className="pb-6 text-gray-700 leading-relaxed">
            My expertise includes developing RESTful APIs, implementing
            real-time communication with <strong>WebSockets</strong>, and
            deploying production-ready apps on <strong>Nginx</strong> and{" "}
            <strong>Apache</strong>. I have hands-on experience with{" "}
            <strong>ERP systems (Odoo)</strong>, <strong>Shopify app
            development</strong>, and backend integrations that power seamless
            user experiences.
          </p>
          <p className="pb-6 text-gray-700 leading-relaxed">
            I’m passionate about writing clean, maintainable code and applying
            best practices in software architecture, database design, and system
            optimization. Beyond coding, I enjoy mentoring developers and
            contributing to impactful digital solutions.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#projects">
              <button className="btn btn-outline border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                View Projects
              </button>
            </a>
            <a
              href="https://github.com/fahimkuet09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-mahbub-935989b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white">
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
