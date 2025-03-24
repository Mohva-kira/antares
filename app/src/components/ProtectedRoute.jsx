import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("auth"); // Exemple de vérification d'authentification

  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
