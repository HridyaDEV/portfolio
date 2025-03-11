import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Contact data
const contacts = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hridyapv',
    icon: <FaLinkedin className="text-blue-600 text-4xl" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/HridyaDEV',
    icon: <FaGithub className="text-gray-800 text-4xl" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_hrid_',
    icon: <FaInstagram className="text-pink-500 text-4xl" />,
  },
];

function Contacts() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">Contact Me</h3>
        <p className="mt-4 text-gray-600">Feel free to reach out for collaborations or just to say hi!</p>
        <div className="flex justify-center space-x-6 mt-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              className="hover:scale-110 transition-transform "
            >
               

               
              {contact.icon}
             
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
