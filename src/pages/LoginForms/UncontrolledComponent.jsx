import React, { useRef, useState } from "react";

export default function UncontrolledComponent() {
  const [validLogin, setIsValidLogin] = useState(true);
  const [validPassword, setIsValidPassword] = useState(true);

  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  const handleChangeLogin = () => {
    const login = loginInputRef.current.value;
    setIsValidLogin(true);
    if (!login.length || login.length > 15) {
      setIsValidLogin(false);
    }
  };

  const handleChangePassword = () => {
    const password = passwordInputRef.current.value;
    setIsValidPassword(true);
    if (!password.length || password.length > 15) {
      setIsValidPassword(false);
    }
  };

  return (
    <div className="text-center">
      <div className="items-center">
        <form>
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
              type="password"
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
          <button
            className="m-2 p-2 hover:bg-gray-400 rounded-md bg-gray-300 disabled:opacity-50 disabled:bg-gray-300"
            disabled={!validLogin || !validPassword}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
