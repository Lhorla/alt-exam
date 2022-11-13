import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineStar } from "react-icons/ai"
import Loader from "../components/Loader"

function Repos({ projects, loading }) {

  if (loading) {
    return <Loader />
  }

  return projects.map((project, index) => (
    <div className="repo" key={project.id}>
      <div className="project-name">
        <h1>{project.name}</h1>
      </div>
      <div className="project-visibility">
        <p className="visible">{project.visibility}</p>
        <p className="star"><AiOutlineStar /><span>{project.stargazers_count}</span></p>
      </div>
      <Link to={`/projects/${project.name}`} key={index} style={{ textDecoration: 'none', color: 'black' }}>
        <button className="project-btn">
          View
        </button>
      </Link>
    </div>
))
  
}

export default Repos