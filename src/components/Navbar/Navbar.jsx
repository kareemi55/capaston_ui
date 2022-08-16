import React from "react";
import "./Navbar.css";
import NavMob from "../NavMob/NavMob";
import NavDeskTop from "../NavDeskTop/NavDeskTop";
function Navbar() {
  return (
    <>
    <div className="d-lg-block d-none">
    <NavDeskTop />
    </div>

     <div className="d-lg-none">
     <NavMob />
    </div>   
    </>
    
   
  );
}

export default Navbar;