import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import '../../src/App.css'
import David from '../assets/me.jpg';


function Layout() {
    const [expandHeader, setExpandHeader] = useState(false)
    return (
        <div className="header" id ={expandHeader ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => {setExpandHeader((prev) => !prev);
                }}>
                    <ReorderIcon /> 
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contactMe"> Contact </Link>
                <Link to="/resume"> Resume </Link>
            </div>
            <div className='home'>
        <div className='aboutMe'>
          <h2> Hello, My name is David</h2>
          <div className='uponload'>
            <p>Aspiring software developer with greatness in mind.</p>
          </div>
        </div>
        <div className='desc'>
          <h1> About Me</h1>
          <span> Hello World! My name is David Garcia a student at the University of Denver Coding Bootcamp.
            With a burning desire to learn to understand software I embarked on a grand carrer change. Over the past six months, I've worked on multiple projects as well as learning languages such as Javascript,Mysql,Node.js and React!
            When I'm not coding, I enjoy going on hikes and listening to music.</span>
        </div>
      </div>
      <div className='picture'>
        <h1> </h1>
        <img src={David} alt ="" />
      </div>
        </div>
    )
}

export default Layout;