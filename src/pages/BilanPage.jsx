import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import bilanContent from "../content/bilan.html?raw";

export default function BilanPage() {
  return (
    <>
      <Seo
        title="Bilan de Compétences à Arras - Amélie Riche | Conseil Formation Coach Pro"
        description="Découvrez les formules de bilan de compétences certifiées Qualiopi à Arras."
      />
      <LegacyHtmlContent html={bilanContent} className="bilan-page" />
    </>
  );
}
