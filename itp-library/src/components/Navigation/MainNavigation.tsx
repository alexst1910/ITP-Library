//import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from "react-router-dom";
import classes from "../Navigation/MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTruckFast,
  faCartShopping,
  faUser,
  faBook,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-light justify-content-between">
          <NavLink to="" className="navbar-brand d-flex align-items-center">
            <FontAwesomeIcon icon={faBook} className={classes.logo} />
            <h2 className={classes.title}>ITP Library</h2>
          </NavLink>
          <button
            className="navbar-toggler ms-auto d-none d-sm-block border-0 d-lg-none"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent3"
            aria-controls="navbarToggleExternalContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className={classes.hamburger} />
          </button>

          <ul className="nav justify-content-end d-none d-lg-inline-flex">
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faHouse} className={classes.icon} />
                <span className={classes.item}>HOME</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={classes.icon}
                />
                <span className={classes.item}>SHOPPING CART</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faTruckFast} className={classes.icon} />
                <span className={classes.item}>ORDERS</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faUser} className={classes.icon} />
                <span className={classes.item}>LOGIN</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
