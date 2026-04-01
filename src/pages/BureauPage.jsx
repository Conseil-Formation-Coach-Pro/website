import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import bureauContent from "../content/bureau.html?raw";
import { seoPages } from "../data/seo";

export default function BureauPage() {
  return (
    <>
      <Seo {...seoPages.bureau} />
      <LegacyHtmlContent html={bureauContent} className="bureau-page" />
    </>
  );
}
