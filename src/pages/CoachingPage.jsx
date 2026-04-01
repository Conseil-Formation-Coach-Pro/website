import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import coachingContent from "../content/coaching.html?raw";

export default function CoachingPage() {
  return (
    <>
      <Seo
        title="Coaching Professionnel à Arras - Amélie Riche | Conseil Formation Coach Pro"
        description="Coaching professionnel à Arras pour dirigeants, managers et salariés."
      />
      <LegacyHtmlContent html={coachingContent} className="coaching-page" />
    </>
  );
}
