<script setup lang="ts">
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const codeMinimal = `<footer class="bj-footer" role="contentinfo">
  <div class="bj-container">
    <div class="bj-footer__bottom">
      <ul class="bj-footer__bottom-list">
        <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
        <li><a class="bj-footer__bottom-link" href="/donnees-personnelles">Données personnelles</a></li>
        <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité</a></li>
      </ul>
      <p class="bj-footer__copy">République du Bénin</p>
    </div>
  </div>
</footer>`

const code2Colonnes = `<footer class="bj-footer" role="contentinfo">
  <div class="bj-container">
    <div class="bj-footer__top">
      <div class="bj-footer__top-row">
        <div>
          <p class="bj-footer__col-title">Service</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/contact">Contact</a>
            <a class="bj-footer__link" href="/faq">FAQ</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Informations</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/accessibilite">Accessibilité</a>
            <a class="bj-footer__link" href="/donnees-personnelles">Données personnelles</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bj-footer__bottom">
      <ul class="bj-footer__bottom-list">
        <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
        <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
      </ul>
      <p class="bj-footer__copy">République du Bénin</p>
    </div>
  </div>
</footer>`

const code4Colonnes = `<footer class="bj-footer" role="contentinfo">
  <div class="bj-container">
    <div class="bj-footer__top">
      <div class="bj-footer__top-row">
        <div>
          <p class="bj-footer__col-title">À propos</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="#">Qui sommes-nous</a>
            <a class="bj-footer__link" href="#">Organisation</a>
            <a class="bj-footer__link" href="#">Rapports annuels</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Services</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="#">Démarches en ligne</a>
            <a class="bj-footer__link" href="#">Formulaires</a>
            <a class="bj-footer__link" href="#">Rendez-vous</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Aide</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="#">FAQ</a>
            <a class="bj-footer__link" href="#">Guides</a>
            <a class="bj-footer__link" href="#">Contact</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Suivez-nous</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="#">Facebook</a>
            <a class="bj-footer__link" href="#">Twitter / X</a>
            <a class="bj-footer__link" href="#">YouTube</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bj-footer__bottom">
      <ul class="bj-footer__bottom-list">
        <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
        <li><a class="bj-footer__bottom-link" href="/donnees-personnelles">Données personnelles</a></li>
        <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité</a></li>
        <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
      </ul>
      <p class="bj-footer__copy">République du Bénin - contenus sous licence étatique</p>
    </div>
  </div>
</footer>`

const codePartenaires = `<footer class="bj-footer" role="contentinfo">
  <div class="bj-container">
    <div class="bj-footer__top">
      <div class="bj-footer__top-row">
        <div>
          <p class="bj-footer__col-title">Service</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/contact">Contact</a>
            <a class="bj-footer__link" href="/faq">FAQ</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Informations</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/accessibilite">Accessibilité</a>
            <a class="bj-footer__link" href="/donnees-personnelles">Données personnelles</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bj-footer__partners">
      <p class="bj-footer__partners-title">Nos partenaires</p>
      <div class="bj-footer__partners-logos">
        <img src="/logos/partenaire-1.svg" alt="Ministère de l'Économie" height="48">
        <img src="/logos/partenaire-2.svg" alt="Agence nationale du numérique" height="48">
        <img src="/logos/partenaire-3.svg" alt="Union européenne" height="48">
      </div>
    </div>
    <div class="bj-footer__bottom">
      <ul class="bj-footer__bottom-list">
        <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
        <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
      </ul>
      <p class="bj-footer__copy">République du Bénin</p>
    </div>
  </div>
</footer>`

const codeComplet = `<footer class="bj-footer" role="contentinfo">
  <div class="bj-container">
    <div class="bj-footer__top">
      <div class="bj-footer__top-row">
        <div>
          <p class="bj-footer__col-title">À propos</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/a-propos">Qui sommes-nous</a>
            <a class="bj-footer__link" href="/organisation">Organisation</a>
            <a class="bj-footer__link" href="/rapports">Rapports annuels</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Services</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/demarches">Démarches en ligne</a>
            <a class="bj-footer__link" href="/formulaires">Formulaires</a>
            <a class="bj-footer__link" href="/rdv">Rendez-vous</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Aide</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="/faq">FAQ</a>
            <a class="bj-footer__link" href="/guides">Guides</a>
            <a class="bj-footer__link" href="/contact">Contact</a>
          </div>
        </div>
        <div>
          <p class="bj-footer__col-title">Suivez-nous</p>
          <div class="bj-footer__list">
            <a class="bj-footer__link" href="https://facebook.com">Facebook</a>
            <a class="bj-footer__link" href="https://x.com">Twitter / X</a>
            <a class="bj-footer__link" href="https://youtube.com">YouTube</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bj-footer__partners">
      <p class="bj-footer__partners-title">Nos partenaires</p>
      <div class="bj-footer__partners-logos">
        <img src="/logos/partenaire-1.svg" alt="Ministère de l'Économie" height="48">
        <img src="/logos/partenaire-2.svg" alt="Agence nationale du numérique" height="48">
        <img src="/logos/partenaire-3.svg" alt="Union européenne" height="48">
      </div>
    </div>
    <div class="bj-footer__bottom">
      <ul class="bj-footer__bottom-list">
        <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
        <li><a class="bj-footer__bottom-link" href="/donnees-personnelles">Données personnelles</a></li>
        <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité : partiellement conforme</a></li>
        <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
      </ul>
      <p class="bj-footer__copy">République du Bénin - contenus sous licence étatique</p>
    </div>
  </div>
</footer>`

const propsRows = [
  { name: 'bj-footer', description: 'Conteneur principal du pied de page. Affiche la bande tricolore via ::after.' },
  { name: 'bj-footer__top', description: 'Zone supérieure contenant les colonnes de liens. Séparée par une bordure basse.' },
  { name: 'bj-footer__top-row', description: 'Grille responsive des colonnes (1 col mobile, 2 col tablette, 4 col desktop).' },
  { name: 'bj-footer__col-title', description: 'Titre de colonne en majuscules avec graisse bold.' },
  { name: 'bj-footer__list', description: 'Liste verticale de liens dans une colonne.' },
  { name: 'bj-footer__link', description: 'Lien de navigation dans une colonne. Change de couleur au survol.' },
  { name: 'bj-footer__partners', description: 'Bloc optionnel pour les logos des partenaires. Séparé par une bordure basse.' },
  { name: 'bj-footer__partners-title', description: 'Titre centré du bloc partenaires.' },
  { name: 'bj-footer__partners-logos', description: 'Conteneur flex centré pour les logos (images hauteur 3rem).' },
  { name: 'bj-footer__bottom', description: 'Barre inférieure avec liens légaux et copyright.' },
  { name: 'bj-footer__bottom-list', description: 'Liste flex des liens légaux, centrée et avec retour à la ligne.' },
  { name: 'bj-footer__bottom-link', description: 'Lien légal en taille xs.' },
  { name: 'bj-footer__copy', description: 'Mention de copyright centrée.' },
]
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    Pied de page
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    Liens d'information, partenaires et mentions légales ; bande
    tricolore en bas.
  </p>

  <!-- Exemple 1 : Minimal -->
  <DocsSection id="sec-minimal" title="Footer minimal">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Version la plus simple : uniquement les liens légaux obligatoires
      et la mention de copyright. Idéal pour les applications internes
      ou les pages simples.
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <footer class="bj-footer" role="contentinfo">
        <div class="bj-container">
          <div class="bj-footer__bottom">
            <ul class="bj-footer__bottom-list">
              <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
              <li><a class="bj-footer__bottom-link" href="/donnees-personnelles">Données personnelles</a></li>
              <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité</a></li>
            </ul>
            <p class="bj-footer__copy">République du Bénin</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="codeMinimal" />
  </DocsSection>

  <!-- Exemple 2 : 2 colonnes -->
  <DocsSection id="sec-2-colonnes" title="Footer avec 2 colonnes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Ajout de la zone supérieure avec deux colonnes de liens de
      navigation. La grille passe d'une colonne sur mobile à deux
      colonnes sur tablette.
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <footer class="bj-footer" role="contentinfo">
        <div class="bj-container">
          <div class="bj-footer__top">
            <div class="bj-footer__top-row">
              <div>
                <p class="bj-footer__col-title">Service</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/contact">Contact</a>
                  <a class="bj-footer__link" href="/faq">FAQ</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Informations</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/accessibilite">Accessibilité</a>
                  <a class="bj-footer__link" href="/donnees-personnelles">Données personnelles</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bj-footer__bottom">
            <ul class="bj-footer__bottom-list">
              <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
              <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
            </ul>
            <p class="bj-footer__copy">République du Bénin</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="code2Colonnes" />
  </DocsSection>

  <!-- Exemple 3 : 4 colonnes -->
  <DocsSection id="sec-4-colonnes" title="Footer avec 4 colonnes">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Grille complète à quatre colonnes pour les portails riches en
      contenus. Passe à 2 colonnes sur tablette et 1 colonne sur
      mobile.
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <footer class="bj-footer" role="contentinfo">
        <div class="bj-container">
          <div class="bj-footer__top">
            <div class="bj-footer__top-row">
              <div>
                <p class="bj-footer__col-title">À propos</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="#">Qui sommes-nous</a>
                  <a class="bj-footer__link" href="#">Organisation</a>
                  <a class="bj-footer__link" href="#">Rapports annuels</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Services</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="#">Démarches en ligne</a>
                  <a class="bj-footer__link" href="#">Formulaires</a>
                  <a class="bj-footer__link" href="#">Rendez-vous</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Aide</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="#">FAQ</a>
                  <a class="bj-footer__link" href="#">Guides</a>
                  <a class="bj-footer__link" href="#">Contact</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Suivez-nous</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="#">Facebook</a>
                  <a class="bj-footer__link" href="#">Twitter / X</a>
                  <a class="bj-footer__link" href="#">YouTube</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bj-footer__bottom">
            <ul class="bj-footer__bottom-list">
              <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
              <li><a class="bj-footer__bottom-link" href="/donnees-personnelles">Données personnelles</a></li>
              <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité</a></li>
              <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
            </ul>
            <p class="bj-footer__copy">République du Bénin - contenus sous licence étatique</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="code4Colonnes" />
  </DocsSection>

  <!-- Exemple 4 : Avec partenaires -->
  <DocsSection id="sec-partenaires" title="Footer avec partenaires">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Le bloc partenaires est optionnel. Il s'insère entre les colonnes
      de liens et la barre inférieure. Les logos sont centrés et
      redimensionnés à 3 rem de hauteur.
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <footer class="bj-footer" role="contentinfo">
        <div class="bj-container">
          <div class="bj-footer__top">
            <div class="bj-footer__top-row">
              <div>
                <p class="bj-footer__col-title">Service</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/contact">Contact</a>
                  <a class="bj-footer__link" href="/faq">FAQ</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Informations</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/accessibilite">Accessibilité</a>
                  <a class="bj-footer__link" href="/donnees-personnelles">Données personnelles</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bj-footer__partners">
            <p class="bj-footer__partners-title">Nos partenaires</p>
            <div class="bj-footer__partners-logos">
              <span class="bj-text-sm bj-text-mention" style="border: 1px dashed var(--bj-border-default); padding: 0.5rem 1rem; border-radius: 4px;">Logo partenaire 1</span>
              <span class="bj-text-sm bj-text-mention" style="border: 1px dashed var(--bj-border-default); padding: 0.5rem 1rem; border-radius: 4px;">Logo partenaire 2</span>
              <span class="bj-text-sm bj-text-mention" style="border: 1px dashed var(--bj-border-default); padding: 0.5rem 1rem; border-radius: 4px;">Logo partenaire 3</span>
            </div>
          </div>
          <div class="bj-footer__bottom">
            <ul class="bj-footer__bottom-list">
              <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
              <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
            </ul>
            <p class="bj-footer__copy">République du Bénin</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="codePartenaires" />
  </DocsSection>

  <!-- Exemple 5 : Complet -->
  <DocsSection id="sec-complet" title="Footer complet">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      Combinaison de toutes les sections : 4 colonnes de liens, bloc
      partenaires et barre inférieure avec liens légaux détaillés.
      Convient aux portails institutionnels majeurs.
    </p>
    <DocsPreview style="padding: 0; overflow: hidden">
      <footer class="bj-footer" role="contentinfo">
        <div class="bj-container">
          <div class="bj-footer__top">
            <div class="bj-footer__top-row">
              <div>
                <p class="bj-footer__col-title">À propos</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/a-propos">Qui sommes-nous</a>
                  <a class="bj-footer__link" href="/organisation">Organisation</a>
                  <a class="bj-footer__link" href="/rapports">Rapports annuels</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Services</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/demarches">Démarches en ligne</a>
                  <a class="bj-footer__link" href="/formulaires">Formulaires</a>
                  <a class="bj-footer__link" href="/rdv">Rendez-vous</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Aide</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="/faq">FAQ</a>
                  <a class="bj-footer__link" href="/guides">Guides</a>
                  <a class="bj-footer__link" href="/contact">Contact</a>
                </div>
              </div>
              <div>
                <p class="bj-footer__col-title">Suivez-nous</p>
                <div class="bj-footer__list">
                  <a class="bj-footer__link" href="https://facebook.com">Facebook</a>
                  <a class="bj-footer__link" href="https://x.com">Twitter / X</a>
                  <a class="bj-footer__link" href="https://youtube.com">YouTube</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bj-footer__partners">
            <p class="bj-footer__partners-title">Nos partenaires</p>
            <div class="bj-footer__partners-logos">
              <span class="bj-text-sm bj-text-mention" style="border: 1px dashed var(--bj-border-default); padding: 0.5rem 1rem; border-radius: 4px;">Ministère de l'Économie</span>
              <span class="bj-text-sm bj-text-mention" style="border: 1px dashed var(--bj-border-default); padding: 0.5rem 1rem; border-radius: 4px;">Agence nationale du numérique</span>
              <span class="bj-text-sm bj-text-mention" style="border: 1px dashed var(--bj-border-default); padding: 0.5rem 1rem; border-radius: 4px;">Union européenne</span>
            </div>
          </div>
          <div class="bj-footer__bottom">
            <ul class="bj-footer__bottom-list">
              <li><a class="bj-footer__bottom-link" href="/mentions-legales">Mentions légales</a></li>
              <li><a class="bj-footer__bottom-link" href="/donnees-personnelles">Données personnelles</a></li>
              <li><a class="bj-footer__bottom-link" href="/accessibilite">Accessibilité : partiellement conforme</a></li>
              <li><a class="bj-footer__bottom-link" href="/plan-du-site">Plan du site</a></li>
            </ul>
            <p class="bj-footer__copy">République du Bénin - contenus sous licence étatique</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="codeComplet" />
  </DocsSection>

  <DocsSection id="sec-classes-css" title="Classes CSS">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" title="Accessibilité">
    <DocsA11yNote>
      <ul style="margin: 0; padding-left: 1.25rem;">
        <li>Utilisez <code>role="contentinfo"</code> sur l'élément <code>&lt;footer&gt;</code>.</li>
        <li>Chaque logo partenaire doit avoir un attribut <code>alt</code> explicite décrivant l'organisme.</li>
        <li>Les liens doivent être suffisamment descriptifs (éviter « cliquez ici »).</li>
        <li>Utilisez une liste <code>&lt;ul&gt;</code> pour les liens légaux afin de faciliter la navigation au lecteur d'écran.</li>
      </ul>
    </DocsA11yNote>
  </DocsSection>
</template>
