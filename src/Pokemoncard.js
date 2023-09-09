import React from "react";
import { useState } from "react";
import Overlay from "./Overlay";

let types = [
  "water",
  "fire",
  "grass",
  "bug",
  "electric",
  "ghost",
  "normal",
  "fairy",
  "poison",
  "ground",
];
function Pokemoncard({ data, favpokeid, setfavpokeid }) {
  let image = data.sprites.other.dream_world.front_default;
  let typename = data.types[0].type.name;
  let id = data.id;
  let pokename = data.forms[0].name;
  const [isoverlayopen, setisoverlayopen] = useState(false);

  function handleoverlay() {
    if (!isoverlayopen) {
      setisoverlayopen(true);
    } else {
      setisoverlayopen(false);
    }
  }
  function handlefavourite(typename, pokename, id, image) {
    setfavpokeid(() => [...favpokeid, id]);
    let favpokedetails = [];
    let favpokearr;
    if (localStorage.getItem("favpokearr")) {
      favpokearr = JSON.parse(localStorage.getItem("favpokearr"));
    } else {
      favpokearr = [];
    }

    favpokedetails = { typename, pokename, id, image };
    favpokearr.push(favpokedetails);
    localStorage.setItem("favpokearr", JSON.stringify(favpokearr));
  }

  return (
    <>
      <div
        className={`thumb-container ${
          types.includes(typename) ? typename : "electric"
        }`}>
        <div className="number">
          <small>#{id}</small>
        </div>
        <img src={image} alt="pic"></img>
        <div className="detail-wrapper">
          <h3>{pokename}</h3>
          <small>
            Type: <span>{typename}</span>
          </small>

          <button
            className="pokeinfo"
            onClick={() => {
              handleoverlay();
            }}>
            <b>Show Details</b>
          </button>
          <button
            className="pokeinfo"
            onClick={() => handlefavourite(typename, pokename, id, image)}>
            <strong>{favpokeid.includes(id) ? "Added" : "Favourite"}</strong>
          </button>
        </div>
      </div>
      {isoverlayopen && (
        <Overlay
          setisoverlayopen={setisoverlayopen}
          typename={typename}
          data={data}
          image={image}
          id={id}
          pokename={pokename}
        />
      )}
    </>
  );
}
export default Pokemoncard;
