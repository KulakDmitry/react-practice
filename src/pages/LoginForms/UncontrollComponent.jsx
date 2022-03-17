import React, { useRef, useState } from "react";

export default function UncontrollComponent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setIsValidLogin] = useState(true);
  const [validPassword, setIsValidPassword] = useState(true);

  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  const handleChangeLogin = () => {
    if (
      !loginInputRef.current.value.length ||
      loginInputRef.current.value.length > 15
    ) {
      setIsValidLogin(false);
      setLogin(loginInputRef.current.value);
      return;
    }
    setLogin(loginInputRef.current.value);

    setIsValidLogin(true);
  };

  const handleChangePassword = () => {
    if (
      !passwordInputRef.current.value.length ||
      passwordInputRef.current.value.length > 15
    ) {
      setIsValidPassword(false);
      setPassword(passwordInputRef.current.value);
      return;
    }
    setPassword(passwordInputRef.current.value);

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
            ref={loginInputRef}
            onChange={handleChangeLogin}
          />
          {validLogin ? null : (
            <span className="block text-red-600">
              Login should have more than 0 and less than 15
            </span>
          )}
        </div>
        <div>
          <input
            className="border-2"
            type="text"
            placeholder="password"
            ref={passwordInputRef}
            onChange={handleChangePassword}
          />
          {validPassword ? null : (
            <span className="block text-red-600">
              Password should have more than 0 and less than 15
            </span>
          )}
        </div>
      </div>
      <div>
        <p>Login : {login}</p>
        <p>Password :{password}</p>
      </div>
    </div>
  );
}
