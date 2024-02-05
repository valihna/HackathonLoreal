import axios from "axios";
import React, { useState } from "react";
import logo from "../../assets/formulaire.jpg";
import "./Inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    mail: "",
    region: "",
    adresseSalon: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        form.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/candidats`,
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.info(response);
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
            type="text"
            name="mail"
            placeholder="MAIL"
            value={formData.mail}
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
            name="adresseSalon"
            placeholder="ADRESSE SALON"
            value={formData.adresseSalon}
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
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            name="image"
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
