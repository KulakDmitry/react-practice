import React, { useState } from "react";

export default function UncontrollComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setIsValidLogin] = useState(true);
  const [validPassword, setIsValidPassword] = useState(true);

  const handleChangeLogin = (event) => {
    if (!event.target.value.length || event.target.value.length > 15) {
      setIsValidLogin(false);
      setLogin(event.target.value);
      return;
    }
    setLogin(event.target.value);

    setIsValidLogin(true);
  };

  const handleChangePassrord = (event) => {
    if (!event.target.value.length || event.target.value.length > 15) {
      setIsValidPassword(false);
      setPassword(event.target.value);
      return;
    }
    setPassword(event.target.value);

    setIsValidPassword(true);
  };

  return (
    <div className="text-center">
      <div className="items-center">
        <div>
          <input
            className="border-2"
            type="text"
            placeholder="login"
            value={login}
            onChange={handleChangeLogin}
          />
          {validLogin ? null : (
            <span className="block text-red-600">
              login should have more than 0 and less than 15
            </span>
          )}
        </div>

        <div>
          <input
            className="border-2"
            type="text"
            placeholder="password"
            value={password}
            onChange={handleChangePassrord}
          />
          {validPassword ? null : (
            <span className="block text-red-600">
              Password should have more than 0 and less than 15
            </span>
          )}
        </div>
      </div>
      <div>
        <p>Login :{login}</p>

        <p>Password :{password}</p>
      </div>
    </div>
  );
}
