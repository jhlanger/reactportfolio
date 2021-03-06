import React from "react";

import projectData from "./Project-Data";
import carMartImg from "../assets/images/carmartimage.PNG";
console.log(projectData.header);

function Projects() {
  return (
   
    <div className="row align-items-center my-5 ">

    
      <div className="container">

        <h1 className="font-weight-light text-light">Projects test</h1>
        <div className="d-flex flex-row flex-wrap ">

          {projectData.map((project, index) => {
            return (
              <div className="flip-card mr-5 mb-5">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={project.src} alt="carmart" style={{ width: "300px", height: "200px" }}></img>
                </div>
                <div className="flip-card-back bg-dark">
                  <h1>{project.header}</h1>
                  <p>{project.skills}</p>
                  <a target="_blank" rel="noreferrer" href = {project.deployed}>View Deployed Website</a><br></br>
                  <a target="_blank" rel="noreferrer" href = {project.github}>View on Github</a>
                </div>
              </div>
            </div>
            )
          })}




        </div>
        </div>
      </div>
 
 
  );
}

export default Projects;