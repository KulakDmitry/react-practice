import { Route, Routes } from "react-router-dom";
import "./App.css";
import HocPage from "./pages/HOC/HocPage";
import HomePage from "./pages/HomePage";
import LazyLoadingPage from "./pages/LazyLoading/LazyLoadingPage";
import ControllComponent from "./pages/LoginForms/ControllComponent";
import UncontrollComponent from "./pages/LoginForms/UncontrollComponent";
import Buttons from "./pages/ReactChildren/Buttons";

function App() {
  return (
    <>
      <HomePage />

      <Routes>
        <Route path="LazyLoadingPage" element={<LazyLoadingPage />} />
        <Route path="HocPage" element={<HocPage />} />
        <Route path="Buttons" element={<Buttons />} />
        <Route path="ControllComponent" element={<ControllComponent />} />
        <Route path="UncontrollComponent" element={<UncontrollComponent />} />
      </Routes>
    </>
  );
}

export default App;
