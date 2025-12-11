import React from 'react'
import { FaFacebook, FaInstagram,FaGithub, FaTwitter, FaPhone ,FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
  <footer className="bg-gray-900 text-gray-300 py-10 px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Abullah Furqan</h2>
          <p className="text-sm leading-relaxed">
    Full Stack Developer specializing in React, Node.js, Express, MongoDB, and modern UI/UX. I build fast, scalable, user-friendly web apps with clean code and strong problem-solving.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="">
          <li>
            <a href="#Home" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              Home
            </a>
          </li>

          <li className='py-2'>
            <a href="#About" className="pb-1  border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              About
            </a>
          </li>

          <li>
            <a href="#Skills" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              Skills
            </a>
          </li>

          <li className='py-2'>
            <a href="#Project" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              Project
            </a>
          </li>

          <li>
            <a href="#Contact" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              Contact
            </a>
          </li>
        </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 mx-2">
           Contact Info
          </h3>
      <div className="flex flex-col gap-3 cursor-pointer ">
  <p className="flex items-center hover:text-cyan-500">
    <MdOutlineMail className="mx-2" /> megladon12515@gmail.com
  </p>

  <p className="flex items-center hover:text-cyan-500">
    <FaPhone className="mx-2" /> +92 3346748840
  </p>

  <p className="flex items-center hover:text-cyan-500">
    <IoLocationOutline className="mx-2" /> Karachi, PK
  </p>
</div>


            
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            
            <a href="https://www.instagram.com/furqan_615/" target='_blank' className="hover:text-pink-500"><FaInstagram /></a>
      
            <a href="https://www.linkedin.com/in/furqan-ali-051195382/" target='_blank' className="hover:text-blue-400"><FaLinkedin /></a>
             <a href="https://github.com/SyedAbdullahFurqan" target='_blank' className="hover:text-gray-600"><FaGithub/></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Abdullah Furqan. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
