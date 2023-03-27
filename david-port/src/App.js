// Imports all components acts as home base for page

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import David from './assets/me.jpg';
import Home from "./components/Header";
import Projects from "./components/Project";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/projects" element ={<Projects />}/>
          <Route path="/resume" element ={<Resume />}/>
          <Route path="/contactMe" element ={<ContactMe />}/>
        </Routes>
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
        <Footer />
      </Router>   
    </div>
  );
}

export default App;
