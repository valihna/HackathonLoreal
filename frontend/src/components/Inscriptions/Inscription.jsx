import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/formulaire.jpg";
import "./Inscription.css";

function Inscription() {
  const [image, setImage] = useState();
  const handleUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("image", image);

    try {
      const file = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/candidat`,
        form,
        { headers: { "Content Type": "multipart/form-data" } }
      );
      console.info(file);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <img className="concept_img" src={logo} alt="L'Oréal" />
      <div className="Inscription">
        <form onSubmit={handleUpload} className="Inscriptionform">
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
            placeholder="AGE"
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
            placeholder="REGION"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="ADRESSE SALON"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="MOTS DE PASSE"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="CONFIRMATION MOTS DE PASSE"
            required
          />
          <input
            className="classtextarea"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setImage(e.target.files[0])}
            name="textarea"
            placeholder="TA PHOTOGRAPHIE"
            required
          />
          <div className="containbutsubmit">
            <button type="submit" className="classbut">
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
