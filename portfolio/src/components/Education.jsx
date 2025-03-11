import React, { useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
      }, []);

      const education = [
        {degree: "B.Tech in Computer Science and Engineering",
        institution: "Government Engineering College Idukki",
        year: "2019 - 2023",
        description: "Developed a strong foundation in programming, data structures, and web development while working on academic projects involving software development and database management.",

      },
    {
        degree: "Higher Secondary Education",
      institution: "Government Vocational Higher Secondary School",
      year: "2016 - 2018",
      description: "Specialized in Physics, Chemistry, Mathematics, and Biology, building a strong multidisciplinary foundation and analytical skills through rigorous coursework.",
    },
    {
        degree: "Secondary School Education",
      institution: "CKG Memorial Higher Secondary School",
      year: "2013 - 2016",
      description: "Built a solid academic foundation in Science and Mathematics, fostering analytical and problem-solving skills while excelling in core subjects.",
    }
]

  return (
    <section id="education" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Title Section */}
      <div className="text-center" data-aos="fade-up">
        <div className="flex justify-center items-center gap-3">
          <FaGraduationCap className="text-5xl text-purple-500" />
          <h3 className="text-5xl font-signika text-gray-800">
            My <span className="text-purple-500">Education</span>
          </h3>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-12 relative ml-20 mr-5">
        <div className="border-l-4 border-purple-500 absolute h-full left-8 top-0"></div>
        <div className="space-y-12">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-16"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="absolute left-4 top-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                <FaGraduationCap />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-purple-500">{item.degree}</h4>
                <p className="text-gray-600 mt-2">
                  <span className="font-semibold">Institution:</span> {item.institution}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Year:</span> {item.year}
                </p>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}

export default Education;
