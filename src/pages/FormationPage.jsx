import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import formationContent from "../content/formation.html?raw";

export default function FormationPage() {
  return (
    <>
      <Seo
        title="Formations Professionnelles à Arras - Amélie Riche | Conseil Formation Coach Pro"
        description="Formations professionnelles sur mesure à Arras pour dirigeants, managers et salariés."
      />
      <LegacyHtmlContent html={formationContent} className="formation-page" />
    </>
  );
}
