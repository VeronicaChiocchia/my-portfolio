import React from 'react'
import './Projects.css'
import { useState, useEffect } from "react";
import ProjectCard from './ProjectCard/ProjectCard'

function Projects() {

    let [projectData, setProjectData] = useState([]);
    console.log(projectData);

    useEffect(() => {
        fetch("/projects.json")
        .then(response => response.json())
        .then((data) => {
            setProjectData(data.projects);
        }).catch((error) => {
          return console.error("There was an error: ", error);
        });
    }, [])


    return (
        <div id='projects' className='container w-screen max-w-full flex items-center gap-6 justify-center flex-col px-6 pt-12 pb-[200px] md:py-10 bg-[#181547]'>
            <h2 className="custom-h2 text-white">Projects</h2>
            <div className='w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-8 items-stretch'>
                {projectData.map((project, index)=> {
                    return <ProjectCard 
                        key={index}
                        image={project.image}
                        link={project.link}
                        sentences={project.sentences}
                        title={project.title}
                        />
                })}
            </div>

        </div>
    )
}

export default Projects;