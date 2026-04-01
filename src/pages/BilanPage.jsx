import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import bilanContent from "../content/bilan.html?raw";
import { seoPages } from "../data/seo";

export default function BilanPage() {
  return (
    <>
      <Seo {...seoPages.bilan} />
      <LegacyHtmlContent html={bilanContent} className="bilan-page" />
    </>
  );
}
