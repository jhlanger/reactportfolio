import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            <a rel="noreferrer" href="https://www.linkedin.com/in/jhlanger"  target="_blank" className="fa fa-linkedin"> </a>
            <a  rel="noreferrer" href="https://www.github.com/jhlanger"  target="_blank"className="fa fa-github"> </a>
            <a rel="noreferrer" href="https://www.facebook.com/jonhenry.langerman"  target="_blank" className="fa fa-facebook"> </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;