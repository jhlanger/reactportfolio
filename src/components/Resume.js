import React from "react";
import Resumepdf from "../assets/files/resume.pdf"

function Resume() {
  return (
    <div className="resume pb-455">
      <div className="container">
        <div className="row align-items-center my-5">
         
          <div className="col-lg-5">
            <h1 className="font-weight-light text-light">Resume</h1>
            <p className = "text-warning">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              
            </p>

            <button type="button" className="btn btn-light"><a className = "text-dark" href= {Resumepdf} download="Resume.pdf">Download my Resume</a></button>

            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;