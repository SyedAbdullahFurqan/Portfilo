import {  useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './component/Navbar' 
import { createBrowserRouter , RouterProvider } from "react-router-dom";
  import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Sample from './component/Sample'
import Nested from './component/Nested'
import { Register } from './component/Register'

import Login from './component/Login'
import { Logout } from './component/Logout';
import Project from './component/Project';
import {Myself} from './component/Myself';

function App() {
const [alert, setalert] = useState("");
  const [count, setCount] = useState("furan")
const [changes, setchanges] = useState(false);
function hand(e) {
  setCount(e.target.value)
}

function upper() {
let news=count.toUpperCase()

setCount(news)
setchanges(true)
 setTimeout(() => {
  setchanges(null)
 }, 2000);
setalert("convet into uppercase")
}
function lower() {
 let news=count.toLowerCase()
setCount(news)
setchanges(true)
 setTimeout(() => {
  setchanges(null)
 }, 2000);
setalert("convet into Lowercase")
}
function clear(s) {
 setCount("")
 setchanges(true)
  
 setalert("clearr")
 setTimeout(() => {
  setchanges(null)
 }, 2000);
}
function copy(params) {
  let copied=document.getElementById("area")
copied.select()
navigator.clipboard.writeText(copied.value)
setchanges(true)
 setTimeout(() => {
  setchanges(null)
 }, 2000);
 setalert("copy")
}





const router= createBrowserRouter([
    {path:"/",

     element: <> <Navbar />  <Project/> </> 
      },  
   {path:"/About",

     element: <> <Navbar /> <About size={5} cate={"entertainment"} /> </> 
      },
      
      {path:"/About/edu",

     element: <> <Navbar /><About size={5} cate={"general"} /> </> 
      },
  {path:"/About/buss",

     element: <> <Navbar /> <About size={5} cate={"technology"} /> </> 
      },
  
   {path:"/reigster",

     element: <> <Navbar /><Contact/> </> 
      },

   {path:"/Skill",

     element: <> <Navbar /> <Home/>  </> 
      },


  {path:"/Self",

     element: <> <Navbar /> <Myself/>  </> 
      },


{path:"/Contact",


element: <> <Navbar /> <Register/>  </> 
},

      
{path:"/login",


element: <> <Navbar /> <Login/> </> 
},
      
{path:"/logout",


element: <> <Navbar /> <Logout/> </> 
}
])



const use={name:"Monkey"};

  return (
    
    <>
   

  
  <RouterProvider router={router}/> 
{/* 

{ changes && 
<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Succes <p>{alert}</p></strong>

</div>
  }
<textarea name="" id="area" rows={20}cols={30} value={count} onChange={hand}></textarea>
    <button onClick={upper}>upper</button>
       <button onClick={lower}>lower</button> 
          <button onClick={clear}>clear</button> 
         <button onClick={copy}>copyy</button> 
   
   <p>{count.length } character</p>
   <p>{0.03*count.length } min read </p>
   
       <h1>YOUR TEXT SUMMARRY</h1>

<Home  />

 

<Nested/>
 
 
       
       




      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
