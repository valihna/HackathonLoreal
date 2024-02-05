import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/formulaire.jpg";
import "./Inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    region: "",
    adresse_salon: "",
    photo: "",
    photo2: "",
    email: "",
    password: "",
    selectionne: 0,
  });

  const handleInputChange = (event) => {
    setFormData((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/candidats`,
        formData
      );

      if (response.data) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
      }
    } catch (error) {
      const errorconnexion = document.querySelector(".errorconnexion");
      errorconnexion.style.display = "block";
      setFormData(formData);
    }
  };

  return (
    <div>
      <img className="concept_img" src={logo} alt="L'Oréal" />
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Vos informations ont bien été enregistrées, merci de votre
          participation.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Vos informations n'ont pas été enregistrées.
        </p>
      </div>
      <div className="Inscription">
        <form onSubmit={handleUpload} className="Inscriptionform">
          <input
            className="classinput"
            type="text"
            name="nom"
            placeholder="NOM"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="prenom"
            placeholder="PRENOM"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="age"
            placeholder="AGE"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="email"
            name="email"
            placeholder="MAIL"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="region"
            placeholder="REGION"
            value={formData.region}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="adresse_salon"
            placeholder="ADRESSE SALON"
            value={formData.adresse_salon}
            onChange={handleInputChange}
            required
          />
          <input
            className="classinput"
            type="text"
            name="password"
            placeholder="MOTS DE PASSE"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            className="classtextarea"
            type="text"
            name="photo"
            placeholder="TA PHOTOGRAPHIE"
            value={formData.photo}
            onChange={handleInputChange}
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
