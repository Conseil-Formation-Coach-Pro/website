import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import coachingContent from "../content/coaching.html?raw";
import { seoPages } from "../data/seo";

export default function CoachingPage() {
  return (
    <>
      <Seo {...seoPages.coaching} />
      <LegacyHtmlContent html={coachingContent} className="coaching-page" />
    </>
  );
}
