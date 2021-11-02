import React from "react";
import Resumepdf from "../assets/files/resume.pdf"
import carMartImg from "../assets/images/carmartimage.PNG"
import htmllogo from "../assets/images/htmllogo.png"
import csslogo from "../assets/images/csslogo.png"
import jslogo from "../assets/images/jslogo.png"
import expressjslogo from "../assets/images/expressjslogo.svg"
import nodelogo from "../assets/images/nodelogo.png"
import mysqllogo from "../assets/images/mysqllogo.png"
import reactlogo from "../assets/images/reactlogo.png"
import mernlogo from "../assets/images/mernlogo.png"
import mongodblogo from "../assets/images/mongodblogo.png"

//col-12 col-sm-8 col-md-6 col-lg-4


function Resume() {
  return (
    <div className="resume pb-215">
      <div className="container">
        <div className="row align-items-center my-5">

          <div className="col-lg-5">
            <h1 className="font-weight-light text-light mb-3">My Skills</h1>
            
          </div>

          <section className="text-light d-flex flex-row flex-wrap">

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="">
                <img src={htmllogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">HTML</h3> 
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={csslogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">CSS</h3>
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={jslogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">JavaScript</h3>
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={expressjslogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">Express</h3>
              </div>
             
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={nodelogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">Node</h3>
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={mysqllogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">MySQL</h3>
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={reactlogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">React</h3>
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={mernlogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">MERN</h3>
              </div>
              
            </div>

            <div className="skill-box col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
              <div className="skill-title">
                <div className="imgskill">
                <img src={mongodblogo} className = "imgskill mb-2" alt="carmart" style={{ width: "200px", height: "200px" }}></img>
                </div>
                <h3 className = "text-warning">MongoDB</h3>
              </div>
              
            </div>
            

            

           

          </section>
         
        </div>
        <div className = "resumeBtn mt-3">
          <button type="button" className="btn btn-light"><a className="text-dark" href={Resumepdf} download="Resume.pdf">Download my Resume</a></button>
          </div>
      </div>
    </div>
  );
}

export default Resume;