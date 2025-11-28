import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Archive from "./pages/archive/Archive";
import Information from "./pages/information/Information";
import SampleProject from "./pages/sampleproject/SampleProject";

import { AnimatePresence } from "framer-motion";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home | Tobias Arraiza ",
    "/projects": "Proyectos | Tobias Arraiza",
    "/archive": "Archivo | Tobias Arraiza ",
    "/information": "Informacion | Tobias Arraiza ",
    "/sample-project": "Proyecto | Tobias Arraiza ",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Tobias Arraiza";
    document.title = currentTitle;

    if (location.pathname !== "/archive") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 700);
    }
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/information" element={<Information />} />
          <Route path="/sample-project" element={<SampleProject />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
