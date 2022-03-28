import React from "react";
import { useReducer } from "react";

const loginFormActionTypes = {
  SET_LOGIN: "SET_LOGIN",
  SET_PASSWORD: "SET_PASSWORD",
  SET_IS_VALID_LOGIN: "SET_IS_VALID_LOGIN",
  SET_IS_VALID_PASSWORD: "SET_IS_VALID_PASSWORD",
};

export default function ControlledComponent() {
  const [state, dispatch] = useReducer(reducer, {
    login: "",
    password: "",
    validLogin: true,
    validPassword: true,
  });

  function reducer(state, action) {
    switch (action.type) {
      case loginFormActionTypes.SET_LOGIN:
        return {
          ...state,
          login: action.payload.login,
        };
      case loginFormActionTypes.SET_PASSWORD: {
        return {
          ...state,
          password: action.payload.password,
        };
      }
      case loginFormActionTypes.SET_IS_VALID_LOGIN: {
        return {
          ...state,
          validLogin: action.payload.validLogin,
        };
      }
      case loginFormActionTypes.SET_IS_VALID_PASSWORD: {
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
    dispatch({
      type: loginFormActionTypes.SET_LOGIN,
      payload: { login: login },
    });
    dispatch({
      type: loginFormActionTypes.SET_IS_VALID_LOGIN,
      payload: { validLogin: true },
    });

    if (!login.length || login.length > 15) {
      dispatch({
        type: loginFormActionTypes.SET_IS_VALID_LOGIN,
        payload: { validLogin: false },
      });
    }
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    dispatch({
      type: loginFormActionTypes.SET_PASSWORD,
      payload: { password: password },
    });
    dispatch({
      type: loginFormActionTypes.SET_IS_VALID_PASSWORD,
      payload: { validPassword: true },
    });

    if (!password.length || password.length > 15) {
      dispatch({
        type: loginFormActionTypes.SET_IS_VALID_PASSWORD,
        payload: { validPassword: false },
      });
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
