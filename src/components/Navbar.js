import React, { useState } from "react";
import "../styles/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Navbar(prop) {

  const [toggleText, setToggleText] = useState("Dark Mode")

  return (
    <div className={prop.isToggleProp ? "nav-dark" : "nav"}>
      <h3 className="navheader">Where in the world?</h3>
      <div className="navdiv" onClick={() => {
        if (!prop.isToggleProp) {
          prop.setIsToggleProp(true)
          setToggleText("Light Mode")
        } else {
          prop.setIsToggleProp(false)
          setToggleText("Dark Mode")
        }
      }}>
        <FontAwesomeIcon icon={faMoon} className="fontAwesome"/>
        <h4 className="moontext">{toggleText}</h4>
      </div>
    </div>
  )
}