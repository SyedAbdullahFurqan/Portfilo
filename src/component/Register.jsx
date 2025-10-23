

import React, { useEffect, useState } from 'react'
// import { useAuth } from './content/Auth'

export const Register = () => {

  const [Inputs, setInputs] = useState({name:'',email:"",message:""})
// const {Nama,Res}=useAuth()

function handle(e) {
    setInputs({
  ...Inputs,
  [e.target.name]:e.target.value
})
}


const [True, setTrue] = useState(true);

function contacts(d) {
    d.preventDefault()
    
const contactsd=  fetch("http://localhost:3000/contact",
  
  {
    
    method:"post",

    headers:{

"Content-Type":"application/json",

    },

    body:JSON.stringify(Inputs)
  }


)

contactsd.then(response => response.json()).then( data => console.log(data))
  



setInputs({
    name:"",
    email:"",
    message:""
})
    console.log(Inputs)
}


  // ✅ Run only when Res changes
  // useEffect(() => {
  //   if (True && Res) {
  //     setInputs({
  //       name: Res.msg.name,
  //       email: Res.msg.email,
  //       message: ""
  //     });
  //     setTrue(false); // prevent resetting every time
  //   }
  // }, [Res, True]);

  return (
    <div>



    <div className='grid grid-cols-2 w-full h-full'>
   






<div className='bg-gray-900 w-full h-screen flex flex-col justify-center items-center text-center'>

<h4 className=' text-3xl font-medium font-sans sm:uppercase lowercase my-4 text-white'>Furqna Technaical</h4>
<h3 className=' font-medium font-sans sm:uppercase lowercase my-4  text-white '> To Sumbit OF Any News <span>Contact Us</span> </h3>
<ul className='list-decimal text-[15px] sm:text-[20px] text-white '>

  <li>
    Bookmark your readings.
  </li>

    <li>
    Comment in your favorite post
  </li>
    <li>
  Register in your upcoming contests.
  </li>
</ul>
</div>



<div className=' bg-gray-600 w-full h-screen justify-center '>

<div className=' text-center mt-10'>
<h1>Contact us </h1>

<h3 className='mt-10'>Welcome back. Please enter your details.</h3>
</div>

<form  onSubmit={contacts} className='px-6 py-5 text-center  '>


<div className='my-3 md:w-90 text-amber-50'>Name</div>
<input type="text" name='name' className='md:w-70  sm:w-60 w-50' value={Inputs.name } onChange={handle} />

<div className='my-3 md:w-90 text-amber-50'>Email</div>
<input type="email" name='email' className='md:w-70  sm:w-60 w-50' value={Inputs.email } onChange={handle}/>


<div className='my-3 md:w-90  text-amber-50'>Message</div>

<textarea name="message" id="" rows={5} cols={30} className='bg-white w-50' value={Inputs.message} onChange={handle}></textarea>
<br />
<button type="submit" className='md:w-70 sm:w-60 w-50'>Contact</button>
</form>

</div>
</div>
    </div>
  )
}
