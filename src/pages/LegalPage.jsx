import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import legalContent from "../content/mentions-legales.html?raw";

export default function LegalPage() {
  return (
    <>
      <Seo
        title="Mentions légales - Amélie Riche | Conseil Formation Coach Pro"
        description="Mentions légales, informations administratives et politique de confidentialité."
      />
      <LegacyHtmlContent html={legalContent} className="legal-page" />
    </>
  );
}
