import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Quan ly sinh vien
        </Link>
        

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Danh sach sinh vien
              </NavLink>
            </li>
           
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Them sinh vien</Link>
      </div>
    </nav>
  );
};

export default Navbar;
