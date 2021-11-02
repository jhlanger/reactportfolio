import React from "react";
import headshotImg from "../assets/images/headshot.png"

function About() {
  return (
    <div className="about pb-215">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={headshotImg}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light text-light">About</h1>
            <p className = "text-warning">
              Hello, My name is Jon Langerman, and I am a full stack developer! I am based out of Phoenix and currently work at Arizona State University. <br></br><br></br>

              I have a diverse set of skills ranging from HTML, CSS, Javascript and going all the way to MySQL, Node, Express and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
