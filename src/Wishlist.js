import React, { useEffect, useState } from "react";
function Wishlist() {
  const [favpoke, setfavpoke] = useState([]);
  function handlefav() {
    let favpokearr;
    if (localStorage.getItem("favpokearr")) {
      favpokearr = JSON.parse(localStorage.getItem("favpokearr"));
    } else {
      favpokearr = [];
    }
    setfavpoke(favpokearr);
  }
  function handleremove(id) {
    let favpokearr;
    if (localStorage.getItem("favpokearr")) {
      favpokearr = JSON.parse(localStorage.getItem("favpokearr"));
    } else {
      favpokearr = [];
    }
    let newfavpokearr = favpokearr.filter((edata) => edata.id !== id);
    localStorage.setItem("favpokearr", JSON.stringify(newfavpokearr));
    setfavpoke(newfavpokearr);
  }
  useEffect(() => {
    handlefav();
  }, []);
  return (
    <div className="wishlistparent">
      {favpoke.length !== 0 ? (
        favpoke.map((e, ind) => (
          <div key={ind} className={`thumb-container ${e.typename}`}>
            <div className="number">
              <small>#{e.id}</small>
            </div>
            <img src={e.image} alt="pic"></img>
            <div className="detail-wrapper">
              <h3>{e.pokename}</h3>
              <small>
                Type: <span>{e.typename}</span>
              </small>

              <button className="pokeinfo" onClick={() => handleremove(e.id)}>
                <b>Remove from Favourites</b>
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ color: "white" }}>
          <strong>No Favourite Pokemons</strong>
        </h1>
      )}
    </div>
  );
}
export default Wishlist;
