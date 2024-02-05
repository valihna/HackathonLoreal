import React from "react";
import { useLoaderData } from "react-router-dom";
import CardItemAdmin from "../CardItemAdmin/CardItemAdmin";
import "../DisplayCards/displayCards.css";

function DisplayCardAdmin({ basePath }) {
  const items = useLoaderData();

  return (
    <div className="DisplayCards">
      {items.map((item) => (
        <div>
          <CardItemAdmin key={item.id} data={item} basePath={basePath} />
          <div className="button">
            <button type="button" className="greenButton">
              Acceptée
            </button>
            <button type="button" className="redButton">
              Refusée
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayCardAdmin;
