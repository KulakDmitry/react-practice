import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex justify-around mt-10 mb-20">
      <Link to="/LazyLoadingPage">LazyLoadingPage</Link>
      <Link to="/HocPage">HocPage</Link>
      <Link to="/Buttons">ReactChildren</Link>
      <Link to="/ControllComponent">ControllComponent</Link>
      <Link to="/UncontrollComponent">UncontrollComponent</Link>
    </div>
  );
}
