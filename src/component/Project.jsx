import React, { useState } from 'react'
import { Register } from './Register'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


import { FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"
import furqan from   "../assets/furqan.jpg"

import {myData} from "./Skills.js"
import pdf from "../public/Abdullah-Furqan-FlowCV-Resume-20251109 (1).pdf"

import "./about.css"
import Home from './Home.jsx';

const Project = () => {
//     inView(".scroll-section ", (element) => {
//         animate(
//             element,
//             { opacity: 1, x: [-100, 0] },
//             {
//                 duration: 0.9,
//                 easing: [0.17, 0.55, 0.55, 1],
//             }
//         )

//         return () => animate(element, { opacity: 0, x: -100 })
//     })
//  inView(".exam > div", (saads) => {
//         animate(
//             saads,
//             { opacity: 1, y: [100, 0] },
//             {
//                 duration: 0.9,
//                 easing: [2.17, 0.55, 0.55, 2],
//             }
//         )

//         return () => animate(saads, { opacity: 0, y: 130 })
//     })
   
  return (
    <div className='overflow-hidden'>
      <section  id="Home" className='pt-15 bg-gray-800'>

<motion.div  initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className=' scroll-section grid  grid-cols-1 sm:grid-cols-2 w-full h-full'>

    <div className=' w-full h-screen flex flex-col justify-center px-6 order-2 sm:order-1'>
<h4 className='uppercase text-white text-lg sm:text-4xl text-[18px] font-mono font-bold pb-3'> hi, <span className='text-cyan-300'>I am Furqan </span> </h4>

<h1 className=' text-cyan-500  w-100 text-[16px] sm:text-lg  uppercase font-medium   '>full stack web developer </h1>
<img src={furqan} className='w-30 mt-5 block sm:hidden      rounded-full  bg-amber-100 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500 '  />

<p className='capitalize  w-fit sm:w-full text-[15px] sm:text-lg  mt-2 text-white p-3'>I’m a passionate FullStack Developer built Website and learn modern web technologies. I enjoy building responsive, user-friendly web applications and continuously learning about new frameworks and design patterns Looking forward to contributing to dynamic software teams.</p>
 <div class="socail ">
 
<a href="#"><FaFacebook  className='m-auto  '   /></a>

  <a href="#"><FaInstagram  className=' m-auto'   /></a>

  
  <a href="#"><FaGithub  className='m-auto'   /></a>

  




    </div> 


    
  <div className=' '>
   <NavLink to={"/Skill"}>
   <button className='w-30 sm:w-fit text-[13px] sm:text-[16px] m-2 p-3 border-2 border-amber-50 cursor-pointer hover:bg-cyan-400 hover:text-black'>See My Work   </button></NavLink>

 <button className='w-30 sm:w-fit text-[13px] sm:text-[14px] p-3 border-2 border-amber-50 cursor-pointer hover:bg-cyan-400 hover:text-black'> <a href={pdf}  target="_blank">Download CV</a>
</button>
   </div>
    </div>

    <div className= 'hidden  w-full sm:order-2  order-1 h-screen sm:flex justify-center items-center fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500  '>
<img src={furqan} className='w-[70%] ms-2    sm:w-1/2 sm:h-60 md:w-1/2 md:h-70 lg:w-1/2 lg:h-100   rounded-full  bg-amber-100 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500 '  />

    </div>
</motion.div>

      </section>




<section id="About" className=' w-full h-screen flex flex-col justify-center  bg-gray-700'>


<motion.div  initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 scroll-section '>
 <div className='fill-cyan-500 px-4 mx-3 drop-shadow-lg drop-shadow-cyan-500  place-items-center-safe place-content-center mt-3 object-cover'>
<img src={furqan} className='w-full sm:w-1/2 sm:h-60 md:w-1/2 md:h-70 lg:w-fit lg:h-100      fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500   rounded-full '  />

    </div>
    <div className='mx-5 text-black'>
<h4 className=' text-cyan-300  text-[17px] sm:text-3xl md:text-4xl font-extrabold font-sans'>About Me</h4>

<h3 className='text-white text-[16px] sm:text-2xl py-4 capitalize font-medium font-sans'>I am Full stack developer</h3>

<p className=' text-gray-300 leading-5 sm:leading-10 text-sm sm:text-[20px] lg:text-2xl  capitalize '>I'm a passionate full-stack developer with over 5 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks..</p>
  <button className='bg-cyan-600 mt-7  w-30 sm:w-40 text-[13px] sm:text-[16px] mx-3 my-2 border-2 cursor-pointer capitalize hover:bg-cyan-400 hover:text-black'> <a href={pdf}  target="_blank">CONTACT US </a>
</button>
 
 
    {/* <div className='flex my-3 mx-3'>
  <h1 className='text-amber-50 uppercase'>Follow me on : </h1></div>
   <div className='lg:text-[36px] lg:w-15 lg:h-14  sm:text-[29px] sm:w-14 sm:h-13 text-3xl h-14 pt-2  text-center text-cyan-300 border-2 border-cyan-300 rounded-3xl  cursor-pointer hover:bg-cyan-400 hover:text-black hover:border-black'>
<FaFacebook  className=' w-10 m-auto'   />
  </div>
  
  
   <div className='lg:text-[36px] lg:w-15 lg:h-14  sm:text-[29px] sm:w-14 sm:h-13 text-3xl  pt-2  mx-3 text-center text-cyan-300 border-2 border-cyan-300 rounded-3xl w-15 h-14 cursor-pointer hover:bg-cyan-400 hover:text-black hover:border-black'>
<FaInstagram  className=' w-10 m-auto'   />
  </div>
  
   <div className='lg:text-[36px] lg:w-15 lg:h-14  sm:text-[29px] sm:w-14 sm:h-13 text-3xl  pt-2  text-center text-cyan-300 border-2 border-cyan-300 rounded-3xl w-15 h-14 cursor-pointer hover:bg-cyan-400 hover:text-black hover:border-black'>
<FaGithub  className=' w-10 m-auto'   />
  </div>
   */}
  

  
  
  
    </div>

   
</motion.div>

</section>
{/* 
<section className=' bg-gray-800 w-full h-screen flex flex-col justify-center overflow-hidden'>
<div className=' grid grid-cols-2  '>
 
  <div className='mx-5 '>
<span className='text-cyan-300 '>Service</span>
<h1 className='text-4xl mt-4  text-white '>What I do</h1>
<p className=' service text-lg mt-6  text-white   '>We offer comprehensive digital services including web design, UI/UX design, app development, and web development. Our expertise spans visually captivating websites, intuitive user interfaces, feature-rich mobile apps, and tailored web solutions.</p>
</div>
<div className='text-center uppercase'>
  
<h1  className='text-cyan-300 text-4xl mb-7'>Course I Learn</h1> 
<h3 className='text-2xl mt-4  text-white'>Web design</h3>
<h3 className='text-2xl mt-4  text-white'>web development</h3>
<h3 className='text-2xl mt-4  text-white'>ui ux design</h3>
</div>







</div>

<span className='text-center  text-3xl my-10 text-cyan-300 '>My Skills</span>

<div className='flex mt-10 justify-center align-middle text-center cursor-pointer '>

<div className='border-2 hover:bg-cyan-500  border-blue-400 mx-5 rounded-3xl w-1/3 h-fit transform scale-100 hover:scale-110'>
<img src="css-icon.png"  className='h-50 p-4' alt="" />

<h2 className='mb-6 py-5 text-3xl text-center  text-white  '>CSS</h2>

</div>
 
<div className='border-2 border-blue-400  rounded-3xl px-4 mx-5 w-1/3 h-fit transform scale-100 hover:scale-110 hover:bg-cyan-500'>
<img src="html-icon.png" alt=""  className='h-50 p-4  ' />

<h2 className='mb-6 py-5 text-3xl text-center text-white hover:text-black'>HTML</h2>

</div>

<div className='border-2 border-blue-400 rounded-3xl mx-5 w-1/3 h-fit hover:bg-cyan-500 transform scale-100 hover:scale-110'>
<img src="js.png" alt=""  className='h-50 p-4' />

<h2 className='mb-6 py-5 text-3xl text-center text-white hover:text-black'>REACT</h2>

</div>
<div className='border-2 border-blue-400 rounded-3xl mx-5 w-1/3 h-fit  hover:bg-cyan-500 transform scale-100 hover:scale-110'>
<img src="tailwind-css-icon.png"  className='h-50 p-4' alt="" />

<h2 className='mb-6 py-5 text-3xl text-center text-white hover:text-black'>TAILWIND</h2>

</div>
  


  

<div className='border-2 border-blue-400 rounded-3xl mx-5 w-1/3 h-fit  hover:bg-cyan-500 transform scale-100 hover:scale-110'>
<img src="bootstrap-5-logo-icon.png"   className='h-50 p-4' alt="" />

<h2 className='mb-6 py-5 text-3xl text-center text-white  hover:text-black'>BOOTSTRAP</h2>

</div>
  <div className='border-2 border-blue-400 rounded-3xl mx-5 w-1/3  h-fit  hover:bg-cyan-500 transform scale-100 hover:scale-110'>
<img src="react.png"  className='h-50 p-4' alt="" />

<h2 className='mb-6 py-5 text-3xl text-center text-white hover:text-black '>JAVASCRPIT</h2>

</div>

</div>


</section>
 */}


<section id="Skills" className="bg-gray-800 w-full min-h-screen flex flex-col justify-center overflow-hidden px-6 py-14">
<motion.div
  initial={{ y: -40, opacity: 0 }}    // smaller movement = faster
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}           // SUPER IMPORTANT
  transition={{ duration: 0.6, ease: "easeOut" }}
>
<div className='text-center'>
<h1 className='text-2xl uppercase text-white mb-3 font-extrabold '>MY <span className='text-cyan-500'>Skills</span></h1>


<p className='text-gray-400 font-sans capitalize'>Techlogies i work with full stack developer</p>

</div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center pt-5 px-4'>
  {myData.map((e, index) => (
    <div
      key={index}
      className='border-2 cursor-pointer border-blue-400 rounded-3xl w-full h-full transform scale-100 hover:scale-105 p-6 my-6 transition-transform duration-300'
    >
      <div className='flex flex-col sm:flex-row items-center text-white text-center sm:text-left'>
        {e.img && (
          <img src={e.img} alt={e.title} className='w-14 h-14 mx-0 sm:mx-4 my-2 object-contain' />
        )}
        <h3 className='mt-4 sm:mt-0 font-bold text-2xl mb-4'>{e.title}</h3>
      </div>

      <p className='leading-loose text-gray-400 text-center sm:text-left'>{e.paragraph}</p>

      <div className='flex flex-wrap gap-2 justify-center sm:justify-start pt-5 items-center'>
        {e?.skills?.map((skill, idx) => (
          <div
            key={idx}
            className='flex items-center gap-2 bg-gray-700 text-white rounded-full px-3 py-1'
          >
            {skill.imges && (
              <img src={skill.imges} alt={skill.names} className='w-6 h-6 object-contain' />
            )}
            <span className='text-sm font-semibold'>{skill.names}</span>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
</motion.div>
  {/* Top Grid */}
  {/* <motion.div
    
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-10  ">

    <div>
      <span className="text-cyan-300">Service</span>
      <h1 className="text-2xl mt-4 text-white">What I do</h1>
      <p className="service text-lg mt-6 text-white">
        We offer comprehensive digital services including web design, UI/UX design, app development, and web development. Our expertise spans visually captivating websites, intuitive user interfaces, feature-rich mobile apps, and tailored web solutions.
      </p>
    </div>

    <div className="text-center uppercase">
      <h1 className="text-cyan-300 text-3xl md:text-4xl mb-7">Course I Learn</h1>
      <h3 className="text-2xl mt-4 text-white">Web design</h3>
      <h3 className="text-2xl mt-4 text-white">Web development</h3>
      <h3 className="text-2xl mt-4 text-white">UI/UX design</h3>
    </div>
  </motion.div> */}

  {/* Skills Heading */}


{/* 


    <div className="example    border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src={css} className="h-32 mx-auto p-4" alt="CSS" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">CSS</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src={html} className="h-32 mx-auto p-4" alt="HTML" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">HTML</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src={react} className="h-32 mx-auto p-4" alt="React" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">REACT</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src={tailwind} className="h-32 mx-auto p-4" alt="Tailwind" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">TAILWIND</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src={bootstrap} className="h-32 mx-auto p-4" alt="Bootstrap" />
      <h2 className="mb-6 py-5 text-[20px] sm:text-3xl text-center text-white">BOOTSTRAP</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src={js} className="h-32 mx-auto p-4" alt="JavaScript" />
      <h2 className="mb-6 py-5 text-[20px] sm:text-3xl text-center text-white">JAVASCRIPT</h2>
    </div> */}

</section>

{/* <Modern/> */}

<section id='Project'>

  <Home/>
</section>




  <Register/> 

    </div>
  )
}

export default Project
