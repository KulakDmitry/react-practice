import React, { useState } from "react";
import { useReducer } from "react";

export default function ControlledComponent() {
  const [state, dispatch] = useReducer(reducer, {
    login: "",
    password: "",
    validLogin: true,
    validPassword: true,
  });

  function reducer(state, action) {
    switch (action.type) {
      case "setLogin":
        return {
          ...state,
          login: action.payload.login,
        };
      case "setPassword": {
        return {
          ...state,
          password: action.payload.password,
        };
      }
      case "setIsValidLogin": {
        return {
          ...state,
          validLogin: action.payload.validLogin,
        };
      }
      case "setIsValidPassword": {
        return {
          ...state,
          validPassword: action.payload.validPassword,
        };
      }
      default: {
        return state;
      }
    }
  }

  const handleChangeLogin = (event) => {
    const login = event.target.value;
    dispatch({ type: "setLogin", payload: { login: login } });
    dispatch({ type: "setIsValidLogin", payload: { validLogin: true } });

    if (!login.length || login.length > 15) {
      dispatch({ type: "setIsValidLogin", payload: { validLogin: false } });
      return;
    }
  };

  const handleChangePassrord = (event) => {
    const password = event.target.value;
    dispatch({ type: "setPassword", payload: { password: password } });
    dispatch({
      type: "setIsValidPassword",
      payload: { validPassword: true },
    });

    if (!password.length || password.length > 15) {
      dispatch({
        type: "setIsValidPassword",
        payload: { validPassword: false },
      });

      return;
    }
  };
  const { login, password, validLogin, validPassword } = state;
  return (
    <div className="text-center">
      <div className="items-center">
        <form>
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
              type="password"
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
