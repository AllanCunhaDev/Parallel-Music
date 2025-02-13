import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleItem = () => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src="https://f.i.uol.com.br/fotografia/2014/11/28/461482-970x600-1.jpeg"
            alt="img do arts X"
          />
        </div>
        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>
      <div className="single-item__texts">
          <div className="single-item__2lines">
            <p className="single-item__title">AMO NOITE E DIA</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
    </div>
  );
};
export default SingleItem;
