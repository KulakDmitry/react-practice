import { Route, Routes } from "react-router-dom";
import HocPage from "./pages/HOC/HocPage";
import NavigateMenu from "./pages/NavigateMenu ";
import LazyLoadingPage from "./pages/LazyLoading/LazyLoadingPage";
import ControlledComponent from "./pages/LoginForms/ControlledComponent";
import UncontrolledComponent from "./pages/LoginForms/UncontrolledComponent";
import Buttons from "./pages/ReactChildren/Buttons";
import Timer from "./pages/Timer/Timer";
import withNavigate from "./withNavigate";

const NewLazyLoadingPage = withNavigate(LazyLoadingPage);
const NewHocPage = withNavigate(HocPage);
const NewButtons = withNavigate(Buttons);
const NewControlledComponent = withNavigate(ControlledComponent);
const NewUncontrolledComponent = withNavigate(UncontrolledComponent);
const NewTimer = withNavigate(Timer);

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigateMenu />} />
      <Route path="lazyLoadingPage" element={<NewLazyLoadingPage />} />
      <Route path="hocPage" element={<NewHocPage />} />
      <Route path="buttons" element={<NewButtons />} />
      <Route path="controlledComponent" element={<NewControlledComponent />} />
      <Route
        path="uncontrolledComponent"
        element={<NewUncontrolledComponent />}
      />
      <Route path="timer" element={<NewTimer />} />
    </Routes>
  );
}

export default App;
