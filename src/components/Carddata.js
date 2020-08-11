import React from "react";
import { Link } from "react-router-dom";

export default function Carddata(prop) {

  const styles = {
    backgroundColor: prop.isToggleChildProp ? "hsl(209, 23%, 22%)" : null,
    color: prop.isToggleChildProp ? "white" : null,
    boxShadow: prop.isToggleChildProp ? "none" : null
  }

  let country = "country"
  if (prop.isBorderChildProp.length) {
    country = "border"
  }

  return(
    <div className="countrydiv" style={styles} onClick={() => prop.setParentDetailCountryProp(prop.countryName)}>
      <Link className="link" to={`/${country}/${prop.countryName}`}>
        <div className="imagediv">
          <img className="cardimage" src={prop.countryFlag} alt="avatar.img" />
        </div>
        <div className="description">
          <div className="descriptionheader">
            <h3 style={styles}>{prop.countryName}</h3>
          </div>
          <div className="countryprops">
            <h4 style={styles} className="descriptiontexts">Population: {prop.countryPopulation}</h4>
            <h4 style={styles} className="descriptiontexts">Region: {prop.countryRegion}</h4>
            <h4 style={styles} className="descriptiontexts">Capital: {prop.countryCapital}</h4>
          </div>
        </div>
      </Link>
    </div>
  )
}