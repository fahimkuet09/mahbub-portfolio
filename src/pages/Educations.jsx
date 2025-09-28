import React from "react";

const educations = [
  {
    degree: "Master in Information Technology",
    institution: "Institute of Information Technology, University of Dhaka",
    duration: "—",
    description: [
      "Specialized in Information Technology.",
      "Achieved GPA: 3.18 out of 4.0.",
    ],
  },
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    institution: "Khulna University of Engineering and Technology (KUET)",
    duration: "—",
    description: [
      "Graduated with a CGPA of 3.23 out of 4.0.",
      "Focused on software engineering, databases, and algorithms.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (H.S.C)",
    institution: "Notre Dame College, Dhaka",
    duration: "—",
    description: ["Achieved GPA: 5.00 out of 5.00."],
  },
  {
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Comilla Zilla School",
    duration: "—",
    description: ["Achieved GPA: 5.00 out of 5.00."],
  },
];

const Educations = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Education</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            My educational journey has laid the foundation for my career as a
            software engineer and backend developer.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-600 font-medium">{edu.institution}</p>
              <p className="text-gray-500 text-sm mb-4">{edu.duration}</p>
              <ul className="list-disc ml-5 text-gray-700">
                {edu.description.map((item, i) => (
                  <li key={i} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
