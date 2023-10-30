import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../Footer/Footer.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Footer = () => {
  let copyright = String.fromCodePoint(169);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`container-fluid text-dark d-flex align-items-center ${classes.footer}`}
    >
      <div className="container d-flex justify-content-between">
        <div className="pt-1">
          {copyright} Copyright <b>IT Perspectives</b>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: "40px" }}
            onClick={scroll}
          >
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
