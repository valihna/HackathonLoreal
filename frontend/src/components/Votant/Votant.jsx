import React from "react";

function Votant() {
  return (
    <div className="Inscription">
      <form className="Inscriptionform">
        <input
          className="classinput"
          type="text"
          name="text"
          placeholder="NOM"
          required
        />
        <input
          className="classinput"
          type="text"
          name="text"
          placeholder="PRENOM"
          required
        />
        <input
          className="classinput"
          type="text"
          name="text"
          placeholder="MAIL"
          required
        />
        <input
          className="classinput"
          type="text"
          name="text"
          placeholder="MOT DE PASSE"
          required
        />
        <input
          className="classinput"
          type="text"
          name="text"
          placeholder="CONFIRMATION MOT DE PASSE"
          required
        />
        <div className="containbutsubmit">
          <button type="submit" className="classbut">
            ENVOYER
          </button>
        </div>
      </form>
    </div>
  );
}

export default Votant;
