import React, { useState } from "react";

import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
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
