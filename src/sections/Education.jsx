import React from "react";

const education = [
  {
    period: "2021 - 2025",
    schoolName: "Vel Tech University, Chennai",
    degreeType: "B.Tech in Computer Science and Engineering",
    score: ["Score: 8.0 CGPA"],
  },
  {
    period: "2019 - 2021",
    schoolName: "Narayana Junior College",
    degreeType: "Intermediate (MPC)",
    score: ["Score: 967/1000"],
  },
  {
    period: "2019",
    schoolName: "Nagarjuna Model School",
    degreeType: "Secondary School (10th Grade)",
    score: ["Score: 9.5 GPA"],
  },
];

const Education = () => {
  return (
    <div className="text-white my-4 sm:px-6 lg:px-8 space-y-4" id="education">
      <h1 className="text-white my-4 text-2xl font-medium">Education</h1>
      {education.map((each, index) => (
        <div className="flex items-start relative pl-4 sm:pl-0" key={index}>
          
          <div className="border border-gray-700 h-12 mr-4 mt-6 relative"></div>
          <div>
            <span className="absolute -left-[2px] top-0 flex items-center justify-center mt-3 ml-3.5 md:ml-0">
              <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
            </span>
          </div>

          <div className="flex justify-between w-full">
            <div>
              <p className="font-medium">{each.schoolName}</p>
              <p className="text-sm text-gray-400">{each.degreeType}</p>
              <p className="text-sm text-gray-400">{each.score}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">{each.period}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
