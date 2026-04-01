import LegacyHtmlContent from "../components/common/LegacyHtmlContent";
import Seo from "../components/common/Seo";
import bureauContent from "../content/bureau.html?raw";

export default function BureauPage() {
  return (
    <>
      <Seo
        title="Amélie Riche - Le Bureau à Arras | CONSEIL FORMATION COACH PRO"
        description="Découvrez en images le bureau d'Amélie Riche à Arras."
      />
      <LegacyHtmlContent html={bureauContent} className="bureau-page" />
    </>
  );
}
