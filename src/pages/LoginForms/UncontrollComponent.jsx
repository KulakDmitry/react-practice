import React, { useRef, useState } from "react";

export default function UncontrollComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  const handleChangeLogin = () => {
    setLogin(loginInputRef.current.value);
  };

  const handleChangePassword = () => {
    setPassword(passwordInputRef.current.value);
  };

  return (
    <div className="text-center">
      <div>
        <input
          className="border-2"
          type="text"
          placeholder="login"
          ref={loginInputRef}
          onChange={handleChangeLogin}
        />
        <input
          className="border-2"
          type="text"
          placeholder="password"
          ref={passwordInputRef}
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <p>Login : {login}</p>
        <p>Password :{password}</p>
      </div>
    </div>
  );
}
