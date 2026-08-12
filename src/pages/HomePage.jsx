import { useState } from "react";
import Seo from "../components/common/Seo";
import { seoPages } from "../data/seo";

function getIsoWeekNumber(date) {
  const target = new Date(date.valueOf());
  const dayNumber = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNumber + 3);
  const firstThursday = target.valueOf();
  target.setMonth(0, 1);
  const dayNumberAtYearStart = (target.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNumberAtYearStart + 3);
  return 1 + Math.round((firstThursday - target) / (7 * 24 * 3600 * 1000));
}

function HorairesModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const weekNumber = getIsoWeekNumber(new Date());
  const isEvenWeek = weekNumber % 2 === 0;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>
          <span className="modal-close-icon" aria-hidden="true" />
        </button>
        <h3>Horaires (uniquement sur RDV)</h3>
        <div className="hours-grid">
          <div className={`hours-column${isEvenWeek ? " is-active" : ""}`}>
            <h4>
              Semaines paires
              {isEvenWeek ? <span className="hours-current">Cette semaine</span> : null}
            </h4>
            <ul>
              <li><strong>Lundi :</strong> 8h - 20h</li>
              <li><strong>Mardi :</strong> 8h - 20h</li>
              <li><strong>Mercredi :</strong> 8h - 20h</li>
              <li><strong>Jeudi :</strong> 8h - 20h</li>
              <li><strong>Vendredi :</strong> 8h - 20h</li>
              <li><strong>Samedi :</strong> Ferm&eacute;</li>
              <li><strong>Dimanche :</strong> Ferm&eacute;</li>
            </ul>
          </div>
          <div className={`hours-column${!isEvenWeek ? " is-active" : ""}`}>
            <h4>
              Semaines impaires
              {!isEvenWeek ? <span className="hours-current">Cette semaine</span> : null}
            </h4>
            <ul>
              <li><strong>Lundi :</strong> 9h - 17h30</li>
              <li><strong>Mardi :</strong> 9h - 17h30</li>
              <li><strong>Mercredi :</strong> 9h - 17h30</li>
              <li><strong>Jeudi :</strong> 9h - 17h30</li>
              <li><strong>Vendredi :</strong> 9h - 17h30</li>
              <li><strong>Samedi :</strong> 9h - 13h</li>
              <li><strong>Dimanche :</strong> Ferm&eacute;</li>
            </ul>
          </div>
        </div>
        <p className="modal-note">Ferm&eacute; les jours f&eacute;ri&eacute;s</p>
      </div>
    </div>
  );
}

function MapModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card modal-card--map" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose}>
          <span className="modal-close-icon" aria-hidden="true" />
        </button>
        <iframe
          title="Localisation"
          src="https://www.google.com/maps?q=119%20avenue%20Lobbedez%2062000%20Arras&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <Seo {...seoPages.home} />

      <section className="hero-section" id="hero">
        <div className="hero-overlay" />
        <div className="hero-inner section-shell">
          <div className="hero-card hero-card--soft">
            <p className="eyebrow">Arras &bull; Lille &bull; Paris &bull; France enti&egrave;re &bull; Francophonie</p>
            <h1>CONSEIL FORMATION COACH PRO</h1>
            <p className="hero-subtitle">Bilan de comp&eacute;tences | Coaching | Formations</p>
            <p className="hero-text">
              +7000 personnes d&eacute;j&agrave; accompagn&eacute;es dans toute la France, essentiellement par recommandation
            </p>
            <div className="hero-actions">
              <a href="https://calendly.com/amelieriche62" className="button button-primary">
                Votre 1er RDV offert
                <br />
                <span>Cliquez ici</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="split-card">
          <div className="content-panel content-panel--bilan">
            <h2>Bilan de Comp&eacute;tences</h2>
            <div className="action-row action-row--bilan">
              <a href="https://calendly.com/amelieriche62" className="button button-primary">Prendre RDV Gratuit</a>
              <a href="/bilan-de-competences.html#formules-section" className="button button-secondary">Voir les Formules</a>
              <a href="/bilan-de-competences.html" className="button button-secondary">Plus d&apos;infos</a>
            </div>
            <p>
              Clarifiez votre avenir professionnel : que vous envisagiez une <strong>reconversion</strong>,
              une <strong>&eacute;volution de carri&egrave;re</strong>, un <strong>changement d&apos;entreprise</strong>,
              ou le lancement d&apos;un <strong>projet entrepreneurial</strong>, je vous aide &agrave; b&acirc;tir un plan
              d&apos;action concret et motivant.
            </p>
            <div className="stat-strip">
              <div className="stat-pill stat-pill--inline">
                <span className="stars-inline">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <strong>5 / 5</strong>
              </div>
              <div className="stat-pill stat-pill--inline stat-pill--recommendation">
                <strong>100 %</strong>
                <span>de recommandation</span>
              </div>
            </div>
            <div className="info-badge">
              <div>
                <p>
                  Bilan finançable via votre <strong>Compte Personnel de Formation (CPF)</strong>, votre{" "}
                  <strong>employeur</strong>, en <strong>autofinancement</strong> (5x sans frais)...
                </p>
                <p className="subtle">Plafond CPF 2026 : 1 600 &euro; sur l&apos;ann&eacute;e.</p>
              </div>
            </div>
            <div className="price-pill">
              <span>Quatre formules disponibles &bull; de <strong>1 600 &euro;</strong> &agrave; <strong>2 600 &euro;</strong>, selon votre situation</span>
            </div>
            <p className="quality-kicker">Accompagnement hautement qualitatif<sup>*</sup></p>
            <p className="quality-note"><strong>*</strong> Accompagnement r&eacute;ellement personnalis&eacute;, adaptation continue des s&eacute;ances, supports soign&eacute;s, synth&egrave;se finale remise en fin de parcours et cadre d&apos;accueil pens&eacute; pour travailler dans de bonnes conditions.</p>
          </div>
          <div className="media-panel media-panel--bilan">
            <img src="/bilan-visuel.png" alt="S&eacute;ance de bilan de comp&eacute;tences" />
          </div>
        </div>

        <div className="banner-card">
          <div className="banner-card__content">
          <p>
            <strong>Certification Qualiopi</strong> d&eacute;livr&eacute;e pour le <strong>bilan de comp&eacute;tences</strong>,
            garantissant un accompagnement reconnu et finançable.
          </p>
        </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading">
          <p className="eyebrow">Services compl&eacute;mentaires</p>
          <h2>Coaching et formations</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <img src="/coaching.png" alt="Coaching pour professionnels et particuliers" />
            <div className="service-card__body">
              <h3>Coaching professionnel</h3>
              <p>
                <strong>Coach experte</strong> en individuel, en &eacute;quipe et en organisation, certifi&eacute;e
                professionnelle diplômée <strong>RNCP 7 (Bac+5)</strong>, l&apos;une des deux &eacute;coles les plus
                reconnues en France dans le domaine, meilleure note de promotion &agrave; la pratique du coaching.
              </p>
              <ul className="list">
                <li>Se pr&eacute;parer &agrave; un <strong>changement professionnel ou personnel</strong></li>
                <li>G&eacute;rer le <strong>stress et les &eacute;motions</strong></li>
                <li>Am&eacute;liorer ses <strong>relations, comp&eacute;tences & comportements</strong></li>
                <li>R&eacute;ussir &agrave; franchir un <strong>cap</strong> durant sa carri&egrave;re</li>
                <li>D&eacute;velopper des techniques de <strong>communication</strong> adapt&eacute;es &agrave; la situation</li>
              </ul>
              <div className="note-card">
                <strong>OFFERT :</strong> 1er rendez-vous d&eacute;couverte de 10 minutes pour d&eacute;finir vos besoins.
              </div>
              <div className="action-row action-row--services">
                <a href="/coaching.html" className="text-link">Plus d&apos;infos</a>
                <a href="/coaching.html#tarification" className="button button-secondary">Tarification</a>
                <a href="https://calendly.com/amelieriche62" className="button button-primary">RDV Offert</a>
              </div>
            </div>
          </article>

          <article className="service-card">
            <img src="/formation.png" alt="Formations soft skills en entreprise" />
            <div className="service-card__body">
              <h3>Formations en entreprise</h3>
              <p>
                Accompagnement de <strong>tous</strong> les publics et <strong>tous</strong> les métiers avec
                des techniques pédagogiques basées sur les <strong>neurosciences</strong> et la{" "}
                <strong>psychologie</strong>. J&apos;interviens pour des <strong>cabinets</strong> de formation
                reconnus dans l&apos;innovation.
              </p>
              <p className="arrow-intro">Des programmes sur mesure en soft skills pour vos équipes :</p>
              <ul className="list">
                <li>Accompagnement au changement</li>
                <li>Excellence relationnelle et satisfaction client</li>
                <li>Intelligence émotionnelle</li>
                <li>Communication</li>
                <li>Vente qualitative et efficace</li>
                <li>Gestion des incivilités et conflits</li>
                <li>Esprit critique</li>
                <li>Leadership</li>
                <li>DCI</li>
              </ul>
              <div className="action-row">
                <a href="/formation.html" className="text-link">
                  En savoir plus sur les formations disponibles
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="profile-card">
          <div className="profile-card__left">
            <img src="/amelie2.png" alt="Portrait Am&eacute;lie Riche" />
            <div>
              <h2>Am&eacute;lie Riche</h2>
              <p className="highlight-text">
                Gérante de la société <strong>Conseil Formation Coach Pro</strong><br />
                <span className="arrow-line">Formatrice, Coach, Consultante, Conceptrice</span>
              </p>
            </div>
            <div className="action-row action-row--stack">
              <a href="/parcours.html" className="button button-primary">Parcours complet</a>
              <a href="#contact" className="button button-secondary">Prendre contact</a>
            </div>
          </div>

          <div className="profile-card__right">
            <p className="lead">
              J&apos;accompagne les salariés, managers et dirigeants à atteindre leurs objectifs à travers des
              missions de coaching et de formations individuelles et collectives, dans toute la France et
              francophonie.
            </p>

            <div className="panel-card">
              <ul className="list">
                <li>
                  <strong>Coach consultante experte</strong> individuelle, collective et d&apos;organisation avec{" "}
                  <strong>Diplôme RNCP7 (Bac+5)</strong> (meilleure note de promotion)
                </li>
                <li>
                  Autrice de formations diffusées à <strong>des dizaines de milliers de participants</strong>,
                  au sein de grandes entreprises, partout en France
                </li>
              </ul>
              <p>
                Domaines : développement des compétences soft skills, relations clients, gestion des
                incivilités, gestion des insatisfactions clients, intelligence émotionnelle, profils de
                personnalité, tests psychométriques, DCI (Directive du Crédit Immobilier)...
              </p>
            </div>

            <div className="panel-card panel-card--values">
              <h3>Mes valeurs</h3>
              <ul className="list list--columns">
                <li>Bienveillance & non-jugement</li>
                <li>Écoute & authenticité</li>
                <li>Confidentialité & simplicité</li>
                <li>Enthousiasme & attitude positive</li>
                <li>Humour & dynamisme</li>
                <li>Rigueur & efficacité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading">
          <p className="eyebrow">Références</p>
          <h2>Entreprises accompagnées & Témoignages</h2>
        </div>

        <div className="trust-grid">
          <div className="logo-wall">
            {[1, 3, 4, 7, 8, 10, 11, 12, 13].map((value) => (
              <img key={value} src={`/logo${value}.png`} alt={`Logo partenaire ${value}`} />
            ))}
          </div>

          <div className="quote-grid">
            <blockquote>
              &ldquo;Amélie est très à l&apos;écoute et met à l&apos;aise rapidement. Grâce à son approche humaine et
              pédagogique, j&apos;ai pu avancer et construire un plan d&apos;action concret.&rdquo;
              <cite>Thibaut, 2024</cite>
            </blockquote>
            <blockquote>
              &ldquo;Un bel accompagnement pour mon projet professionnel. Coach très professionnelle que je
              recommande, notamment pour un bilan de compétences afin de changer de vie.&rdquo;
              <cite>Élodie, 2024</cite>
            </blockquote>
            <blockquote>
              &ldquo;Merci beaucoup pour ta patience et ta bienveillance tout au long de ces 3 mois. C&apos;était
              vraiment top de t&apos;avoir pour m&apos;accompagner dans ce projet.&rdquo;
              <cite>Yannick, 2024</cite>
            </blockquote>
            <blockquote>
              &ldquo;Amélie m&apos;a ouvert les yeux sur un métier qui me plaît et me donne envie. Cela me conforte
              dans mes futurs choix.&rdquo;
              <cite>Sébastien, 2025</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-shell section-block" id="contact">
        <div className="contact-card">
          <div className="contact-card__left">
            <p className="eyebrow">Infos pratiques</p>
            <h2 className="contact-title">Contacts & Infos</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M7 2v2H5a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm12 8H5v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7Z"/></svg>
                </span>
                <span>Du lundi au samedi</span>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2Z"/></svg>
                </span>
                <a href="tel:+33699756661">06 99 75 66 61</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.02-.25L12 11.74 18.98 6.5H5.02Zm13.48 1.88-5.75 4.31a1.25 1.25 0 0 1-1.5 0L5.5 8.38v8.87c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V8.38Z"/></svg>
                </span>
                <a href="mailto:coach@amelieriche.fr">coach@amelieriche.fr</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 4.64 5.08 10.88 6.17 12.16a1 1 0 0 0 1.52 0C13.92 19.88 19 13.64 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
                </span>
                <span>119 avenue Lobbedez, 62000 Arras</span>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 4.64 5.08 10.88 6.17 12.16a1 1 0 0 0 1.52 0C13.92 19.88 19 13.64 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
                </span>
                <span>Rendez-vous egalement possibles a partir de 2027 au 42 boulevard Carnot, app. 4, 62000 Arras</span>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M5 11V6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5V11h1a1 1 0 0 1 1 1v4h-2.09a3 3 0 0 0-5.82 0h-2.18a3 3 0 0 0-5.82 0H3v-4a1 1 0 0 1 1-1h1Zm2 0h10V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V11Zm1 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>
                </span>
                <span>Une place de parking offerte dans la r&eacute;sidence sur simple demande</span>
              </li>
            </ul>
            <div className="action-row action-row--stack">
              <a href="/bureau.html" className="button button-secondary">Photos</a>
              <button type="button" className="button button-secondary" onClick={() => setIsHoursOpen(true)}>
                Horaires
              </button>
              <a href="https://calendly.com/amelieriche62" className="button button-primary">
                Réserver un RDV Offert
              </a>
            </div>
          </div>

          <div className="contact-card__right">
            <p className="eyebrow">Accès & localisation</p>
            <h2 className="contact-title">Localisation</h2>
            <div className="contact-visuals">
              <div className="map-visual-group">
                <button type="button" className="visual-button visual-button--map" onClick={() => setIsMapOpen(true)}>
                  <img src="/map.png" alt="Localisation du bureau" />
                </button>
                <p className="subtle">(Cliquez sur la carte pour plus de détails)</p>
              </div>
              <img className="contact-photo-static" src="/straight-bureau-contact-full.png" alt="Photo du bureau" />
            </div>
          </div>
        </div>
      </section>

      <HorairesModal isOpen={isHoursOpen} onClose={() => setIsHoursOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
