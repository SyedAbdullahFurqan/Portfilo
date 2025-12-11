import React from 'react'

import { motion } from "framer-motion";

import "./home.css"
import { Link } from 'react-router-dom';
import movie from "../assets/movies.png"
import e from "../assets/Screenshot (134).png"
import tic from "../assets/tick.png"
import coff from "../assets/coffe.png"
import calc from "../assets/calutor.png"
import port from "../assets/portfoli.png"
import quiz from "../assets/quiz.png"
import todo from "../assets/todo.png"
import mood from "../assets/moodi.png"
import Video from './Video';
import { FaReact } from "react-icons/fa";
import nodjes from "../assets/nodejs.png"
import tailwind from "../assets/tailwind-css-icon.png"
import react from "../assets/js.png"
import js from "../assets/react.png"
import express from "../assets/nextjs-icon.png"
import css from "../assets/css-icon.png"
import html from "../assets/html-icon.png"

function Home() {

  return (



    
    
  < div className='bg-gray-700 '>
  
   









<section className='  '>

<h1 className='text-center text-3xl pt-4 uppercase font-extrabold font-sans text-cyan-300'>Our project</h1>
<div className='flex items-center w-full justify-center gap-4 py-4 mt-6 border-t-2 border-b-2 text-white'>
  <img src={react} alt="React" className='w-10 h-12 object-contain ' />
  
  <h1 className=' text-[17px] sm:text-2xl md:text-3xl uppercase text-center'> Reactjs , </h1>
  
  <h1 className='text-[17px] sm:text-2xl md:text-3xl uppercase text-center'>  Tailwind css</h1>
  
  <img src={tailwind} alt="Tailwind" className='w-10 h-12 object-contain' />
</div>
<div className="grid  md:grid-cols-3 sm:grid-cols-2 text-white grid-cols-1  gap-4 mx-5">


    
    <div className="mx-5 my-5 border-2 border-gray-600 p-5 rounded-3xl">
        <img src={todo} className="w-70 md:w-90 sm:w-80 rounded-3xl  m-auto h-48 " alt="Quiz App" />
      <h2 className="mt-3 text-2xl">Website Name: Todo App</h2>
      <h2 className="my-3 text-[19px]">Skills : React,Tailwind</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
 <Link  to="https://syedabdullahfurqan.github.io/Todo-App/" target="_blank"><button className='uppercase rounded-4xl w-full m-auto text-center p-3 mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
   <div className="mx-5 my-5 border-2 p-5   border-gray-600 rounded-3xl">
        <img src={movie} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3  text-2xl">Website Name: Movie Website</h2>
      <h2 className="my-3 text-[19px]">Skills : React,Tailwind</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
 <Link  to="https://movie-website-furqan.netlify.app/" target="_blank"><button className='uppercase rounded-4xl w-full m-auto text-center  p-3 mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
   <div className="mx-5 my-5 border-2 p-5 border-gray-600 rounded-3xl">
        <img src={e} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3 text-2xl">Website Name: E-commerce</h2>
      <h2 className="my-3 text-[19px]">Skills: React,Tailwind</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
       <Link  to="https://e-commerce-furqan.netlify.app/" target="_blank"><button className='uppercase w-full m-auto text-center rounded-4xl p-3 mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
 


 
</div>
</section>







<section className='  text-white'>

<div className='flex items-center w-full justify-center gap-4 py-4 border-t-2 border-b-2'>
  <img src={nodjes} alt="React" className='w-10 h-12 object-contain' />
  
  <h1 className='text-[17px] sm:text-2xl md:text-3xl uppercase text-center'> MERN ,</h1>
    
  <img src={express} alt="Tailwind" className='w-10 h-12 object-contain' />
  <h1 className='text-[17px] sm:text-2xl md:text-3xl uppercase text-center'> Next.js</h1>

</div>
<div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mx-5 box">


  
    <div className="mx-5 my-5 border-2 border-gray-600 p-5 rounded-3xl">
         <Video/>
       

     
       
         </div>
   <div className="mx-5 my-5 border-2 p-5   border-gray-600 rounded-3xl">
        <img src={mood} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3  text-2xl">Website Name: Mood App</h2>
      <h2 className="my-3 text-[19px]">Skills: Nextjs</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
        <Link  to="https://mood-app-gold.vercel.app/" target="_blank"><button className='uppercase rounded-4xl p-3 w-full m-auto text-center mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
  
  
 
</div>
</section>










<section className='  text-white'>


<div className='flex items-center w-full justify-center gap-4 py-4 border-t-2 border-b-2'>
  <img src={html} alt="React" className='w-10 h-12 object-contain' />
  
  <h1 className='text-[17px] sm:text-2xl md:text-3xl uppercase text-center'>html ,</h1>
   <img src={css} alt="Tailwind" className='w-10 h-12 object-contain' />
  <h1 className=' text-[17px] sm:text-2xl md:text-3xl uppercase text-center'> css ,</h1>
    <img src={js} alt="Tailwind" className='w-10 h-12 object-contain' />
    <h1 className='text-[17px] sm:text-2xl md:text-3xl uppercase text-center'> js</h1>
    
 
</div>
<div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 mx-5 box">


  
    <div className="mx-5 my-5 border-2 border-gray-600 p-5 rounded-3xl">
        <img src={calc} className="w-70 md:w-90 sm:w-80 rounded-3xl  m-auto h-48 " alt="Quiz App" />
      <h2 className="mt-3 text-2xl">Website Name: Calculator</h2>
      <h2 className="my-3 text-[19px]">Skills: HTML, CSS, JS</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
       <Link  to="https://syedabdullahfurqan.github.io/Calcutor/ " target="_blank"><button className='uppercase rounded-4xl p-3 w-full m-auto text-center mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
   <div className="mx-5 my-5 border-2 p-5   border-gray-600 rounded-3xl">
        <img src={quiz} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3  text-2xl">Website Name: Quiz App</h2>
      <h2 className="my-3 text-[19px]">Skills: HTML, CSS, JS</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
        <Link  to="http://syedabdullahfurqan.github.io/Quiz-App/" target="_blank"><button className='uppercase rounded-4xl p-3 w-full m-auto text-center mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
   <div className="mx-5 my-5 border-2 p-5 border-gray-600 rounded-3xl">
        <img src={coff} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3 text-2xl">Website Name: Coffe Shop</h2>
      <h2 className="my-3 text-[19px]">Skills: HTML, CSS, JS</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
       <Link  to="https://syedabdullahfurqan.github.io/coffe-shop" target="_blank"><button className='uppercase rounded-4xl p-3 w-full m-auto text-center mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
   
   <div className="mx-5 my-5 border-2 p-5 border-gray-600 rounded-3xl">
        <img src={tic} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3 text-2xl">Website Name: TIC Toe</h2>
      <h2 className="my-3 text-[19px]">Skills: HTML, CSS, JS</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
       <Link  to="https://syedabdullahfurqan.github.io/Tic-toe/" target="_blank"><button className='uppercase rounded-4xl p-3 mt-4 w-full m-auto text-center cursor-pointer hover:bg-cyan-300  hover:text-black'>see my project</button></Link> 
    </div>
   
  <div className="mx-5 my-5 border-2 p-5 border-gray-600 rounded-3xl">
        <img src={port} className="w-70 md:w-90 sm:w-80  rounded-3xl m-auto h-48" alt="Quiz App" />
      <h2 className="mt-3 text-2xl">Website Name: Portfolio</h2>
      <h2 className="my-3 text-[19px]">Skills: HTML, CSS, JS</h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
       <Link  to="https://syedabdullahfurqan.github.io/Porfolio/" target="_blank"><button className='uppercase rounded-4xl w-full m-auto text-center p-3 mt-4 cursor-pointer hover:bg-cyan-300 hover:text-black'>see my project</button></Link> 
    </div>
   
 
</div>
</section>




</div>
  )
}

export default Home
