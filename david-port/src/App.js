import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Header";
import Projects from "./components/Project";
import Resume from "./components/About";
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
