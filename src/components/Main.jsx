import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* ItensList de Artitas */}
      <ItemList title="Artistas" items = {5} />

      {/* ItensList de Musicas */}
      <ItemList title="Musicas" items = {10}/>
    </div>
  );
};
export default Main;
