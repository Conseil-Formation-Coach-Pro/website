import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import parcoursContent from "../content/parcours.html?raw";

export default function ParcoursPage() {
  return (
    <>
      <Seo
        title="Amélie Riche - Parcours | CONSEIL FORMATION COACH PRO"
        description="Parcours professionnel et expériences clefs d'Amélie Riche."
      />
      <LegacyHtmlContent html={parcoursContent} className="parcours-page" />
    </>
  );
}
