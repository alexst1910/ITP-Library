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
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
const MainNavigation = () => {
  const { cartAmount } = useContext(ShoppingCartContext);
  const amount = cartAmount();
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-light justify-content-between">
          <NavLink to="" className="navbar-brand d-flex align-items-center">
            <FontAwesomeIcon icon={faBook} className={classes.logo} />
            <h2 className={classes.title}>ITP Library</h2>
          </NavLink>

          <a
            className="btn ms-auto d-block border-0 d-lg-none p-0"
            role="button"
            data-bs-toggle="collapse"
            href="#navbarToggleExternalContent3"
            aria-controls="navbarToggleExternalContent3"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars} className={classes.hamburger} />
          </a>

          <ul className="nav justify-content-end d-none d-lg-inline-flex">
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faHouse} className={classes.icon} />
                <span className={classes.item}>HOME</span>
              </NavLink>
            </li>

            <li className="nav-item">
              {amount > 0 && (
                <span
                  className={`position-absolute top-10 translate-middle badge rounded-pill bg-danger ${classes.badge}`}
                >
                  {amount}
                </span>
              )}

              <NavLink to="/cart" className="nav-link">
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
        <div className="collapse" id="navbarToggleExternalContent3">
          <div className="bg-light shadow-3 p-4 d-flex flex-column d-lg-none">
            <button className="btn  m-0">
              <NavLink to="" className="nav-link">
                <FontAwesomeIcon icon={faHouse} className={classes.icon} />
                <span className={classes.item}>HOME</span>
              </NavLink>
            </button>
            <button className="btn  btn-block  m-0">
              <NavLink to="" className="nav-link">
                {" "}
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={classes.icon}
                />
                <span className={classes.item}>SHOPPING CART</span>
              </NavLink>
            </button>
            <button className="btn  btn-block m-0">
              <NavLink to="" className="nav-link">
                {" "}
                <FontAwesomeIcon icon={faTruckFast} className={classes.icon} />
                <span className={classes.item}>ORDERS</span>
              </NavLink>
            </button>
            <button className="btn  btn-block m-0">
              <NavLink to="" className="nav-link">
                {" "}
                <FontAwesomeIcon icon={faUser} className={classes.icon} />
                <span className={classes.item}>LOGIN</span>
              </NavLink>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainNavigation;
