import "../styles/filtersec.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Filtersec(prop) {

  const styles = {
    backgroundColor: prop.isToggleProp ? "hsl(209, 23%, 22%)" : null,
    color: prop.isToggleProp ? "#fff" : null,
    boxShadow: prop.isToggleProp ? "none" : null
  }

  return (
    <div className="filterregion">
      <button className="filterbutton" 
        style={styles} key="button" 
        onClick={prop.handleClickFunction} 
        type="button">
          {prop.regionDisplayProp}
          <FontAwesomeIcon style={styles} icon={faAngleDown} className="font-awesome" />  
        </button>
      <div className="displayfilter" key="filters" 
        style={{
          visibility: prop.isDisplayProp ? "visible" : "hidden",
          boxShadow: prop.isToggleProp ? "none" : null,
          backgroundColor: prop.isToggleProp ? "hsl(209, 23%, 22%)" : null
        }}
      >
        <a className="filterlink" onClick={prop.handleFilterFunction} href="Africa" id="Africa">Africa</a>
        <a className="filterlink" onClick={prop.handleFilterFunction} href="America" id="Americas">America</a>
        <a className="filterlink" onClick={prop.handleFilterFunction} href="Asia" id="Asia">Asia</a>
        <a className="filterlink" onClick={prop.handleFilterFunction} href="Europe" id="Europe">Europe</a>
        <a className="filterlink" onClick={prop.handleFilterFunction} href="Oceania" id="Oceania">Oceania</a>
      </div>
    </div>
  )
}


