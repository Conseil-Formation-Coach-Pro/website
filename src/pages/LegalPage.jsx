import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import legalContent from "../content/mentions-legales.html?raw";
import { seoPages } from "../data/seo";

export default function LegalPage() {
  return (
    <>
      <Seo {...seoPages.legal} />
      <LegacyHtmlContent html={legalContent} className="legal-page" />
    </>
  );
}
