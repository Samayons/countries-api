import React from "react";
import "../styles/searchbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Searchbox(prop) {

  const styles = {
    backgroundColor: prop.isToggleProp ? "hsl(209, 23%, 22%)" : null,
    boxShadow: prop.isToggleProp ? "none" : null,
    color: prop.isToggleProp ? "#fff" : null 
  }

  return(
    <form className={prop.isToggleProp ? "form-dark" : "form"} style={{backgroundColor: prop.isToggleProp ? "hsl(207, 26%, 17%)" : null}}>
      <FontAwesomeIcon icon={faSearch} className="font-awesome" style={styles}/>
      <input className="countryinput"
        style={styles}
        type="search" 
        onChange={prop.fetchQueryFunction} 
        value={prop.queryProp} 
        placeholder="Search for a country..."
      />
    </form>
  )
}