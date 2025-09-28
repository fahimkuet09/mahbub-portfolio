import React from "react";

const experiences = [
  {
    title: "Principal Software Engineer",
    company: "Nagorik Technologies Ltd.",
    duration: "Jan 2023 – Present",
    description: [
      "Led the design, development, and deployment of scalable software solutions.",
      "Customized Shopify storefronts and built apps on the Shopify platform.",
      "Developed and customized Odoo ERP modules, including accounting workflows.",
      "Implemented WebSocket-based real-time communication features.",
      "Built RESTful APIs using Laravel; deployed apps on Nginx.",
    ],
  },
  {
    title: "Assistant Computer Programmer",
    company: "Bangabandhu Sheikh Mujibur Rahman Digital University",
    duration: "Feb 2019 – Dec 2022",
    description: [
      "Developed software in PHP Laravel and CodeIgniter frameworks.",
      "Worked on Student Management System and ERP automation.",
      "Conducted requirement analysis & database design.",
      "Prepared system documentation and reporting.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Opsonin Group",
    duration: "Dec 2018 – Feb 2019",
    description: [
      "Maintained Data Warehouse using Oracle.",
      "Developed software with Oracle Forms and Report Builder.",
      "Contributed to Procurement and Warehouse Management Systems.",
      "Performed requirement analysis & database design.",
    ],
  },
  {
    title: "Lecturer, Department of CSE",
    company: "World University of Bangladesh",
    duration: "Dec 2017 – Dec 2018",
    description: [
      "Conducted lectures, tutorials, and lab sessions for CSE courses.",
      "Supervised undergraduate thesis and projects.",
      "Wrote research proposals and academic publications.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Experiences
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {exp.title}
            </h3>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="text-gray-600 text-sm mb-4">{exp.duration}</p>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
              {exp.description.map((item, i) => (
                <li key={i} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
