import React from 'react'
import "./home.css"
 export  const Myself = () => {
  return (
    <div className='bg-gray-700'>



<div
  className="w-full min-h-[60vh] sm:min-h-[80vh] bg-cover bg-center flex items-center justify-center bg-gray-600 bg-blend-hard-light"
  style={{ backgroundImage: "url('/furqan.jpg')" }}
>
  <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
    Who Is Furqan
  </h1>
</div>

{/* About Section */}
<div className="w-full min-h-screen p-4 sm:p-8 bg-gray-700 flex flex-col justify-center items-center text-center text-white">
  <div className="max-w-4xl">
    <h1 className="text-3xl sm:text-4xl font-bold my-5">About Me</h1>

    <p className="text-sm sm:text-base md:text-lg mx-2 sm:mx-5 leading-relaxed">
      ThapaTechnical is all about Website Development, Technical, Tips and Tricks, Design Principles, and Programming videos in the Hindi Language.
    </p>

    <br />

    <p className="text-sm sm:text-base md:text-lg mx-2 sm:mx-4 leading-relaxed">
      At Thapa Technical, we cover a wide range of website development languages such as HTML, CSS, JavaScript, React, Node, Express, MongoDB, Next.js, and more. <br />
      We aim to make these topics easily accessible and understandable for everyone, regardless of your level of experience.
    </p>

    <div className="my-8 flex justify-center">
      <img
        src="furqan.jpg"
        alt="Furqan"
        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg shadow-cyan-500/50"
      />
    </div>
  </div>
</div>
    </div>
  )
}


