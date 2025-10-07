import React, { useContext,createContext} from 'react'
import "./About"



function Sample({url,title,img,des,sources,time}) {
  
const UserContext = createContext("dsa");
const  use=useContext(UserContext)
  return (

    
    <>
 
      <div>

<h1>{use}</h1>
   <img src={img} alt="" />
        <div>
<h5 >{title}</h5>
      <p >{des}</p>
      <a href={url} target="_blank"  className='btn btn-primary' >Readmore</a>
  
         
        </div>
      </div>
<div>
<h6>{sources}</h6>
<p>{time}</p>
</div>



    </>
  )
}

export default Sample
