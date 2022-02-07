import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return <React.Fragment>
    <div className="row header text-center">
      <div className="col-12 d-flex justify-content-around pt-5 align-items-center">
        <a href="" target="_blank">Project</a>
        <a href="" target="_blank">Shop</a>
        <a href="" target="_blank">Social</a>
        <Link to="#">Team</Link>
      </div>
    </div>
  </React.Fragment>
}

export default Header;
