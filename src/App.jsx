import {  useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './component/Navbar' 
import { createBrowserRouter , RouterProvider } from "react-router-dom";
  import About from './component/About'
// import Contact from './component/Contact'
import Home from './component/Home'
import Sample from './component/Sample'
import Nested from './component/Nested'
import { Register } from './component/Register'

// import Login from './component/Login'
// import { Logout } from './component/Logout';
import Project from './component/Project';
import {Myself} from './component/Myself';

function App() {


const router= createBrowserRouter([
    {path:"/",

     element: <> <Navbar />  <Project/> </> 
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
