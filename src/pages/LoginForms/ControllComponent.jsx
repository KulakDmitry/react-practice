import React, { useState } from "react";

export default function UncontrollComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassrord = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="text-center">
      <div>
        <input
          className="border-2"
          type="text"
          placeholder="login"
          value={login}
          onChange={handleChangeLogin}
        />

        <input
          className="border-2"
          type="text"
          placeholder="password"
          value={password}
          onChange={handleChangePassrord}
        />
      </div>
      <div>
        <p>Login : {login}</p>
        <p>Password :{password}</p>
      </div>
    </div>
  );
}
