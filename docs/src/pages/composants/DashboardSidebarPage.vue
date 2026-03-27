<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Dashboard Sidebar',
      desc: 'Navigation latérale pour tableaux de bord avec branding, sections de liens, items collapsibles et mode compact.',
      'sec-default': 'Sidebar par défaut',
      'sec-compact': 'Mode compact',
      'sec-brand': 'Variantes de branding',
      'sec-brand-desc':
        'Bloc <code class="bj-code">.bj-dashboard-sidebar__brand</code> en <code class="bj-code">&lt;a&gt;</code> si lien, sinon <code class="bj-code">&lt;div&gt;</code>. Logo et texte sont optionnels indépendamment.',
      'sec-no-title': 'Section sans titre',
      'sec-no-title-desc':
        'Omettre <code class="bj-code">.bj-dashboard-sidebar__section-title</code> pour un groupe de liens sans libellé de section.',
      'sec-nested': 'Liens imbriqués (collapsible)',
      'sec-nested-desc':
        'Un item avec sous-liens : bouton <code class="bj-code">.bj-dashboard-sidebar__btn</code>, <code class="bj-code">aria-expanded</code>, puis <code class="bj-code">.bj-dashboard-sidebar__sublist</code> pour les enfants.',
      'sec-footer': 'Pied de sidebar',
      'sec-footer-desc': 'Zone <code class="bj-code">.bj-dashboard-sidebar__footer</code> sous la navigation.',
      'sec-cross': 'Combinaison : compact + footer + sous-menu',
      'sec-classes': 'Classes CSS',
      'class-root': 'Conteneur principal de la sidebar',
      'class-compact': 'Modificateur : mode compact, icônes seules',
      'class-brand': 'Zone de branding (logo + texte)',
      'class-brand-img': 'Image du logo',
      'class-brand-text': 'Texte de la marque',
      'class-nav': 'Zone de navigation scrollable',
      'class-section': 'Groupe de liens',
      'class-section-title': 'Titre de section (uppercase)',
      'class-list': 'Liste de liens',
      'class-item': 'Élément de liste',
      'class-link': 'Lien de navigation',
      'class-link-active': 'Modificateur : lien actif',
      'class-link-icon': 'Icône du lien',
      'class-link-label': 'Libellé du lien',
      'class-btn': 'Bouton collapsible',
      'class-sublist': 'Sous-liste de liens',
      'class-footer': 'Pied de la sidebar',
    },
    en: {
      title: 'Dashboard Sidebar',
      desc: 'Side navigation for dashboards with branding, link sections, collapsible items and compact mode.',
      'sec-default': 'Default sidebar',
      'sec-compact': 'Compact mode',
      'sec-brand': 'Branding variants',
      'sec-brand-desc':
        'The <code class="bj-code">.bj-dashboard-sidebar__brand</code> block is an <code class="bj-code">&lt;a&gt;</code> when linked, otherwise a <code class="bj-code">&lt;div&gt;</code>. Logo and text are each optional.',
      'sec-no-title': 'Section without title',
      'sec-no-title-desc':
        'Omit <code class="bj-code">.bj-dashboard-sidebar__section-title</code> for a link group with no section label.',
      'sec-nested': 'Nested links (collapsible)',
      'sec-nested-desc':
        'An item with children: a <code class="bj-code">.bj-dashboard-sidebar__btn</code> button, <code class="bj-code">aria-expanded</code>, then <code class="bj-code">.bj-dashboard-sidebar__sublist</code> for child links.',
      'sec-footer': 'Sidebar footer',
      'sec-footer-desc': 'The <code class="bj-code">.bj-dashboard-sidebar__footer</code> area below the nav.',
      'sec-cross': 'Combination: compact + footer + nested',
      'sec-classes': 'CSS classes',
      'class-root': 'Main sidebar container',
      'class-compact': 'Modifier: compact mode, icons only',
      'class-brand': 'Branding area (logo + text)',
      'class-brand-img': 'Logo image',
      'class-brand-text': 'Brand text',
      'class-nav': 'Scrollable navigation area',
      'class-section': 'Link group',
      'class-section-title': 'Section title (uppercase)',
      'class-list': 'Link list',
      'class-item': 'List item',
      'class-link': 'Navigation link',
      'class-link-active': 'Modifier: active link',
      'class-link-icon': 'Link icon',
      'class-link-label': 'Link label',
      'class-btn': 'Collapsible button',
      'class-sublist': 'Nested link list',
      'class-footer': 'Sidebar footer',
    },
  },
})

const htmlCode = `<aside class="bj-dashboard-sidebar">
  <a class="bj-dashboard-sidebar__brand" href="/">
    <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
    <span class="bj-dashboard-sidebar__brand-text">Mon Dashboard</span>
  </a>
  <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
    <div class="bj-dashboard-sidebar__section">
      <p class="bj-dashboard-sidebar__section-title">Principal</p>
      <ul class="bj-dashboard-sidebar__list">
        <li class="bj-dashboard-sidebar__item">
          <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page">
            <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon"></i>
            <span class="bj-dashboard-sidebar__link-label">Tableau de bord</span>
          </a>
        </li>
        <li class="bj-dashboard-sidebar__item">
          <a class="bj-dashboard-sidebar__link" href="#">
            <i class="ri-bar-chart-line bj-dashboard-sidebar__link-icon"></i>
            <span class="bj-dashboard-sidebar__link-label">Statistiques</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</aside>`

const htmlCompact = `<aside class="bj-dashboard-sidebar bj-dashboard-sidebar--compact">
  <a class="bj-dashboard-sidebar__brand" href="/">
    <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
    <span class="bj-dashboard-sidebar__brand-text">App</span>
  </a>
  <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
    <div class="bj-dashboard-sidebar__section">
      <p class="bj-dashboard-sidebar__section-title">Menu</p>
      <ul class="bj-dashboard-sidebar__list">
        <li class="bj-dashboard-sidebar__item">
          <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page">
            <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon"></i>
            <span class="bj-dashboard-sidebar__link-label">Accueil</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</aside>`

const htmlBrandTextOnly = `<aside class="bj-dashboard-sidebar">
  <div class="bj-dashboard-sidebar__brand">
    <span class="bj-dashboard-sidebar__brand-text">Texte seul</span>
  </div>
  <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">…</nav>
</aside>`

const htmlNoTitle = `<div class="bj-dashboard-sidebar__section">
  <ul class="bj-dashboard-sidebar__list">
    <li class="bj-dashboard-sidebar__item">
      <a class="bj-dashboard-sidebar__link" href="#">
        <i class="ri-inbox-line bj-dashboard-sidebar__link-icon"></i>
        <span class="bj-dashboard-sidebar__link-label">Boîte de réception</span>
      </a>
    </li>
  </ul>
</div>`

const htmlNested = `<li class="bj-dashboard-sidebar__item">
  <button type="button" class="bj-dashboard-sidebar__btn" aria-expanded="true">
    <i class="ri-folder-line bj-dashboard-sidebar__link-icon"></i>
    <span class="bj-dashboard-sidebar__link-label">Dossiers</span>
  </button>
  <ul class="bj-dashboard-sidebar__sublist">
    <li class="bj-dashboard-sidebar__item">
      <a class="bj-dashboard-sidebar__link" href="#">
        <i class="ri-file-line bj-dashboard-sidebar__link-icon"></i>
        <span class="bj-dashboard-sidebar__link-label">Rapport Q1</span>
      </a>
    </li>
    <li class="bj-dashboard-sidebar__item">
      <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page">
        <i class="ri-file-line bj-dashboard-sidebar__link-icon"></i>
        <span class="bj-dashboard-sidebar__link-label">Rapport Q2</span>
      </a>
    </li>
  </ul>
</li>`

const htmlFooter = `<aside class="bj-dashboard-sidebar">
  …
  <div class="bj-dashboard-sidebar__footer">
    <p class="bj-text-sm" style="margin:0;color:var(--bj-text-alt)">Utilisateur · Déconnexion</p>
  </div>
</aside>`

const classesRows = computed(() => [
  { name: 'bj-dashboard-sidebar', description: t('class-root') },
  { name: 'bj-dashboard-sidebar--compact', description: t('class-compact') },
  { name: 'bj-dashboard-sidebar__brand', description: t('class-brand') },
  { name: 'bj-dashboard-sidebar__brand-img', description: t('class-brand-img') },
  { name: 'bj-dashboard-sidebar__brand-text', description: t('class-brand-text') },
  { name: 'bj-dashboard-sidebar__nav', description: t('class-nav') },
  { name: 'bj-dashboard-sidebar__section', description: t('class-section') },
  { name: 'bj-dashboard-sidebar__section-title', description: t('class-section-title') },
  { name: 'bj-dashboard-sidebar__list', description: t('class-list') },
  { name: 'bj-dashboard-sidebar__item', description: t('class-item') },
  { name: 'bj-dashboard-sidebar__link', description: t('class-link') },
  { name: 'bj-dashboard-sidebar__link--active', description: t('class-link-active') },
  { name: 'bj-dashboard-sidebar__link-icon', description: t('class-link-icon') },
  { name: 'bj-dashboard-sidebar__link-label', description: t('class-link-label') },
  { name: 'bj-dashboard-sidebar__btn', description: t('class-btn') },
  { name: 'bj-dashboard-sidebar__sublist', description: t('class-sublist') },
  { name: 'bj-dashboard-sidebar__footer', description: t('class-footer') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="sec-default" :title="t('sec-default')">
    <DocsPreview>
      <div style="height: 24rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <a class="bj-dashboard-sidebar__brand" href="#" @click.prevent>
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">Mon Dashboard</span>
          </a>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <p class="bj-dashboard-sidebar__section-title">Principal</p>
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page" @click.prevent>
                    <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Tableau de bord</span>
                  </a>
                </li>
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                    <i class="ri-bar-chart-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Statistiques</span>
                  </a>
                </li>
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                    <i class="ri-settings-3-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Paramètres</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlCode" />
  </DocsSection>

  <DocsSection id="sec-compact" :title="t('sec-compact')">
    <DocsPreview>
      <div style="height: 20rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar bj-dashboard-sidebar--compact" style="position: relative; height: 100%;">
          <a class="bj-dashboard-sidebar__brand" href="#" @click.prevent>
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">App</span>
          </a>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <p class="bj-dashboard-sidebar__section-title">Menu</p>
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page" @click.prevent>
                    <i class="ri-dashboard-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Accueil</span>
                  </a>
                </li>
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                    <i class="ri-bar-chart-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Stats</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlCompact" />
  </DocsSection>

  <DocsSection id="sec-brand" :title="t('sec-brand')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-brand-desc')" />
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: flex-start;">
        <div style="height: 14rem; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
          <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%; width: 14rem;">
            <div class="bj-dashboard-sidebar__brand">
              <span class="bj-dashboard-sidebar__brand-text">Texte seul</span>
            </div>
            <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
              <div class="bj-dashboard-sidebar__section">
                <ul class="bj-dashboard-sidebar__list">
                  <li class="bj-dashboard-sidebar__item">
                    <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                      <i class="ri-links-line bj-dashboard-sidebar__link-icon"></i>
                      <span class="bj-dashboard-sidebar__link-label">Lien</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
        <div style="height: 14rem; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
          <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%; width: 14rem;">
            <a class="bj-dashboard-sidebar__brand" href="#" @click.prevent>
              <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            </a>
            <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard"></nav>
          </aside>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlBrandTextOnly" />
  </DocsSection>

  <DocsSection id="sec-no-title" :title="t('sec-no-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-no-title-desc')" />
    <DocsPreview>
      <div style="height: 16rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <div class="bj-dashboard-sidebar__brand">
            <span class="bj-dashboard-sidebar__brand-text">Messagerie</span>
          </div>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page" @click.prevent>
                    <i class="ri-inbox-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Boîte de réception</span>
                  </a>
                </li>
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                    <i class="ri-send-plane-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Envoyés</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlNoTitle" />
  </DocsSection>

  <DocsSection id="sec-nested" :title="t('sec-nested')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-nested-desc')" />
    <DocsPreview>
      <div style="height: 22rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <div class="bj-dashboard-sidebar__brand">
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">Docs</span>
          </div>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <p class="bj-dashboard-sidebar__section-title">Contenu</p>
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <button type="button" class="bj-dashboard-sidebar__btn" aria-expanded="true">
                    <i class="ri-folder-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Dossiers</span>
                  </button>
                  <ul class="bj-dashboard-sidebar__sublist">
                    <li class="bj-dashboard-sidebar__item">
                      <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                        <i class="ri-file-line bj-dashboard-sidebar__link-icon"></i>
                        <span class="bj-dashboard-sidebar__link-label">Rapport Q1</span>
                      </a>
                    </li>
                    <li class="bj-dashboard-sidebar__item">
                      <a class="bj-dashboard-sidebar__link bj-dashboard-sidebar__link--active" href="#" aria-current="page" @click.prevent>
                        <i class="ri-file-line bj-dashboard-sidebar__link-icon"></i>
                        <span class="bj-dashboard-sidebar__link-label">Rapport Q2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                    <i class="ri-file-list-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Index</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlNested" />
  </DocsSection>

  <DocsSection id="sec-footer" :title="t('sec-footer')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('sec-footer-desc')" />
    <DocsPreview>
      <div style="height: 22rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <div class="bj-dashboard-sidebar__brand">
            <span class="bj-dashboard-sidebar__brand-text">Mon espace</span>
          </div>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                    <i class="ri-user-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Profil</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="bj-dashboard-sidebar__footer">
            <p class="bj-text-sm" style="margin: 0; color: var(--bj-text-alt)">connecté@exemple.fr · Déconnexion</p>
          </div>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="htmlFooter" />
  </DocsSection>

  <DocsSection id="sec-cross" :title="t('sec-cross')">
    <DocsPreview>
      <div style="height: 24rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar bj-dashboard-sidebar--compact" style="position: relative; height: 100%;">
          <a class="bj-dashboard-sidebar__brand" href="#" @click.prevent>
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">CRM</span>
          </a>
          <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard">
            <div class="bj-dashboard-sidebar__section">
              <p class="bj-dashboard-sidebar__section-title">Ventes</p>
              <ul class="bj-dashboard-sidebar__list">
                <li class="bj-dashboard-sidebar__item">
                  <button type="button" class="bj-dashboard-sidebar__btn" aria-expanded="true">
                    <i class="ri-team-line bj-dashboard-sidebar__link-icon"></i>
                    <span class="bj-dashboard-sidebar__link-label">Clients</span>
                  </button>
                  <ul class="bj-dashboard-sidebar__sublist">
                    <li class="bj-dashboard-sidebar__item">
                      <a class="bj-dashboard-sidebar__link" href="#" @click.prevent>
                        <i class="ri-user-star-line bj-dashboard-sidebar__link-icon"></i>
                        <span class="bj-dashboard-sidebar__link-label">VIP</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div class="bj-dashboard-sidebar__footer">
            <i class="ri-shield-user-line" style="font-size: 1.25rem; color: var(--bj-text-alt)" aria-hidden="true" />
          </div>
        </aside>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="sec-classes" :title="t('sec-classes')">
    <DocsPropsTable :rows="classesRows" />
  </DocsSection>
</template>
