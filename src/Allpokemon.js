import React, { useState, useEffect } from "react";
import Pokemoncard from "./Pokemoncard";
import "./App.css"; // Link to your CSS file
import { useNavigate } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

function Allpokemon() {
  const navi = useNavigate();
  const [allpokemon, setallpokemon] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  let [favpokeid, setfavpokeid] = useState([]);
  const [url, seturl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  async function getdetailedinfo(result) {
    for (let e of result) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${e.name}`);
      const data = await res.json();
      setallpokemon((curr) => [...curr, data]);
      setOriginalData((curr) => [...curr, data]);
    }
  }

  // To handle the filter functionality when checkbox is checked
  function checkboxdata(val, isChecked) {
    let filters = [];
    if (isChecked) {
      filters = [...selectedFilters, val];
      setSelectedFilters(filters);
    } else {
      filters = selectedFilters.filter((x) => {
        return x !== val;
      });
      setSelectedFilters(filters);
    }

    let newarr = originalData;
    if (filters.length > 0) {
      newarr = newarr.filter((i) => {
        return filters.includes(i.types[0].type.name);
      });
    }
    setallpokemon(newarr);
  }

  // To handle the sort functionality when sorting is applied

  function sortthedata(val) {
    //SORTING IN ASCENDING

    if (val === "nameasc") {
      console.log("Ascending");
      let newarr = [...originalData];
      console.log(newarr);
      const sortedData = newarr.sort((a, b) =>
        a.forms[0].name.localeCompare(b.forms[0].name)
      );
      setallpokemon([...sortedData]);

      //SORTING IN DESCENDING
    } else if (val === "namedes") {
      console.log("descending");
      let newarr = [...originalData];
      console.log(newarr);
      const sortedData = newarr.sort((a, b) =>
        b.forms[0].name.localeCompare(a.forms[0].name)
      );
      setallpokemon([...sortedData]);
    } else {
      setallpokemon([...originalData]);
    }
  }

  async function getallpokemon() {
    let rs = await fetch(url);
    const data = await rs.json();
    seturl(data.next);
    getdetailedinfo(data.results);
  }

  useEffect(() => {
    getallpokemon();
  }, []);
  return (
    <>
      <div id="parent">
        <div id="section">
          <div className="content1">
            <h2>Pokemon</h2>
            <h2>Pokemon</h2>
          </div>
          <div className="content2">
            <h2>Kingdom</h2>
            <h2>Kingdom</h2>
          </div>
        </div>
        <div className="sortingparent">
          <div className="sortingmain">
            <div className="checkboxes">
              Grass
              <input
                type="checkbox"
                value={"grass"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Fire
              <input
                type="checkbox"
                value={"fire"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Water
              <input
                type="checkbox"
                value={"water"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Poison
              <input
                type="checkbox"
                value={"poison"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Normal
              <input
                type="checkbox"
                value={"normal"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Bug
              <input
                type="checkbox"
                value={"bug"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Electric
              <input
                type="checkbox"
                value={"electric"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Ground
              <input
                type="checkbox"
                value={"ground"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
              Fairy
              <input
                type="checkbox"
                value={"fairy"}
                onChange={(e) => checkboxdata(e.target.value, e.target.checked)}
              />
            </div>
            <div className="selectsort">
              <select onChange={(e) => sortthedata(e.target.value)}>
                <option value="id">Id number</option>
                <option value="nameasc">(A-Z)Name</option>
                <option value="namedes">(Z-A)Name</option>
              </select>
            </div>
          </div>
        </div>
        <div className="app-container">
          <div className="pokemon-container">
            <div className="all-container">
              {allpokemon.map((e, idx) => {
                return (
                  <Pokemoncard
                    key={idx}
                    data={e}
                    favpokeid={favpokeid}
                    setfavpokeid={setfavpokeid}
                  />
                );
              })}
            </div>
            <button className="getall" onClick={() => getallpokemon()}>
              Get More Pokemons
            </button>
            <button className="getall" onClick={() => navi("wishlist")}>
              Favorites
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allpokemon;
