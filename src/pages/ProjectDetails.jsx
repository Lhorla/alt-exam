import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { AiOutlineStar, AiOutlineFork, AiOutlineLink } from "react-icons/ai"

function ProjectDetails() {
    const [projectDetails, setProjectDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const projectName = useParams();

    const getProjectDetails = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/repos/lhorla/${projectName.projectID}`
            );
            const data = await response.json();
            if (response.status === 200) {
                setProjectDetails(data);
                setLoading(false);
            } else {
                setNotFound(true);
                setLoading(false);
            }
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };


    useEffect(() => {
        getProjectDetails();
    }, []);

    return (
        <div>
            <HelmetProvider>
                <title>{projectDetails.name}</title>
                <meta name="description" content={projectDetails.description} />
                <meta name="keywords" content="react, github api, projects, altschool africa," />
            </HelmetProvider>
            {loading ? (
                <Loader />
            ) : notFound ? (
                <NotFound />
            ) : (
                <div className="prodetails-container">
                    <h1>{projectDetails.name}</h1>
                    <p>
                        {projectDetails.desccription ? projectDetails.description : "No description added"}
                    </p>
                    <p>Language: {projectDetails.language}</p>
                    <p>Created at: {new Date (projectDetails.created_at).toDateString()}</p>
                    <p>Updated at: {new Date (projectDetails.updated_at).toDateString()}</p>
                    <p>
                        <AiOutlineStar /> {projectDetails.stargazers_count}
                    </p>
                    <p>
                        <AiOutlineFork /> {projectDetails.forks_count}
                    </p>
                    <p>{projectDetails.default_branch}</p>
                    <a href={projectDetails.homepage} target="_blank" rel="noreferrer">
                        <AiOutlineLink /> Live Link 
                    </a>
                    <a href={projectDetails.html_url} target="_blank" rel="noreferrer">
                        <AiOutlineLink /> Source Code
                    </a>
                    <p>
                        Project size: {projectDetails.size} KB
                    </p>
                    <div>
                        {projectDetails.topics ? (
                            projectDetails.topics.map((topic) => (
                                <span key={topic}>{topic}</span>
                            ))
                        ) : (
                            <span>No topics added</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
  
export default ProjectDetails;
