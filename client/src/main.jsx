import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth.jsx";

import App from "./App.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./index.css";
import Applications from "./pages/Applications.jsx";
import Candidats from "./pages/Candidats";
import Contact from "./pages/Contact.jsx";
import CvDetails from "./pages/CvDetails.jsx";
import EmployerDetails from "./pages/EmployerDetails.jsx";
import Employers from "./pages/Employers.jsx";
import How from "./pages/How.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Offers from "./pages/Offers.jsx";
import { store } from "./redux/Store.js";
import Actualite from "./pages/Actualite.jsx";
import Dao from "./pages/Dao.jsx";
import DaoDetails from "./pages/DaoDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth/:action",
    element: <Auth />,
  },
  {
    path: "/how",
    element: <How />,
  },
  {
    path: "/candidats",
    element: <ProtectedRoute element={<Candidats />} />,
  },
  {
    path: "/cv/:name",
    element: <CvDetails />,
  },
  {
    path: "/employeurs",
    element: <Employers />,
  },
  {
    path: "/employeurs/:name",
    element: <EmployerDetails />,
  },
  {
    path: "/profile/:name",
    element: <ProtectedRoute element={<MyProfile />} />,
  },
  {
    path: "/job/:name",
    element: <JobDetails />,
  },
  {
    path: "/news/:name",
    element: <Actualite />,
  },

  {
    path: "/offres",
    element: <Offers />,
  },
  {
    path: "/candidatures",
    element: <ProtectedRoute element={<Applications />} />,
  },
  {
    path: "/appels-offre",
    element: <ProtectedRoute element={<Dao />} />,
  },
  {
    path: "/appels-offre/:name",
    element: <DaoDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
