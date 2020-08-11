import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import Filtersec from "./components/Filtersec";
import Card from "./components/Card";
import Details from "./components/Details";
import { Switch, Route } from "react-router-dom";
import "./styles/grid.scss";

export default function App() {

  // Navbar component
  const [isToggle, setIsToggle] = useState(false);

  // Searchbox component
  const [query, setQuery] = useState("")
  const [countries, setCountries] = useState([]);
  const [filteredState, setFilteredState] = useState(false)

  function fetchQuery(e) {
    setQuery(e.target.value)
    setFilteredState(true)
  }

  // Filtersec component
  const [isDisplay, setDisplay] = useState(false)
  const [continent, setContinent] = useState("Sam")
  const [regionDisplay, setRegionDisplay] = useState("Filter by Region")

  function handleClick() {
    setDisplay(true)
  }

  function handleFilter(e) {
    e.preventDefault()
    setContinent(e.target.id)
    setRegionDisplay(e.target.id)
    setIsExpectedRegion(true)
    setDisplay(false)
  }

  // Details Component
  const [detailCountry, setDetailCountry] = useState("");
  const [isBorder, setIsBorder] = useState("");
  
 
  // Card component
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isExpectedRegion, setIsExpectedRegion] = useState(false);
  
  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch("https://restcountries.eu/rest/v2/all");
        const result = await res.json();
        setIsLoaded(true)
        setCountries(result)
      } catch (error) {
        setIsLoaded(true)
        setError(error);
      }
    }
    getCountries();
  }, []);

  // Dark Mode
  const styles = {
    backgroundColor: isToggle ? "hsl(207, 26%, 17%)" : null,
    color: isToggle ? "#fff" : null
  }

  return (
    <div style={styles}>
      <Navbar 
        setIsToggleProp={setIsToggle}
        isToggleProp={isToggle}
      />
      <Switch>
        <Route path="/country">
          <Details
            detailCountryProp={detailCountry}
            countriesProp={countries}
            isToggleProp={isToggle}
            isBorderProp={isBorder}
            setIsBorderProp={setIsBorder}
          />
        </Route>
        <Route path="/">
          <div className="grid-container">
            <Searchbox 
              fetchQueryFunction={fetchQuery}
              queryProp={query}
              setQueryProp={setQuery}
              isToggleProp={isToggle}
            />
            <Filtersec 
              handleClickFunction={handleClick}
              isDisplayProp={isDisplay}
              setDisplayProp={setDisplay}
              continentProp={continent}
              setContinentProp={setContinent}
              handleFilterFunction={handleFilter}
              regionDisplayProp={regionDisplay}
              isToggleProp={isToggle}
            />
          </div>
          <Card 
            countriesProp={countries}
            setCountriesProp={setCountries}
            isLoadedProp={isLoaded}
            setIsLoadedProp={setIsLoaded}
            errorProp={error}
            setErrorProp={setError}
            continentProp={continent}
            isExpectedRegionProp={isExpectedRegion}
            filteredStateProp={filteredState}
            queryProp={query}
            setDetailCountryProp={setDetailCountry}
            isToggleProp={isToggle}
            isBorderProp={isBorder}
          />
        </Route>
      </Switch>
    </div>
  );
}


