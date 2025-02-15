import React from "react";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItens";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link" >
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem
            // id={currentObj.id}
            // name={currentObj.name}
            // image={currentObj.image}
            // banner={currentObj.banner}
            idPath={idPath}
             {...currentObj} key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
