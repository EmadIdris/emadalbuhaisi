import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Certificates from "./pages/Certificates";
import CertificateDetail from "./pages/CertificateDetail";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToHash />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/certificates/:slug" element={<CertificateDetail />} />
      </Routes>
    </>
  );
};

export default App;
