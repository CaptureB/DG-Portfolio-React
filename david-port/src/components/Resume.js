import Header from "./Header";
import React from "react";
import ResumePic from '../assets/ResumePicPort.JPG'


function Resume() {
   return (
    <div>
        <Header></Header>
        <div className="resume">
            <div className="resumedesc">
                <h2>
                    Below you will find my most updated resume with my previous work expeirence and 
                    my contact information as well. Happy Hacking!
                </h2>
                <div className="picture">
                    <h1>
                        <img src= {ResumePic} alt=""/>                       
                    </h1>

                </div>
            </div>
        </div>
    </div>
   ) 
}

export default Resume;