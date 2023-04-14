import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


const Nav = () => {
  return ( 

  <nav className="nav">
        <div>
          <NavLink to="/dialogs">Dialogs2</NavLink>
        </div>
        <div>
          <NavLink to="/post">Post88</NavLink>
        </div>
        <div>
          <NavLink to="/kot"> KOT</NavLink>
        </div>
        <div>
          <NavLink to="/pios"> PIOS</NavLink>
        </div>
      </nav>
     
       

  )
};

export default Nav;
