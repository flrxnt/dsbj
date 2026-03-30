<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Pied de page',
      desc:
        'Liens d\u2019information, partenaires et mentions légales ; bande tricolore en bas.',
      'sec-minimal': 'Footer minimal',
      'sec-minimal-p':
        'Version la plus simple : uniquement les liens légaux obligatoires et la mention de copyright. Idéal pour les applications internes ou les pages simples.',
      'sec-2-col': 'Footer avec 2 colonnes',
      'sec-2-col-p':
        'Ajout de la zone supérieure avec deux colonnes de liens de navigation. La grille passe d\'une colonne sur mobile à deux colonnes sur tablette.',
      'sec-4-col': 'Footer avec 4 colonnes',
      'sec-4-col-p':
        'Grille complète à quatre colonnes pour les portails riches en contenus. Passe à 2 colonnes sur tablette et 1 colonne sur mobile.',
      'sec-partenaires': 'Footer avec partenaires',
      'sec-partenaires-p':
        'Le bloc partenaires est optionnel. Il s\'insère entre les colonnes de liens et la barre inférieure. Les logos sont centrés et redimensionnés à 3 rem de hauteur.',
      'sec-complet': 'Footer complet',
      'sec-complet-p':
        'Combinaison de toutes les sections : 4 colonnes de liens, bloc partenaires et barre inférieure avec liens légaux détaillés. Convient aux portails institutionnels majeurs.',
      'section-vue': 'Composant Vue BjFooter',
      'section-vue-p':
        'Le composant <code>BjFooter</code> n\u2019expose que la structure <code>bj-footer</code>, <code>bj-footer__top</code> (slot <code>top</code> optionnel) et <code>bj-footer__bottom</code> (slot <code>bottom</code> + défaut). Les colonnes de liens utilisent <code>bj-footer__list</code> et <code>bj-footer__link</code> ; il n\u2019existe pas de classes <code>bj-footer__brand</code> ou <code>bj-footer__links</code> dans le DS.',
      'section-classes-css': 'Classes CSS',
      'section-accessibilite': 'Accessibilité',
      'a11y-note':
        '<ul style="margin: 0; padding-left: 1.25rem;"><li>Utilisez <code>role="contentinfo"</code> sur l\'élément <code>&lt;footer&gt;</code>.</li><li>Chaque logo partenaire doit avoir un attribut <code>alt</code> explicite décrivant l\'organisme.</li><li>Les liens doivent être suffisamment descriptifs (éviter « cliquez ici »).</li><li>Utilisez une liste <code>&lt;ul&gt;</code> pour les liens légaux afin de faciliter la navigation au lecteur d\'écran.</li></ul>',
      'prop-footer': 'Conteneur principal du pied de page. Affiche la bande tricolore via ::after.',
      'prop-footer-top': 'Zone supérieure contenant les colonnes de liens. Séparée par une bordure basse.',
      'prop-footer-top-row': 'Grille responsive des colonnes (1 col mobile, 2 col tablette, 4 col desktop).',
      'prop-footer-col-title': 'Titre de colonne en majuscules avec graisse bold.',
      'prop-footer-list': 'Liste verticale de liens dans une colonne.',
      'prop-footer-link': 'Lien de navigation dans une colonne. Change de couleur au survol.',
      'prop-footer-partners': 'Bloc optionnel pour les logos des partenaires. Séparé par une bordure basse.',
      'prop-footer-partners-title': 'Titre centré du bloc partenaires.',
      'prop-footer-partners-logos': 'Conteneur flex centré pour les logos (images hauteur 3rem).',
      'prop-footer-bottom': 'Barre inférieure avec liens légaux et copyright.',
      'prop-footer-bottom-list': 'Liste flex des liens légaux, centrée et avec retour à la ligne.',
      'prop-footer-bottom-link': 'Lien légal en taille xs.',
      'prop-footer-copy': 'Mention de copyright centrée.',
    },
    en: {
      title: 'Footer',
      desc:
        'Information links, partners and legal notices; tricolor band at the bottom.',
      'sec-minimal': 'Minimal footer',
      'sec-minimal-p':
        'Simplest version: only mandatory legal links and copyright. Ideal for internal apps or simple pages.',
      'sec-2-col': 'Footer with 2 columns',
      'sec-2-col-p':
        'Adds the upper area with two columns of navigation links. The grid goes from one column on mobile to two on tablet.',
      'sec-4-col': 'Footer with 4 columns',
      'sec-4-col-p':
        'Full four-column grid for content-rich portals. Two columns on tablet, one on mobile.',
      'sec-partenaires': 'Footer with partners',
      'sec-partenaires-p':
        'The partners block is optional. It sits between the link columns and the bottom bar. Logos are centered and sized to 3 rem height.',
      'sec-complet': 'Complete footer',
      'sec-complet-p':
        'Combines all sections: four link columns, partners block and bottom bar with detailed legal links. Suited to major institutional portals.',
      'section-vue': 'BjFooter Vue component',
      'section-vue-p':
        'The <code>BjFooter</code> component only wraps <code>bj-footer</code>, optional <code>bj-footer__top</code> (<code>top</code> slot) and <code>bj-footer__bottom</code> (<code>bottom</code> slot + default). Link columns use <code>bj-footer__list</code> and <code>bj-footer__link</code>; there are no <code>bj-footer__brand</code> or <code>bj-footer__links</code> classes in the design system.',
      'section-classes-css': 'CSS classes',
      'section-accessibilite': 'Accessibility',
      'a11y-note':
        '<ul style="margin: 0; padding-left: 1.25rem;"><li>Use <code>role="contentinfo"</code> on the <code>&lt;footer&gt;</code> element.</li><li>Each partner logo needs an explicit <code>alt</code> describing the organization.</li><li>Links should be descriptive (avoid “click here”).</li><li>Use a <code>&lt;ul&gt;</code> for legal links to help screen reader navigation.</li></ul>',
      'prop-footer': 'Main footer container. Shows the tricolor band via ::after.',
      'prop-footer-top': 'Upper area with link columns. Separated by a bottom border.',
      'prop-footer-top-row': 'Responsive column grid (1 col mobile, 2 tablet, 4 desktop).',
      'prop-footer-col-title': 'Column title in uppercase with bold weight.',
      'prop-footer-list': 'Vertical list of links in a column.',
      'prop-footer-link': 'Column nav link. Color changes on hover.',
      'prop-footer-partners': 'Optional partner logos block. Separated by a bottom border.',
      'prop-footer-partners-title': 'Centered partners block title.',
      'prop-footer-partners-logos': 'Centered flex container for logos (3rem image height).',
      'prop-footer-bottom': 'Bottom bar with legal links and copyright.',
      'prop-footer-bottom-list': 'Flex list of legal links, centered with wrapping.',
      'prop-footer-bottom-link': 'Legal link in xs size.',
      'prop-footer-copy': 'Centered copyright line.',
    },
  },
})

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
      <p class="bj-footer__copy">Projet communautaire indépendant - non affilié au gouvernement du Bénin</p>
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
      <p class="bj-footer__copy">Projet communautaire indépendant - non affilié au gouvernement du Bénin</p>
    </div>
  </div>
</footer>`

const propsRows = computed(() => [
  { name: 'bj-footer', description: t('prop-footer') },
  { name: 'bj-footer__top', description: t('prop-footer-top') },
  { name: 'bj-footer__top-row', description: t('prop-footer-top-row') },
  { name: 'bj-footer__col-title', description: t('prop-footer-col-title') },
  { name: 'bj-footer__list', description: t('prop-footer-list') },
  { name: 'bj-footer__link', description: t('prop-footer-link') },
  { name: 'bj-footer__partners', description: t('prop-footer-partners') },
  {
    name: 'bj-footer__partners-title',
    description: t('prop-footer-partners-title'),
  },
  {
    name: 'bj-footer__partners-logos',
    description: t('prop-footer-partners-logos'),
  },
  { name: 'bj-footer__bottom', description: t('prop-footer-bottom') },
  {
    name: 'bj-footer__bottom-list',
    description: t('prop-footer-bottom-list'),
  },
  {
    name: 'bj-footer__bottom-link',
    description: t('prop-footer-bottom-link'),
  },
  { name: 'bj-footer__copy', description: t('prop-footer-copy') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">
    {{ t('title') }}
  </h1>
  <p
    class="bj-text-lg"
    style="max-width: 44rem; color: var(--bj-text-alt)"
  >
    {{ t('desc') }}
  </p>

  <DocsSection id="sec-vue" :title="t('section-vue')">
    <p
      class="bj-text-md"
      style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-4v)"
      v-html="t('section-vue-p')"
    />
  </DocsSection>

  <DocsSection id="sec-minimal" :title="t('sec-minimal')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('sec-minimal-p') }}
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

  <DocsSection id="sec-2-colonnes" :title="t('sec-2-col')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('sec-2-col-p') }}
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

  <DocsSection id="sec-4-colonnes" :title="t('sec-4-col')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('sec-4-col-p') }}
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
            <p class="bj-footer__copy">Projet communautaire indépendant - non affilié au gouvernement du Bénin</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="code4Colonnes" />
  </DocsSection>

  <DocsSection id="sec-partenaires" :title="t('sec-partenaires')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('sec-partenaires-p') }}
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

  <DocsSection id="sec-complet" :title="t('sec-complet')">
    <p class="bj-text-md" style="color: var(--bj-text-alt)">
      {{ t('sec-complet-p') }}
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
            <p class="bj-footer__copy">Projet communautaire indépendant - non affilié au gouvernement du Bénin</p>
          </div>
        </div>
      </footer>
    </DocsPreview>
    <DocsCode :code="codeComplet" />
  </DocsSection>

  <DocsSection id="sec-classes-css" :title="t('section-classes-css')">
    <DocsPropsTable :rows="propsRows" />
  </DocsSection>

  <DocsSection id="sec-accessibilité" :title="t('section-accessibilite')">
    <DocsA11yNote>
      <div v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
