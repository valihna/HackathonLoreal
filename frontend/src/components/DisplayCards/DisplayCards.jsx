import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import "./displayCards.css";

function DisplayCards({ basePath }) {
  const items = useLoaderData();
  const [votedItems, setVotedItems] = useState({});

  const handleVote = (itemId) => {
    setVotedItems((prevVotedItems) => {
      const updatedVotes = { ...prevVotedItems };

      if (updatedVotes[itemId]) {
        updatedVotes[itemId] = (updatedVotes[itemId] || 1) - 1;

        if (updatedVotes[itemId] === 0) {
          delete updatedVotes[itemId];
        }
      } else {
        updatedVotes[itemId] = 1;
      }

      return updatedVotes;
    });
  };

  return (
    <div className="DisplayCards">
      {items.map((item) => (
        <div key={item.id}>
          <CardItem data={item} basePath={basePath} />
          <div className="affichage_vote">
            <button
              type="button"
              className="button_vote"
              onClick={() => handleVote(item.id)}
              style={{
                color: votedItems[item.id] ? "red" : "#fae7c0",
                fontWeight: votedItems[item.id] ? "bold" : "normal",
              }}
            >
              <div className="coeur_vote">&#10084;</div>
            </button>
            <p className="text_vote">
              Nombre de votes : {votedItems[item.id] || 0}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayCards;
