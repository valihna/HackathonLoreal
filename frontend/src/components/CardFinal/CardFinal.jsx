import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../CardItem/carditem.css";

function CardFinal() {
  const data = useLoaderData();
  return (
    <div className="CardItem">
      <Link className="CardItem_card" to={`${data.id}`}>
        <img
          className="CardItem_img"
          src={data.photo}
          alt="photographie"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="CardItem_text">
        <h2 className="CardItem_h2">candidate numéro {data.id}</h2>
        <h2 className="CardItem_h2">{data.name}</h2>
        <h2 className="CardItem_h2">{data.prenom}</h2>
        <h2 className="CardItem_h2">{data.age}</h2>
        <div className="button">
          <button type="button" className="greenButton">
            Acceptée
          </button>
          <button type="button" className="redButton">
            Refusée
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardFinal;
