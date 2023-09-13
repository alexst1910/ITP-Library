//import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from "react-router-dom";
import classes from "../Navigation/MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-light justify-content-between">
          <NavLink to="" className="navbar-brand">
            <h2 className={classes.title}>ITP Library</h2>
          </NavLink>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <span className={classes.item}>HOME</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <span className={classes.item}>SHOPPING CART</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="" className="nav-link">
                <span className={classes.item}>ORDERS</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="" className="nav-link">
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
