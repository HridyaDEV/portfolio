import Aos from 'aos';
import React, { useEffect } from 'react';
import { IoDownloadSharp, IoPersonSharp } from 'react-icons/io5';
import { MdGetApp } from 'react-icons/md';

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

   
    const profileInfo = {
        name: "Hridya P V",

        resumeLink: "/Resume.pdf",
        profileImage: "IMG_1288.jpg",
    };

    const details = [
        { label: "Phone", value: "+91 7012184105" },
        { label: "Email", value: "hridyadev31@gmail.com" },
        { label: "Place", value: "Calicut" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center" data-aos="fade-up">
                    <div className="flex justify-center items-center gap-3">
                        <IoPersonSharp className="text-5xl text-purple-500" />
                        <h3 className="text-5xl font-signika text-gray-800">
                            About <span className="text-purple-500">Me</span>
                        </h3>
                    </div>
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
                        {/* Profile Image */}
                        <div className="relative" data-aos="fade-left">
                            <img
                                src={profileInfo.profileImage}
                                alt="Profile"
                                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500 opacity-80 animate-pulse"></div>
                        </div>
                        {/* About Details */}
                        <div className="text-left max-w-lg" data-aos="fade-left">
                            <p className="text-lg text-gray-700 leading-relaxed">I'm
                                <span className="font-serif text-purple-600 font-bold"> Hridya P V</span>, a B.Tech CSE graduate with a passion for web development and design. I specialize in crafting responsive and intuitive user experiences using modern frameworks like React and Tailwind CSS. My skills include HTML, CSS, JavaScript, React, Tailwind CSS, and SQL. I’m always exploring new technologies to enhance my ability to create exceptional digital solutions.
                            </p>
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                {details.map((detail, index) => (
                                    <p key={index} className="text-gray-600">
                                        <span className="font-bold text-purple-500">
                                            {detail.label}:
                                        </span>{" "}
                                        {detail.value}
                                    </p>
                                ))}
                            </div>
                            <button
                                type="button"
                                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-md hover:bg-purple-900 mt-5 flex items-center justify-center gap-2 px-6 py-3 transition-transform transform hover:scale-105"
                            >
                                <a
                                    href={profileInfo.resumeLink}
                                    target="_blank"
                                    className="flex items-center space-x-2"
                                >
                                    <span className="text-lg font-semibold">Get Resume</span>
                                    <MdGetApp className="text-white text-xl animate-bounce mt-1" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
