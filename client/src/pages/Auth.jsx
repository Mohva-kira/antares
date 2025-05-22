import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    if (params.action === "register") {
      setShowLogin(false);
    } else if (params.action === "login") {
      setShowLogin(true);
    }
  }, [params.action]);
  return (
    <div>
      {showLogin ? (
        <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <Register showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default Auth;
