import React from "react";
import Menu from "./containers/Menu";
import "./App.css";
import "./mocks/menClothes";
import ItemsShowcase from './containers/ItemsShowcase';
import { clothesItems } from "./mocks/menClothes";

function App() {
  return (
    <div className="container main">
      <div className="container row">
        <Menu />
      </div>
      <div className="container row">
        <ItemsShowcase items={clothesItems}/>
      </div>
    </div>
  );
}

export default App;
