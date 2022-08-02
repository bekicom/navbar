import React from 'react'
import { About } from './About'
import { Navbar } from './Navbar'
import {Routes,Route}   from 'react-router-dom'
import { useNavigate } from "react-router-dom";



export  function Main() {

  const navigate = useNavigate()
   

  return (
    <div>
      {/* <div>
        <button onClick={() => navigate("/navbar")}>navbar</button>
        <button onClick={() => navigate("/about")}>about</button>
      </div> */}

      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </div>
  );
}
