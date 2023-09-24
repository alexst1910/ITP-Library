//import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from "react-router-dom";
import classNamees from "../Navigation/MainNavigation.module.css";
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
            <FontAwesomeIcon icon={faBook} className={classNamees.logo} />
            <h2 className={classNamees.title}>ITP Library</h2>
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
            <FontAwesomeIcon icon={faBars} className={classNamees.hamburger} />
          </button>

          <ul className="nav justify-content-end d-none d-lg-inline-flex">
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faHouse} className={classNamees.icon} />
                <span className={classNamees.item}>HOME</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={classNamees.icon}
                />
                <span className={classNamees.item}>SHOPPING CART</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className={classNamees.icon}
                />
                <span className={classNamees.item}>ORDERS</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faUser} className={classNamees.icon} />
                <span className={classNamees.item}>LOGIN</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent3">
          <div className="bg-light shadow-3 p-4">
            <button className="btn btn-link btn-block border-bottom m-0">
              Link 1
            </button>
            <button className="btn btn-link btn-block border-bottom m-0">
              Link 2
            </button>
            <button className="btn btn-link btn-block m-0">Link 3</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainNavigation;
