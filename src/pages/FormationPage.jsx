import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import formationContent from "../content/formation.html?raw";
import { seoPages } from "../data/seo";

export default function FormationPage() {
  return (
    <>
      <Seo {...seoPages.formation} />
      <LegacyHtmlContent html={formationContent} className="formation-page" />
    </>
  );
}
