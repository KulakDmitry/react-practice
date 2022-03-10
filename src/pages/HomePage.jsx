import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex justify-around mt-10 mb-20">
      <Link to="/lazyLoadingPage">LazyLoadingPage</Link>
      <Link to="/hocPage">HocPage</Link>
      <Link to="/buttons">ReactChildren</Link>
      <Link to="/controllComponent">ControllComponent</Link>
      <Link to="/uncontrollComponent">UncontrollComponent</Link>
      <Link to="/timer">Timer</Link>
    </div>
  );
}
