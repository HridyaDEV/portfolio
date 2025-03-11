import React from 'react'

function Navbar() {
  return (

    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-500">Hridya P V</h1>
        <nav className="flex space-x-6 text-gray-700 font-medium">

          <a href="#brief" className="hover:text-purple-500">Home</a>
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#education" className="hover:text-purple-500">Education</a>
          <a href="#skills" className="hover:text-purple-500">Skills</a>
          <a href="#projects" className="hover:text-purple-500">Projects</a>
          <a href="#contact" className="hover:text-purple-500">Contact</a>

        </nav>
      </div>
    </header>

  )
}

export default Navbar
