import React from "react";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./pages/NavigationBar";
import CarrerPage from "./pages/CarrerPage";

// ${({ theme }) => theme.flexMinin('row', 'center', '')}
const Router = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/carrer" element={<CarrerPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
