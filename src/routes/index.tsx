import Home from "@/pages/home/Home";
import Projects from "@/pages/projects/Projects";
import projects from "@/pages/projects/Projects";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
