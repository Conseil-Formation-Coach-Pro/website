import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page introuvable - Amélie Riche" description="La page demandée est introuvable." />
      <section className="section-shell section-block not-found">
        <p className="eyebrow">404</p>
        <h1>Page introuvable</h1>
        <p>Le contenu demandé n&apos;existe pas ou a été déplacé.</p>
        <Link to="/" className="button button-primary">
          Retour à l&apos;accueil
        </Link>
      </section>
    </>
  );
}
