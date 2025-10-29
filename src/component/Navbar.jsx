import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {

    const [Change, setChange] = useState("");

console.log(Change)


const [file, setImges] = useState("");
const [True, setTrue] = useState(true);
function fileImage(e) {
  const values=      e.target.files[0]
setImges(values)
setTrue(false)
}
console.log(file==true )

console.log(file)

  return (
    < >


        <div className='w-full'> 
        <nav className=' w-full flex items-center justify-around bg-gray-700  fixed top-0 left-0 z-50 '>
            <div>

                <h1 className=''>    <NavLink  to={"/"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Portfolio</NavLink></h1>
          </div>

    <ul className='text-[13px] sm:text-[20px] flex gap-3 mx-5 py-3 '>

       <li> 
    <NavLink  to={"/"}   style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Home</NavLink>
        </li>
{/* <input type="file" name="" id="" value={Change}  onChange={(e)=>setChange(e.target.value)} />
  
  <img src="bags.jpg" alt="" /> */}
    <li>
       <NavLink to={"/Skill"}  style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }>Projects</NavLink >
        </li>

   

   <li>
         <NavLink to={"/Self" }      style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } }  >ABOUTS</NavLink>   

        </li>


        
 <li>
            <NavLink to={"/Contact"} style={({isActive})=>{

return{color:isActive ?"white":"Lightblue",textDecoration:"none"}
        } } >Contact  </NavLink> 
        </li>

{/* {isLogin ? 
(

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

    </ul>
 
</nav>
        </div>
    </>
  )
}

export default Navbar
