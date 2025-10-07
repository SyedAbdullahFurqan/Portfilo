import React from 'react'
import "./home.css"
 export  const Myself = () => {
  return (
    <div className='bg-gray-700'>




<div className='w-full h-100 bg-cover bg-center flex items-center justify-center  bg-gray-600 bg-blend-hard-light '  style={{ backgroundImage: "url('/furqan.jpg')" ,backgroundPosition:"center"}}>

<h1 className='text-center items-center text-4xl text-white'>Who Is Furqan</h1>
</div>


<div className='w-full h-screen  p-5 text-center bg-gray-700 flex flex-col justify-center items-center'>





<div className=' mt-4 text-white '>
  <h1 className=' text-center text-4xl overflow-hidden my-5 text-white'>About Me</h1>
<p className=' mx-5'>ThapaTechnical is all about Website Development, Technical, Tips and Tricks, Designs Principle and Programming videos in the Hindi Language.

</p>
<br />
<p className=' mx-4 text-center'> At Thapa Technical, we cover a wide range of website development languages such as HTML, CSS, JavaScript, React, Node, Express, MongoDB, Next.js, and more. <br />  We aim to make these topics easily accessible and understandable for everyone, regardless of your level of experience.

</p>
<br />



</div>
<div className='my-7 py-4'>


  <img src="furqan.jpg" className=' m-auto w-1/2  '  />
</div>
</div>


    </div>
  )
}


