import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
//import Pagination from "../components/Pagination"

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch("https://api.github.com/users/lhorla/repos");
    const data = await response.json();
    setProjects(data);
    setLoading(false);
    console.log(data);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="projects-container">
            {projects.map((project) => {
              const { id, name, description, html_url } = project;
              return (
                <div className="project-card" key={id}>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <a href={html_url} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
