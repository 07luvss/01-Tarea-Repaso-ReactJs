import React from "react";
import { MenuItem } from "../navigation/MenuItem";
import { menuData } from "../../data/Menu";


export const NavBar = ({onClickLogin}) => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">

        <MenuItem menuData={menuData}/>

        <form className="d-flex" role="search">
          <div className="text-end">

            <button onClick={onClickLogin} type="button" className="btn btn-outline-light me-2">
              Login
            </button>

            <button type="button" className="btn btn-info">
              Sign-up
            </button>
          </div>
        </form>

      </div>
    </nav>
  );
}
