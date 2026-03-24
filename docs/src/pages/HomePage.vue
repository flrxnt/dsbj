<template>
  <!-- Hero -->
  <section style="padding: var(--bj-spacing-16v) 0; background: var(--bj-bg-default)">
    <div class="bj-container">
      <div class="bj-grid-row bj-grid-row--gutters bj-grid-row--middle">
        <div class="bj-col-12 bj-col-lg-5">
          <h1 class="bj-display-lg" style="margin-bottom: var(--bj-spacing-4v); line-height: 1.1">
            Design Système<br />du Bénin
          </h1>
          <p class="bj-text-lg" style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-6v); max-width: 28rem">
            Le Design Système du Bénin (DSBJ) est l'outil destiné à produire les interfaces officielles des services publics numériques. Il regroupe un ensemble de règles et de composants réutilisables, pour fournir des services numériques simples, accessibles et reconnaissables.
          </p>
          <RouterLink to="/premiers-pas/installation" class="bj-btn" style="background-color: var(--bj-color-vert-benin-main-491)">
            Commencer à utiliser le DSBJ
          </RouterLink>
        </div>
        <div class="bj-col-12 bj-col-lg-7">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--bj-spacing-4v); padding-left: var(--bj-spacing-6v)">
            <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)">
              <div style="background: var(--bj-bg-default); border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-sm); padding: var(--bj-spacing-4v)">
                <p style="font-size: var(--bj-fs-sm); font-weight: var(--bj-fw-semibold); margin-bottom: var(--bj-spacing-2v)">Légende</p>
                <div class="bj-radio-group">
                  <label class="bj-radio"><input type="radio" name="demo-radio" checked /><span class="bj-radio__label">Libellé</span></label>
                  <label class="bj-radio"><input type="radio" name="demo-radio" /><span class="bj-radio__label">Libellé</span></label>
                  <label class="bj-radio"><input type="radio" name="demo-radio" /><span class="bj-radio__label">Libellé</span></label>
                </div>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-1v)">
                <span class="bj-tag bj-tag--action">Libellé tag</span>
                <span class="bj-tag bj-tag--info">Libellé tag</span>
                <span class="bj-tag bj-tag--success">Libellé tag</span>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-2v)">
                <button class="bj-btn">Libellé</button>
                <button class="bj-btn bj-btn--secondary">Libellé</button>
                <button class="bj-btn bj-btn--tertiary">Libellé</button>
              </div>
              <div data-bj-accordion-group>
                <div class="bj-accordion">
                  <button class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="demo-acc1">Intitulé accordéon</button>
                  <div id="demo-acc1" class="bj-accordion__body"><p>Contenu de l'accordéon.</p></div>
                </div>
                <div class="bj-accordion">
                  <button class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="demo-acc2">Intitulé accordéon</button>
                  <div id="demo-acc2" class="bj-accordion__body"><p>Contenu de l'accordéon.</p></div>
                </div>
                <div class="bj-accordion">
                  <button class="bj-accordion__btn" data-bj-accordion-btn aria-expanded="false" aria-controls="demo-acc3">Intitulé accordéon</button>
                  <div id="demo-acc3" class="bj-accordion__body"><p>Contenu de l'accordéon.</p></div>
                </div>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-4v)">
              <div class="bj-tile" style="text-align: center">
                <div class="bj-tile__icon"><i class="ri-government-line" style="font-size: 2rem; color: var(--bj-action-high)"></i></div>
                <div class="bj-tile__body">
                  <span class="bj-badge bj-badge--info" style="margin-bottom: var(--bj-spacing-1v)">Libellé</span>
                  <h3 class="bj-tile__title">Titre lorem</h3>
                  <p class="bj-tile__desc">Description</p>
                </div>
              </div>
              <div style="background: var(--bj-bg-default); border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-sm); padding: var(--bj-spacing-4v)">
                <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-3v)">
                  <label class="bj-label" for="demo-pw">Mot de passe</label>
                  <div class="bj-input-wrap"><input class="bj-input" type="password" id="demo-pw" value="••••••••••" /></div>
                  <p class="bj-hint" style="margin-top: var(--bj-spacing-1v); font-size: var(--bj-fs-xs)">Votre mot de passe doit contenir au moins :</p>
                  <ul style="font-size: var(--bj-fs-xs); margin-top: var(--bj-spacing-1v); display: flex; flex-direction: column; gap: 2px">
                    <li style="display: flex; align-items: center; gap: 4px"><i class="ri-checkbox-circle-fill" style="color: var(--bj-success); font-size: 0.875rem"></i>12 caractères minimum</li>
                    <li style="display: flex; align-items: center; gap: 4px"><i class="ri-checkbox-circle-fill" style="color: var(--bj-success); font-size: 0.875rem"></i>1 caractère spécial</li>
                    <li style="display: flex; align-items: center; gap: 4px"><i class="ri-checkbox-circle-fill" style="color: var(--bj-success); font-size: 0.875rem"></i>1 chiffre minimum</li>
                  </ul>
                </div>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-1v); align-items: center">
                <span class="bj-badge">Libellé badge</span>
                <span class="bj-badge bj-badge--success">Libellé badge</span>
              </div>
              <div class="bj-select-group" style="background: var(--bj-bg-default); border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-sm); padding: var(--bj-spacing-4v)">
                <label class="bj-label" for="demo-sel">Légende</label>
                <select class="bj-select" id="demo-sel"><option>Libellé</option><option>Option 2</option></select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Explorer -->
  <section style="padding: var(--bj-spacing-12v) 0; background: var(--bj-bg-alt)">
    <div class="bj-container">
      <h2 class="bj-h2" style="text-align: center; margin-bottom: var(--bj-spacing-8v)">Explorer le design système</h2>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-md-6 bj-col-lg-3">
          <DocsCard to="/premiers-pas" icon="ri-rocket-line" title="Premiers pas" description="Installation, configuration et guide de démarrage rapide." />
        </div>
        <div class="bj-col-12 bj-col-md-6 bj-col-lg-3">
          <DocsCard to="/fondamentaux" icon="ri-palette-line" title="Fondamentaux" description="Couleurs, typographie, grille, espacement, icônes et principes." />
        </div>
        <div class="bj-col-12 bj-col-md-6 bj-col-lg-3">
          <DocsCard to="/composants" icon="ri-layout-grid-line" title="Composants" description="35 composants prêts à l'emploi : boutons, cartes, formulaires, navigation." />
        </div>
        <div class="bj-col-12 bj-col-md-6 bj-col-lg-3">
          <DocsCard to="/modeles" icon="ri-file-copy-line" title="Modèles" description="Templates de pages types pour sites gouvernementaux." />
        </div>
      </div>
    </div>
  </section>

  <!-- Composants en vedette -->
  <section style="padding: var(--bj-spacing-12v) 0">
    <div class="bj-container">
      <h2 class="bj-h2" style="margin-bottom: var(--bj-spacing-3v)">Composants en vedette</h2>
      <p class="bj-text-lg" style="color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-8v); max-width: 40rem">
        Exemples de composants disponibles dans le DSBJ, prêts à être intégrés dans vos interfaces.
      </p>
      <div class="bj-grid-row bj-grid-row--gutters">
        <div class="bj-col-12 bj-col-lg-6" style="margin-bottom: var(--bj-spacing-6v)">
          <h3 class="bj-h5" style="margin-bottom: var(--bj-spacing-3v)">Alertes</h3>
          <div style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v)">
            <div class="bj-alert bj-alert--info"><div class="bj-alert__body"><p class="bj-alert__title">Information</p><p class="bj-alert__text">Votre demande est en cours de traitement.</p></div></div>
            <div class="bj-alert bj-alert--success"><div class="bj-alert__body"><p class="bj-alert__title">Succès</p><p class="bj-alert__text">Votre formulaire a été envoyé avec succès.</p></div></div>
            <div class="bj-alert bj-alert--warning"><div class="bj-alert__body"><p class="bj-alert__title">Attention</p><p class="bj-alert__text">Vérifiez les informations saisies.</p></div></div>
            <div class="bj-alert bj-alert--error"><div class="bj-alert__body"><p class="bj-alert__title">Erreur</p><p class="bj-alert__text">Une erreur est survenue.</p></div></div>
          </div>
        </div>
        <div class="bj-col-12 bj-col-lg-6" style="margin-bottom: var(--bj-spacing-6v)">
          <h3 class="bj-h5" style="margin-bottom: var(--bj-spacing-3v)">Cartes</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--bj-spacing-3v)">
            <div class="bj-card"><div class="bj-card__body"><h4 class="bj-card__title">Service en ligne</h4><p class="bj-card__text" style="font-size: var(--bj-fs-sm)">Effectuez vos démarches administratives en ligne.</p></div></div>
            <div class="bj-card"><div class="bj-card__body"><h4 class="bj-card__title">Documents officiels</h4><p class="bj-card__text" style="font-size: var(--bj-fs-sm)">Téléchargez vos documents administratifs.</p></div></div>
          </div>
        </div>
        <div class="bj-col-12 bj-col-lg-6" style="margin-bottom: var(--bj-spacing-6v)">
          <h3 class="bj-h5" style="margin-bottom: var(--bj-spacing-3v)">Formulaire</h3>
          <div style="background: var(--bj-bg-default); border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-sm); padding: var(--bj-spacing-4v)">
            <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-3v)">
              <label class="bj-label" for="demo-name">Nom complet</label>
              <input class="bj-input" type="text" id="demo-name" placeholder="Jean Dupont" />
            </div>
            <div class="bj-input-group" style="margin-bottom: var(--bj-spacing-3v)">
              <label class="bj-label" for="demo-email">Adresse e-mail</label>
              <input class="bj-input" type="email" id="demo-email" placeholder="jean@exemple.bj" />
            </div>
            <div class="bj-checkbox-group" style="margin-bottom: var(--bj-spacing-3v)">
              <label class="bj-checkbox"><input type="checkbox" /><span class="bj-checkbox__label">J'accepte les conditions d'utilisation</span></label>
            </div>
            <button class="bj-btn">Envoyer</button>
          </div>
        </div>
        <div class="bj-col-12 bj-col-lg-6" style="margin-bottom: var(--bj-spacing-6v)">
          <h3 class="bj-h5" style="margin-bottom: var(--bj-spacing-3v)">Onglets</h3>
          <div data-bj-tabs>
            <div class="bj-tabs__list" role="tablist">
              <button class="bj-tabs__tab" data-bj-tab role="tab" aria-selected="true">Particuliers</button>
              <button class="bj-tabs__tab" data-bj-tab role="tab">Entreprises</button>
              <button class="bj-tabs__tab" data-bj-tab role="tab">Collectivités</button>
            </div>
            <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel" data-bj-expanded>
              <p style="font-size: var(--bj-fs-sm); padding: var(--bj-spacing-4v)">Services destinés aux citoyens béninois : état civil, passeport, carte d'identité, actes de naissance.</p>
            </div>
            <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
              <p style="font-size: var(--bj-fs-sm); padding: var(--bj-spacing-4v)">Services pour les entreprises : création, fiscalité, douanes, marchés publics.</p>
            </div>
            <div class="bj-tabs__panel" data-bj-tab-panel role="tabpanel">
              <p style="font-size: var(--bj-fs-sm); padding: var(--bj-spacing-4v)">Services aux collectivités locales : budgets, aménagement du territoire.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Prêt pour la production -->
  <section class="bj-bg-alt" style="padding: var(--bj-spacing-12v) 0">
    <div class="bj-container">
      <div class="bj-grid-row bj-grid-row--gutters bj-grid-row--middle">
        <div class="bj-col-12 bj-col-lg-6">
          <h2 class="bj-h2">Prêt pour la production</h2>
          <p class="bj-text-lg" style="margin-bottom: var(--bj-spacing-4v)">Installez le DSBJ via npm et commencez à construire des interfaces conformes en quelques minutes.</p>
          <DocsCode code='npm install @gouvbj/dsbj' />
          <p style="margin-bottom: var(--bj-spacing-3v)">Ou importez directement en HTML :</p>
          <DocsCode :code='`<link rel="stylesheet" href="dsbj.css">\n<script src="dsbj.umd.js"><\/script>`' />
        </div>
        <div class="bj-col-12 bj-col-lg-6">
          <h3 class="bj-h4" style="margin-bottom: var(--bj-spacing-4v)">Caractéristiques</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--bj-spacing-3v)">
            <div v-for="feat in features" :key="feat.icon" class="bj-tile" style="padding: var(--bj-spacing-3v); text-align: center">
              <div class="bj-tile__icon"><i :class="feat.icon" style="font-size: 1.5rem; color: var(--bj-action-high)"></i></div>
              <div class="bj-tile__body"><h4 class="bj-tile__title" style="font-size: var(--bj-fs-sm)">{{ feat.label }}</h4></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DocsCard from '../components/DocsCard.vue'
import DocsCode from '../components/DocsCode.vue'

const features = [
  { icon: 'ri-layout-grid-line', label: '35 composants' },
  { icon: 'ri-moon-line', label: 'Thème clair/sombre' },
  { icon: 'ri-accessibility-line', label: 'WCAG 2.1 AA' },
  { icon: 'ri-code-s-slash-line', label: 'SCSS + TypeScript' },
  { icon: 'ri-feather-line', label: '78 Ko CSS' },
  { icon: 'ri-npmjs-line', label: 'Package npm' },
]
</script>
