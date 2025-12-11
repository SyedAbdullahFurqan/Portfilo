
import img from "../public/5124556.jpg"
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
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
  

toast.success("information is send")

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
    <>
      <section  id="Contact" className='w-full min-h-screen bg-cyan-300 ' >

<div className="mx-auto px-4 py-17">
  <h1 className='text-3xl capitalize font-bold font-serif text-center pb-6'>Get in <span className="text-blue-600">Touch</span> </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

    {/* LEFT SIDE */}
    <div className="text-center flex flex-col items-center justify-center space-y-6 mb-10 md:mb-0">
      <h1 className="text-4xl font-bold text-gray-900">
        Let’s Work Together
      </h1>

      <p className="text-gray-600 text-lg">
        Feel free to reach out for collaborations or Have a project in mind or want to collaborate? Let's talk!
      </p>

      <img
        src={img}
       
        className="rounded-3xl shadow-lg w-full h-80 object-cover"
      />
    </div>

    {/* RIGHT SIDE */}
<div className="w-full h-fit bg-gray-800 rounded-3xl">
  <div className="text-center">
    <h1 className="pt-4 text-cyan-500 text-2xl">Contact Me</h1>
    <h3 className="mt-4 text-white text-sm opacity-80">
 Please enter your details.
    </h3>
  </div>

  <form onSubmit={contacts} className="px-6 py-5 text-center">

    {/* Name */}
     {/* GRID FOR NAME + EMAIL */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

      {/* Name */}
      <div>
  
        <input
          type="text"
          name="name"
          placeholder="👤 Enter your name"
          className="w-full bg-gray-600  placeholder-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
          required
          value={Inputs.name}
          onChange={handle}
        />
      </div>

      {/* Email */}
      <div>

        <input
          type="email"
          name="email"
          placeholder="📧 Enter your email"
          className="w-full bg-gray-600  placeholder-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
          required
          value={Inputs.email}
          onChange={handle}
        />
      </div>

    </div>
    {/* Message */}
    
    <div className="relative flex justify-center mt-5">
      <textarea
        name="message"
        placeholder="💬 Write your message here..."
        rows={6}
        className="w-full bg-gray-600  text-white placeholder-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-500"
        required
        value={Inputs.message}
        onChange={handle}
      ></textarea>
    </div>

    <button
      type="submit"
      className=" w-60 sm:w-100 cursor-pointer bg-cyan-700 text-white p-3 mt-6 rounded-xl hover:bg-cyan-600 transition"
    >
     Sumbit
    </button>
  </form>
</div>


  </div>


{/* 
<div className='bg-gray-800 max-w-full'>
<h1 className='bg-gray-800 uppercase text-center p-4 text-2xl'>get in <span className='text-blue-700   '>Touch</span></h1>


    


<h4 className=' text-3xl font-medium font-sans sm:uppercase lowercase my-4 text-white'>Furqna Technaical</h4>
<h3 className=' font-medium font-sans sm:uppercase lowercase my-4  text-white '> To Sumbit OF Any News <span>Contact Us</span> </h3>

</div>



<div className=' bg-gray-900 w-full   '>

<div className=' text-center '>
<h1 className='pt-4 text-white'>Contact us </h1>

<h3 className='mt-10 text-white'>Welcome back. Please enter your details.</h3>
</div>

<form  onSubmit={contacts} className='px-6 py-5 text-center  '>


<div className='my-3 md:w-90 text-amber-50'>Name</div>
<input type="text" name='name' className='md:w-70  sm:w-60 w-50' required value={Inputs.name } onChange={handle} />

<div className='my-3 md:w-90 text-amber-50'>Email</div>
<input type="email" name='email' className='md:w-70  sm:w-60 w-50' required  value={Inputs.email } onChange={handle}/>


<div className='my-3 md:w-90  text-amber-50'>Message</div>

<textarea name="message" id="" required  rows={5} cols={30} className='bg-white w-55' value={Inputs.message} onChange={handle}></textarea>
<br />
<button type="submit" className='md:w-70 sm:w-60 w-50 cursor-pointer'>Contact</button>
</form>

</div> */}</div>
</section>
</>
 
  )
}
