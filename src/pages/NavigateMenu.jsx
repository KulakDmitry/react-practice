import React from "react";
import { Link } from "react-router-dom";

export default function NavigateMenu() {
  return (
    <div className="flex justify-around mt-10 mb-20">
      <Link to="/lazyLoadingPage">LazyLoadingPage</Link>
      <Link to="/hocPage">HocPage</Link>
      <Link to="/buttons">ReactChildren</Link>
      <Link to="/controlledComponent">ControlledComponent</Link>
      <Link to="/uncontrolledComponent">UncontrolledComponent</Link>
      <Link to="/timer">Timer</Link>
    </div>
  );
}
