import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import ApiDoc from "@/pages/apisDoc/ApiDoc";

const RoutesApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/api-doc" element={<ApiDoc />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
