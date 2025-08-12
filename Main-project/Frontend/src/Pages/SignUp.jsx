import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../Api/userAuthApi';
import axios from 'axios';

function SignUp() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange =(e) =>{
    setFormData(prev =>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("Submitting form with data:", formData);

    try {
      const res = await register(formData)
      console.log("Raw response:", res);
      console.log("Registered user:", res.data);
      alert("Registration successful")
      navigate('/')
      
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Registration Failed");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[95%] max-w-[1400px] h-[80vh] border-2 border-gray-300 rounded-lg p-8 bg-white shadow-lg flex">
        
        {/* Left Content */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-amber-950">ToyCyle</h1>
        </div>

        {/* Vertical line */}
        <div className="w-[1px] h-full bg-gray-300 mx-6"></div>

        {/* Right Content */}
        <div className="flex-1 px-8 py-4">
          <div className=' border-2 border-gray-300 h-[65vh] rounded-lg'>

         
          <h1 className="text-3xl font-bold text-amber-950 text-center mt-5">Register Here</h1>
          
          <form className="mt-10 space-y-6 px-25 " onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="flex flex-col justify-center ">
              <label htmlFor="userName" className="text-left mb-1 text-gray-700 font-semibold">Full Name</label>
              <input
                type="text"
                id="userName"
                name ="userName"
                value={formData.userName}
                  onChange={handleChange}
                placeholder="Enter your full name"
                className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-[500px]  "
              />
            </div>
            <div className="flex flex-col justify-center ">
              <label htmlFor="email" className="text-left mb-1 text-gray-700 font-semibold">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                  onChange={handleChange}
                className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-[500px]  "
              />
            </div>
            <div className="flex flex-col justify-center ">
              <label htmlFor="password" className="text-left mb-1 text-gray-700 font-semibold">Password</label>
              <input
                type="text"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                  onChange={handleChange}
                className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-[500px]  "
              />
            </div>

           <button type='submit' className='bg-yellow-400 text-amber-950 font-semibold px-2 py-1 rounded-lg'>Register</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
