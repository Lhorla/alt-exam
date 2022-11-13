import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader"
import Repo from "../pages/Repo";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(10);

  const totalProjects = projects.length;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const response = await fetch("https://api.github.com/users/lhorla/repos")
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="projects-container">

      <h1 className="projects-heading">My Projects</h1>

      <div className="projects">
        <Repo projects={currentProjects} loading={loading} />
      </div>
      
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={totalProjects}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loading={loading}
        className="pagination"
      />
    </div>
  );
}

export default Projects;
