import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Main = () => {
  return (
    <div className="main">
      <div className="main_texts">
        <h2>Artistas populares</h2>
        <a className="main_link" href="/">
          Mostrar tudo
        </a>
      </div>
      <FontAwesomeIcon icon={faCirclePlay} />
    </div>
  );
};
export default Main;
