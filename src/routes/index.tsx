import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";

const RoutesApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
