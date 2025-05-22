import { registerLicense } from "@syncfusion/ej2-base";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import ArticlesPage from "./pages/ArticlePage.jsx";
import Auth from "./pages/Auth.jsx";
import Community from "./pages/Community.jsx";
import CvDetails from "./pages/CvDetails.jsx";
import Home from "./pages/Home.jsx";
import Interview from "./pages/Interview.jsx";
import Offers from "./pages/Offers.jsx";
import Profiles from "./pages/Profiles.jsx";
import Reports from "./pages/Reports";
import Users from "./pages/Users.jsx";
import { store } from "./redux/Store.js";
// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXZccHRQRGFZUUV2V0o="
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/jobs",
    element: <ProtectedRoute element={<Offers />} />,
  },
  {
    path: "/meets",
    element: <ProtectedRoute element={<Interview />} />,
  },
  {
    path: "/cvs",
    element: <ProtectedRoute element={<Profiles />} />,
  },
  {
    path: "/community",
    element: <ProtectedRoute element={<Community />} />,
  },
  {
    path: "/cv/:id",
    element: <ProtectedRoute element={<CvDetails />} />,
  },
  {
    path: "/article/:id",
    element: <ProtectedRoute element={<ArticlesPage />} />,
  },
  {
    path: "/rapports",
    element: <ProtectedRoute element={<Reports />} />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/utilisateurs",
    element: <ProtectedRoute element={<Users />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
