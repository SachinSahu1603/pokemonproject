import React from "react";
function Overlay({ setisoverlayopen, typename, data, image, id, pokename }) {
  return (
    <div className={`overlay ${typename}`}>
      <button className={`overlay-id number ${typename}`}>#{id}</button>
      <div className="left-overlay">
        <img className="left-image" src={image} alt="Pokeimage" />
        <h3 className="left-name">{pokename}</h3>
      </div>
      <div className={`right-overlay ${typename}`}>
        <table className="table1">
          <tbody>
            <tr>
              <td>Weight: {data.weight}</td>
            </tr>
            <tr>
              <td>Height: {data.height}</td>
            </tr>
          </tbody>
        </table>
        <table className="table2">
          <tbody>
            <tr>
              <td>Stat1: {data.stats[0].stat.name}</td>
            </tr>
            <tr>
              <td>Stat2: {data.stats[1].stat.name}</td>
            </tr>
            <tr>
              <td>Stat3: {data.stats[2].stat.name}</td>
            </tr>
            <tr>
              <td>Stat4: {data.stats[3].stat.name}</td>
            </tr>
            <tr>
              <td>Stat5: {data.stats[4].stat.name}</td>
            </tr>
            <tr>
              <td>Stat6: {data.stats[5].stat.name}</td>
            </tr>
          </tbody>
        </table>
        <table className="table3">
          <tbody>
            <tr>
              <td>Bs1: {data.stats[0].base_stat}</td>
            </tr>
            <tr>
              <td>Bs2: {data.stats[1].base_stat}</td>
            </tr>
            <tr>
              <td>Bs3: {data.stats[2].base_stat}</td>
            </tr>
            <tr>
              <td>Bs4: {data.stats[3].base_stat}</td>
            </tr>
            <tr>
              <td>Bs5: {data.stats[4].base_stat}</td>
            </tr>
            <tr>
              <td>Bs6: {data.stats[5].base_stat}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className={`close-button ${typename}`}
        onClick={() => {
          setisoverlayopen(false);
        }}>
        X
      </button>
    </div>
  );
}
export default Overlay;
