import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
const Modern = () => {
    const [activeTab, setActiveTab] = useState("react");

  const reactProjects = [
    {
      title: "Weather App",
      desc: "React + API based weather search app.",
      img: "/weather.png",
    },
    {
      title: "Calculator App",
      desc: "A clean UI calculator in React.",
      img: "/calc.png",
    },
  ];

  const mernProjects = [
    {
      title: "Auth System",
      desc: "MERN login/signup with JWT.",
      img: "/auth.png",
    },
    {
      title: "Text to Image",
      desc: "MERN + OpenAI image generator.",
      img: "/imggen.png",
    },
  ];

  const tabBtn = (id, label) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 font-semibold transition-all rounded-xl
        ${activeTab === id ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}
      `}
    >
      {label}
    </button>
  );
  return (
    <div>
     
 <div className="w-full max-w-4xl mx-auto p-6">

      {/* Tabs */}
      <div className="flex gap-4 mb-6 justify-center">
        {tabBtn("react", "React Projects")}
        {tabBtn("mern", "MERN Projects")}
      </div>

      {/* Project Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {(activeTab === "react" ? reactProjects : mernProjects).map(
            (p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-200 p-4"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-xl h-40 object-cover w-full"
                />
                <h3 className="text-xl font-bold mt-3">{p.title}</h3>
                <p className="text-gray-600 mt-1">{p.desc}</p>
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>
    </div>

 
    </div>
  )
}

export default Modern
