import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {

  
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false);



  return (
    < >


<div className="w-full">
      <nav className="w-full flex items-center justify-between bg-gray-700 px-6 py-4 fixed top-0 left-0 z-30">

        {/* Logo */}
        <h1 className="text-white text-xl font-semibold">
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "white" : "lightblue",
              textDecoration: "none",
            })}
          >
           Abdullah Furqan
          </NavLink>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-[14px] sm:text-[18px] gap-8">
          <li>
            <a href="#Home" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              Home
            </a>
          </li>

          <li>
            <a href="#About" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              About
            </a>
          </li>

          <li>
            <a href="#Skills" className="pb-1 border-b-2 border-transparent hover:border-blue-300 transition-all text-cyan-400 hover:text-cyan-300">
              Skills
            </a>
          </li>

          <li>
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

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={handleToggle}>
          {open ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
    <div
  className={`md:hidden bg-gray-800 fixed top-16 left-0 w-full h-full transition-all duration-300 z-[999] shadow-xl ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <a href="#Home" onClick={closeMenu} className="text-cyan-300 hover:text-white">Home</a>
          </li>
          <li>
            <a href="#About" onClick={closeMenu} className="text-cyan-300 hover:text-white">About</a>
          </li>
          <li>
            <a href="#Skills" onClick={closeMenu} className="text-cyan-300 hover:text-white">Skills</a>
          </li>
          <li>
            <a href="#Project" onClick={closeMenu} className="text-cyan-300 hover:text-white">Project</a>
          </li>
          <li>
            <a href="#Contact" onClick={closeMenu} className="text-cyan-300 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </div>
{/* {isLogin ? 
(
 style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }
    <>
    
   
  
<li className='text-white'>{Nama}</li>
    
    <li>  <NavLink to={"/logout"} className={"no-underline"}  style={({isActive})=>{
   
    {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          style={{ width: "100px", marginTop: "10px",height:"70px" }}
        />
      )}


      <input type="file" name="imgs" id=""onChange={fileImage} style={True == true ? {  display: "block"} :     {  display: "none"} } />
     
return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }  > logout</NavLink></li></>
      
      )
 : 
 (

  
   <><li>
                  <NavLink to={"/login"}    style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }> lOGIN</ NavLink>
                </li><li>
                    <NavLink to={"/reigster"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }>Register</NavLink>
                  </li></>
  
  )} */}

  
    </>
  )
}

export default Navbar
