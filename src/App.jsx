import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";


import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" >
          <Route index element={<Projects />} />
          <Route path=":projectID" element={<ProjectDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
