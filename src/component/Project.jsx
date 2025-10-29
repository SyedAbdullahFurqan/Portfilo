import React from 'react'
import { Register } from './Register'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";

  import { animate, inView ,stagger} from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm"

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
      <section   className=' bg-gray-800'>

<motion.div  initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className=' scroll-section grid grid-cols-2 w-full h-full'>

    <div className=' w-full h-screen flex flex-col justify-center px-6'>
<h4 className='text-cyan-300 text-lg sm:text-xl text-[11px] font-semibold'> Welcome To Website </h4>

<h1 className=' font-medium font-sans w-100 text-[11px] sm:text-lg  uppercase my-4 text-white'>I am Furqan <span className='text-cyan-300'>AND ALSO WEB DEVELOPER</span> </h1>

<p className='uppercase my-t w-44 sm:w-100 text-[15px] sm:text-lg   text-white p-5'>This website is all about Website Development, Technical, Tips and Tricks, Designs Principle, Source Code sales and Programming videos in the Hindi Language.</p>
  
  <div className='flex '>
   <NavLink to={"/Skill"}>
   <button className='w-30 sm:w-40 text-[13px] sm:text-[16px] cursor-pointer hover:bg-cyan-400 hover:text-black'>See My Work   </button></NavLink>
      <NavLink to={"/Skill"}>
   <button className='w-30 sm:w-40 text-[13px] sm:text-[16px] mx-2 cursor-pointer hover:bg-cyan-400 hover:text-black'>Download CV   </button></NavLink>
   </div>
    </div>

    <div className='w-full h-screen flex justify-center items-center fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500  '>
<img src="furqan.jpg" className='w-[70%] ms-2    sm:w-1/2 sm:h-60 md:w-1/2 md:h-70 lg:w-1/2 lg:h-100   rounded-full  bg-amber-100 fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500 '  />

    </div>
</motion.div>

      </section>
<section className=' w-full h-screen flex flex-col justify-center  bg-gray-700'>


<motion.div  initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 scroll-section '>

    <div className='mx-5 text-black'>
<h4 className=' text-cyan-300 text-2xl '>About Me</h4>



<p className=' text-gray-300 my-8 py-5 text-sm sm:text-[20px] lg:text-[25px] font-medium font-sans uppercase  sm:w-90'>This website is all about Website Development, Technical, Tips and Tricks, Designs Principle, Source Code sales and Programming videos in the Hindi Language.</p>
  <div className='flex '>
    <div className='flex my-3 mx-3'>
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
  
  
  </div>
  
  
  
    </div>

    <div className='fill-cyan-500 px-4 mx-3 drop-shadow-lg drop-shadow-cyan-500  place-items-center-safe place-content-center mt-3 object-cover'>
<img src="furqan.jpg" className='w-full sm:w-1/2 sm:h-60 md:w-1/2 md:h-70 lg:w-1/2 lg:h-100      fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500   rounded-full '  />

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


<section className="bg-gray-800 w-full min-h-screen flex flex-col justify-center overflow-hidden px-6 py-10">
  {/* Top Grid */}
  <motion.div
    
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
    {/* Left Side */}
    <div>
      <span className="text-cyan-300">Service</span>
      <h1 className="text-2xl mt-4 text-white">What I do</h1>
      <p className="service text-lg mt-6 text-white">
        We offer comprehensive digital services including web design, UI/UX design, app development, and web development. Our expertise spans visually captivating websites, intuitive user interfaces, feature-rich mobile apps, and tailored web solutions.
      </p>
    </div>

    {/* Right Side */}
    <div className="text-center uppercase">
      <h1 className="text-cyan-300 text-3xl md:text-4xl mb-7">Course I Learn</h1>
      <h3 className="text-2xl mt-4 text-white">Web design</h3>
      <h3 className="text-2xl mt-4 text-white">Web development</h3>
      <h3 className="text-2xl mt-4 text-white">UI/UX design</h3>
    </div>
  </motion.div>

  {/* Skills Heading */}
  <span className="text-center text-3xl my-10 text-cyan-300 exam ">My Skills</span>

  {/* Skills Grid */}
  <motion.div  initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}  
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center exam  ">
    {/* Card */}
    <div className="example    border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src="css-icon.png" className="h-32 mx-auto p-4" alt="CSS" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">CSS</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src="html-icon.png" className="h-32 mx-auto p-4" alt="HTML" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">HTML</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src="js.png" className="h-32 mx-auto p-4" alt="React" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">REACT</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src="tailwind-css-icon.png" className="h-32 mx-auto p-4" alt="Tailwind" />
      <h2 className="mb-6 py-5 text-2xl md:text-3xl text-center text-white">TAILWIND</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src="bootstrap-5-logo-icon.png" className="h-32 mx-auto p-4" alt="Bootstrap" />
      <h2 className="mb-6 py-5 text-[20px] sm:text-3xl text-center text-white">BOOTSTRAP</h2>
    </div>

    <div className="border-2 hover:bg-cyan-500 border-blue-400 rounded-3xl w-full h-fit transform scale-100 hover:scale-110 transition-all duration-300">
      <img src="react.png" className="h-32 mx-auto p-4" alt="JavaScript" />
      <h2 className="mb-6 py-5 text-[20px] sm:text-3xl text-center text-white">JAVASCRIPT</h2>
    </div>
  </motion.div>
</section>

    </div>
  )
}

export default Project
