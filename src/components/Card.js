import React from "react";
import "../styles/card.scss";
import Carddata from "./Carddata";


export default function Card(prop) {

  const styles = {
    backgroundColor: prop.isToggleProp ? "hsl(207, 26%, 17%)" : null,
    color: prop.isToggleProp ? "#fff" : null
  }

  let setChildDetailCountryProp = prop.setDetailCountryProp;
   
  let filteredCountries = prop.countriesProp.filter(country => {
    return country.name.toLowerCase().includes(prop.queryProp.toLowerCase()) 
  })

  if (prop.errorProp) {
  return <div>Error: {prop.errorProp.message}</div>
  } else if (!prop.isLoadedProp) {
    return <div className="loading"><p>Loading...</p></div>
  }else {
    return(
      <div className="cardgrid" style={styles}>
        {prop.isExpectedRegionProp ? (
          filteredCountries.map(country => {
            if (prop.continentProp === country.region) {
              return (
                <Carddata 
                  countryFlag={country.flag}
                  countryName={country.name}
                  countryPopulation={country.population}
                  countryRegion={country.region}
                  countryCapital={country.capital}
                  setParentDetailCountryProp={setChildDetailCountryProp}
                  isToggleChildProp={prop.isToggleProp}
                  isBorderChildProp={prop.isBorderProp}
                />
              )
            }
            return null
          })
        ) : (
          filteredCountries.map(country => {
            return (
              <Carddata 
                countryFlag={country.flag}
                countryName={country.name}
                countryPopulation={country.population}
                countryRegion={country.region}
                countryCapital={country.capital}
                setParentDetailCountryProp={setChildDetailCountryProp}
                isToggleChildProp={prop.isToggleProp}
                isBorderChildProp={prop.isBorderProp}
              />
            )
          })
        )}
      </div>
    )
  }
}



