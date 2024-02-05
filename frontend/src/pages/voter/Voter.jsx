import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginVoter from "../../components/loginVoter/LoginVoter";
import "./Voter.css";

const user = {
  nom: "",
  prenom: "",
  age: "",
  region: "",
  email: "",
  password: "",
};

function Voter() {
  const [infosVotant, setInfosVotant] = useState(user);
  const navigate = useNavigate();

  const handleCredentials = (event) => {
    if (event.target.name === "age") {
      setInfosVotant((previousState) => ({
        ...previousState,
        [event.target.name]: +event.target.value,
      }));
    } else {
      setInfosVotant((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const votant = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/votant`,
        infosVotant
      );
      if (votant.data) {
        const validation = document.querySelector(".validation");
        validation.style.display = "block";
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      const errorconnexion = document.querySelector(".errorconnexion");
      errorconnexion.style.display = "block";
      setInfosVotant(user);
    }
  };

  return (
    <>
      <div className="contain-validation-errorconnexion">
        <p style={{ display: "none" }} className="validation">
          Vos informations ont bien été enregistrées, vous allez être redirigé.
        </p>
        <p style={{ display: "none" }} className="errorconnexion">
          Vos informations n'ont pas été enregistrées.
        </p>
      </div>
      <div className="contain-formVotant">
        <h2>Merci de vous inscrire pour accéder aux votes</h2>
        <div className="form-container">
          <form onSubmit={handleRequest} className="form-login">
            <div className="contain-input">
              <LoginVoter
                type="text"
                name="nom"
                required
                onChange={handleCredentials}
                value={infosVotant.nom}
                placeholder="Votre nom"
              />
            </div>
            <div className="contain-input">
              <LoginVoter
                type="text"
                name="prenom"
                required
                onChange={handleCredentials}
                value={infosVotant.prenom}
                placeholder="Votre prenom"
              />
            </div>
            <div className="contain-input">
              <LoginVoter
                type="text"
                name="age"
                required
                onChange={handleCredentials}
                value={infosVotant.age}
                placeholder="Votre âge"
              />
            </div>
            <div className="contain-input">
              <LoginVoter
                type="text"
                name="region"
                required
                onChange={handleCredentials}
                value={infosVotant.region}
                placeholder="Votre région"
              />
            </div>
            <div className="contain-input">
              <LoginVoter
                type="email"
                name="email"
                required
                onChange={handleCredentials}
                value={infosVotant.email}
                placeholder="Votre email"
              />
            </div>
            <div className="contain-input">
              <LoginVoter
                type="password"
                name="password"
                required
                onChange={handleCredentials}
                value={infosVotant.password}
                placeholder="Votre mot de passe"
              />
            </div>
            <div className="contain-submit-login">
              <button type="submit" className="button-submit">
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Voter;
