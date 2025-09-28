import React from "react";
import phpImg from "/src/assets/php.png";
import laravelImg from "/src/assets/laravel.svg";
import fastapiImg from "/src/assets/fastapi.png";
import aspnetImg from "/src/assets/aspnet.png";
import reactImg from "/src/assets/react.png";
import vueImg from "/src/assets/vue.png";
import pythonImg from "/src/assets/python.jpeg";
import jsImg from "/src/assets/js.webp";
import postgresImg from "/src/assets/postgresql.png";
import mysqlImg from "/src/assets/mysql.png";
import oracleImg from "/src/assets/oracle.png";
import gitImg from "/src/assets/git.png";
import githubImg from "/src/assets/github.png";
import gitlabImg from "/src/assets/gitlab.png";
import nginxImg from "/src/assets/nginx.png";
import apacheImg from "/src/assets/apache.jpg";
import odooImg from "/src/assets/odoo.png";
import shopifyImg from "/src/assets/shopify.png";

const skillsData = [
  { src: phpImg, alt: "PHP", label: "PHP" },
  { src: laravelImg, alt: "Laravel", label: "Laravel" },
  { src: fastapiImg, alt: "FastAPI", label: "FastAPI" },
  { src: aspnetImg, alt: "ASP.NET", label: "ASP.NET" },
  { src: pythonImg, alt: "Python", label: "Python" },
  { src: jsImg, alt: "JavaScript", label: "JavaScript" },
  { src: reactImg, alt: "React.js", label: "React.js" },
  { src: vueImg, alt: "Vue.js", label: "Vue.js" },
  { src: postgresImg, alt: "PostgreSQL", label: "PostgreSQL" },
  { src: mysqlImg, alt: "MySQL", label: "MySQL" },
  { src: oracleImg, alt: "Oracle", label: "Oracle" },
  { src: gitImg, alt: "Git", label: "Git" },
  { src: githubImg, alt: "GitHub", label: "GitHub" },
  { src: gitlabImg, alt: "GitLab", label: "GitLab" },
  { src: nginxImg, alt: "Nginx", label: "Nginx" },
  { src: apacheImg, alt: "Apache", label: "Apache" },
  { src: odooImg, alt: "Odoo ERP", label: "Odoo" },
  { src: shopifyImg, alt: "Shopify", label: "Shopify" },
];

const Skills = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Skill Set</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            As a <strong>Backend Developer</strong>, I specialize in building
            scalable APIs, integrating ERP systems, and managing enterprise
            databases. My expertise spans across modern frameworks, databases,
            and deployment platforms to deliver high-performance solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-16 h-16 mb-4 rounded-md"
              />
              <p className="text-gray-700 font-medium">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
