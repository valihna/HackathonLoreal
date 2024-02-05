import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
import App from "./App";
import Histoire from "./pages/histoire/Histoire";
import Voter from "./pages/voter/Voter";
import Login from "./pages/login/Login";
import PageInscription from "./pages/PageInscription";
import Home from "./pages/home/Home";
import CardsId from "./pages/CardsId/CardsId";
import Admin from "./pages/Admin/Admin";
import Eva from "./components/Eva/Eva";
import CardsAll from "./pages/CardsAll/CardsAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/histoire",
        element: <Histoire />,
      },
      {
        path: "/guest",
        element: <Eva />,
      },
      {
        path: "/candidates",
        element: <CardsAll />,
        loader: () => {
          return connexion
            .get("/retenu")
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/candidates/:id",
        element: <CardsId />,
        loader: ({ params }) => {
          return connexion
            .get(`/Candidats/${params.id}`)
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/voter",
        element: <Voter />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <PageInscription />,
      },
      {
        path: "/admin",
        element: <Admin />,
        loader: () => {
          return connexion
            .get("/Candidats")
            .then((response) => response.data)
            .catch((err) => console.error(err));
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
