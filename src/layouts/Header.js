import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return <React.Fragment>
    <div className="row header text-center">
      <div className="col-6 white-bg d-flex justify-content-around pt-2 align-items-center">
        <a href="https://forms.gle/YhoSVNM5so6b2ZfZA" target="_blank">Presale<br /> WhiteList</a>
        <a href="/AJR_WHITEPAPER OFFICIAL.pdf" target="_blank">Whitepaper</a>
      </div>
      <div className="col-6 black-bg d-flex justify-content-around pt-2 align-items-center">
        <a href="/AJR ROADMAP.pdf" target="_blank">Roadmap</a>
        <Link to="#"><span className="text-line-through">AJR Stone</span><br />(SOON)</Link>
      </div>
    </div>
  </React.Fragment>
}

export default Header;