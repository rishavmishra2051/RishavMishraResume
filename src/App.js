import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Project from "./component/Project.jsx";
import Resume from "./component/Resume.jsx";
import Tools from "./component/Tools.jsx";
import Contact from "./component/Contact.jsx";
import Home from "./component/Home.jsx";
import AcademicRecord from "./component/AcademicRecord.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/academicrecord" element={<AcademicRecord />}/>
            <Route exact path="/project" element={<Project />}/>
            <Route exact path="/resume" element={<Resume />}/>
            <Route exact path="/tools" element={<Tools />}/>
            <Route exact path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </Router>
             
    </div>
  );
}

export default App;
