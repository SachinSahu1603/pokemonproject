import { Routes, Route } from "react-router-dom";
import Allpokemon from "./Allpokemon";
import Wishlist from "./Wishlist";
import "./App.css"; // Link to your CSS file

// import { Routes, Route } from "react-router-dom";
//https://ej2.syncfusion.com/react/documentation/multi-select/checkbox

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Allpokemon />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </>
  );
}
export default App;
