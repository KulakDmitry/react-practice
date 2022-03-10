import { Route, Routes } from "react-router-dom";
import "./App.css";
import HocPage from "./pages/HOC/HocPage";
import HomePage from "./pages/HomePage";
import LazyLoadingPage from "./pages/LazyLoading/LazyLoadingPage";
import ControllComponent from "./pages/LoginForms/ControllComponent";
import UncontrollComponent from "./pages/LoginForms/UncontrollComponent";
import Buttons from "./pages/ReactChildren/Buttons";
import Timer from "./pages/Timer/Timer";

function App() {
  return (
    <>
      <HomePage />

      <Routes>
        <Route path="lazyLoadingPage" element={<LazyLoadingPage />} />
        <Route path="hocPage" element={<HocPage />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="controllComponent" element={<ControllComponent />} />
        <Route path="uncontrollComponent" element={<UncontrollComponent />} />
        <Route path="timer" element={<Timer />} />
      </Routes>
    </>
  );
}

export default App;
