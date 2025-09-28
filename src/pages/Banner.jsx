import React from "react";
import mahbubImg from "../assets/mahbub.jpg"; // Replace with your photo
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-gray-100 min-h-[500px] py-10">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
        {/* Profile Image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={mahbubImg}
            alt="Mohammad Mahbubur Rahman"
            className="w-64 h-64 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <p className="text-xl font-medium text-gray-600">
            Hello! I’m Mohammad Mahbubur Rahman
          </p>
          <h1 className="text-4xl font-bold text-gray-800">
            Backend Developer
          </h1>
          <p className="py-6 text-gray-700 leading-relaxed">
            I specialize in building robust, scalable, and secure backend
            systems. With hands-on experience in{" "}
            <strong>Laravel</strong>, <strong>FastAPI</strong> ,
            I develop RESTful APIs, real-time features
            with WebSockets, and enterprise-grade ERP solutions. My expertise
            spans databases like <strong>MySQL</strong>,{" "}
            <strong>PostgreSQL</strong>, and{" "}
            <strong>Oracle</strong>, ensuring high-performance data management
            and reliability.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start gap-5 mb-6 text-3xl text-gray-600">
            <Link
              to="https://github.com/fahimkuet09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/fahim-mahbub-935989b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FaLinkedin />
            </Link>
          
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <div className="flex gap-4">
              <a
                href="tel:+8801794593007"
                className="btn btn-outline border-gray-600 text-gray-600 hover:bg-gray-800 hover:text-white text-xl flex items-center gap-2"
              >
                <FaPhone />
                Call Me
              </a>
              <a
                href="https://wa.me/+8801794593007"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-xl flex items-center gap-2"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
            <a
              href="/CV_Md_Mahbubur_Rahman_.pdf"
              download="CV_Md_Mahbubur_Rahman_.pdf"
              className="btn border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-xl flex items-center gap-2"
            >
              Résumé <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
