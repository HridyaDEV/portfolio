import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaCode, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  
  const skills = [
    {
      id: 1,
      icon: <FaHtml5 className="text-6xl text-orange-500 mb-4" />,
      name: 'HTML',
      description: 'Building the structure of websites',
    },
    {
      id: 2,
      icon: <FaCss3Alt className="text-6xl text-blue-500 mb-4" />,
      name: 'CSS',
      description: 'Styling and designing websites',
    },
    {
      id: 3,
      icon: <FaJsSquare className="text-6xl text-yellow-500 mb-4" />,
      name: 'JavaScript',
      description: 'Making websites interactive',
    },
    {
      id: 4,
      icon: <FaReact className="text-6xl text-cyan-500 mb-4" />,
      name: 'React',
      description: 'Building dynamic and responsive UI',
    },
    {
      id: 5,
      icon: <FaDatabase className="text-6xl text-green-500 mb-4" />,
      name: 'SQL',
      description: 'Managing databases and queries',
    },
    {
      id: 6,
      icon: <RiTailwindCssFill className="text-6xl text-cyan-500" />,
      name: 'Tailwind CSS',
      description: 'CSS framework for fast and custom web design',
    },
    {
        id:7,
        icon : <FaCode className='text-6xl text-gray-800'/>,
        name : 'C Programming',
        description:"Low-level language for system and application programming"
    },
    {
        id:8,
        icon: <FaJava className="text-6xl text-cyan-600" />,
        name : 'Java',
        description: 'Versatile language for building secure and scalable applications',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center items-center gap-5" data-aos="fade-up">
          <FaCode className="text-5xl text-purple-500" />
          <h3 className="text-5xl font-signika">
            My <span className="text-purple-500">Skills</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10" data-aos="fade-right">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="text-center bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-4">{skill.icon}</div>
              {/* Name */}
              <h4 className="text-xl font-semibold text-gray-700">{skill.name}</h4>
              {/* Description */}
              <p className="text-gray-500 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
