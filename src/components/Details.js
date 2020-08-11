import React, { useState } from "react"
import "../styles/details.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Details(prop) {

  const styles = {
    backgroundColor: prop.isToggleProp ? "hsl(209, 23%, 22%)" : null,
    boxShadow: prop.isToggleProp ? "none" : null,
    color: prop.isToggleProp ? "#fff" : null 
  }

  return (
    <div className="details-div">
      <Link to="/" style={{width: "fit-content"}}>
        <button className="details-back-button" style={styles}>
          <FontAwesomeIcon icon={faArrowLeft} className="font-awesome" style={styles}/>
          Back
        </button>
      </Link>
      {prop.countriesProp.map(country => {
        if (prop.detailCountryProp === country.name) {
          return (
            <div className="detail-container">
              <div>
                <img className="details-image" src={country.flag} alt="avatar"></img>
              </div>
              <div>
                <div>
                  <h3>{country.name}</h3>
                </div>
                <div>
                  <h5 className="details-description">Native Name: {country.nativeName}</h5>
                  <h5 className="details-description">Population: {country.population}</h5>
                  <h5 className="details-description">Region: {country.region}</h5>
                  <h5 className="details-description">Sub Region: {country.subregion}</h5>
                  <h5 className="details-description">Capital: {country.capital}</h5>
                </div>
                <div className="details-info-div">
                  <h5 className="details-more-info">Top Level Domain: {country.topLevelDomain[0]}</h5>
                  <h5 className="details-more-info">Currencies: {country.currencies[0].name}</h5>
                  <h5 className="details-more-info">Languages: 
                    {country.languages.map(language => {
                      return (<span> {language.name}, </span>)
                    })}
                  </h5>
                </div>
                <div className="border-countries-div">
                  <h5>Border Countries:</h5>
                  {country.borders.map(border => {
                    return (
                      <Link to={`/country/${country.name}`}>
                        <button onClick={(border) => {
                          prop.setIsBorderProp(border)
                            if (border === country.alpha3Code) {
                              return country
                            }
                          }} className="border-countries" style={styles}>{border}
                        </button>
                      </Link>)
                  })}
                </div>
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}