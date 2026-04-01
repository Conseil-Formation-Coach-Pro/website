import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import parcoursContent from "../content/parcours.html?raw";
import { seoPages } from "../data/seo";

export default function ParcoursPage() {
  return (
    <>
      <Seo {...seoPages.parcours} />
      <LegacyHtmlContent html={parcoursContent} className="parcours-page" />
    </>
  );
}
