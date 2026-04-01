import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import BilanPage from "./pages/BilanPage";
import BureauPage from "./pages/BureauPage";
import CoachingPage from "./pages/CoachingPage";
import FormationPage from "./pages/FormationPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";
import ParcoursPage from "./pages/ParcoursPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/bilan-de-competences.html" element={<BilanPage />} />
        <Route path="/coaching.html" element={<CoachingPage />} />
        <Route path="/formation.html" element={<FormationPage />} />
        <Route path="/bureau.html" element={<BureauPage />} />
        <Route path="/parcours.html" element={<ParcoursPage />} />
        <Route path="/mentions-legales.html" element={<LegalPage />} />
        <Route path="/bilan-de-competences" element={<Navigate to="/bilan-de-competences.html" replace />} />
        <Route path="/coaching" element={<Navigate to="/coaching.html" replace />} />
        <Route path="/formation" element={<Navigate to="/formation.html" replace />} />
        <Route path="/bureau" element={<Navigate to="/bureau.html" replace />} />
        <Route path="/parcours" element={<Navigate to="/parcours.html" replace />} />
        <Route path="/mentions-legales" element={<Navigate to="/mentions-legales.html" replace />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
