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
      title: 'BjDashboardSidebar',
      desc: 'Sidebar React pour tableaux de bord : mêmes props que la version Vue, mais le bas de panneau passe par la prop <code class="bj-code">footer</code> (ReactNode) au lieu d’un slot.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu par défaut',
      'section-compact': 'Mode compact',
      'section-brand': 'Branding : texte, image, lien',
      'section-no-title': 'Section sans titre',
      'section-nested': 'Liens enfants (collapsible)',
      'section-footer': 'Prop footer',
      'section-cross': 'Combinaison : compact + footer + sous-menu',
      'section-props': 'Props',
      'desc-compact': 'Identique au HTML/CSS : largeur réduite, libellés masqués, icônes centrées.',
      'desc-brand': '<code class="bj-code">brandHref</code> rend la zone marque cliquable ; logo et texte restent optionnels.',
      "desc-no-title": "Une section peut être <code class=\"bj-code\">{'{'} links: [...] {'}'}</code> sans <code class=\"bj-code\">title</code>.",
      'desc-nested': 'Les entrées avec <code class="bj-code">children</code> ouvrent un sous-menu (état local par item, comme en Vue).',
      'desc-footer': 'Passez un <code class="bj-code">ReactNode</code> via la prop <code class="bj-code">footer</code> pour le même emplacement que le slot Vue.',
      'desc-cross': 'Compact + arborescence + footer dans un seul composant.',
      'prop-brandText': 'Texte de la marque.',
      'prop-brandImg': 'URL du logo.',
      'prop-brandHref': 'URL du bloc branding.',
      "prop-sections": "Sections <code class=\"bj-code\">{'{'} title?, links {'}'}</code> avec liens optionnellement imbriqués.",
      'prop-compact': 'Mode compact.',
      'prop-footer': 'Contenu du pied (ReactNode).',
      'prop-aside': 'Autres props natives de <code class="bj-code">&lt;aside&gt;</code> (spread).',
    },
    en: {
      title: 'BjDashboardSidebar',
      desc: 'React dashboard sidebar: same props as Vue, but the bottom area uses a <code class="bj-code">footer</code> ReactNode prop instead of a slot.',
      'section-usage': 'Usage',
      'section-preview': 'Default preview',
      'section-compact': 'Compact mode',
      'section-brand': 'Branding: text, image, link',
      'section-no-title': 'Section without title',
      'section-nested': 'Nested links (collapsible)',
      'section-footer': 'footer prop',
      'section-cross': 'Combination: compact + footer + nested',
      'section-props': 'Props',
      'desc-compact': 'Same as HTML/CSS: narrow width, hidden labels, centered icons.',
      'desc-brand': '<code class="bj-code">brandHref</code> makes the brand block a link; logo and text remain optional.',
      "desc-no-title": "A section may be <code class=\"bj-code\">{'{'} links: [...] {'}'}</code> without <code class=\"bj-code\">title</code>.",
      'desc-nested': 'Items with <code class="bj-code">children</code> reveal a nested list (local open state per item, like Vue).',
      'desc-footer': 'Pass a <code class="bj-code">ReactNode</code> through the <code class="bj-code">footer</code> prop for the same placement as the Vue slot.',
      'desc-cross': 'Compact layout, nested links, and footer together.',
      'prop-brandText': 'Brand text.',
      'prop-brandImg': 'Logo URL.',
      'prop-brandHref': 'Branding block href.',
      "prop-sections": "<code class=\"bj-code\">{'{'} title?, links {'}'}</code> sections with optional nested links.",
      'prop-compact': 'Compact mode.',
      'prop-footer': 'Footer ReactNode.',
      'prop-aside': 'Additional native <code class="bj-code">&lt;aside&gt;</code> props (spread).',
    },
  },
})

const codeUsage = `import { BjDashboardSidebar } from '@flrxnt/dsbj/react'

const sections = [
  {
    title: 'Principal',
    links: [
      { label: 'Tableau de bord', to: '/dashboard', icon: 'ri-dashboard-line', active: true },
      { label: 'Statistiques', to: '/stats', icon: 'ri-bar-chart-line' },
    ],
  },
]

export function Example() {
  return (
    <BjDashboardSidebar
      brandText="Mon App"
      brandImg="/sigle.svg"
      brandHref="/"
      sections={sections}
    />
  )
}`

const codeCompact = `<BjDashboardSidebar
  brandText="App"
  brandImg="/sigle.svg"
  brandHref="/"
  sections={sections}
  compact
/>`

const codeNoTitle = `const sections = [{ links: [
  { label: 'Inbox', to: '/inbox', icon: 'ri-inbox-line' },
] }]

<BjDashboardSidebar brandText="Mail" sections={sections} />`

const codeNested = `const sections = [{
  title: 'Projet',
  links: [{
    label: 'Fichiers',
    to: '/files',
    icon: 'ri-folder-line',
    children: [
      { label: 'Notes', to: '/files/notes', icon: 'ri-file-text-line' },
    ],
  }],
}]

<BjDashboardSidebar sections={sections} />`

const codeFooter = `<BjDashboardSidebar
  sections={sections}
  brandText="Espace"
  footer={<p className="bj-text-sm" style={{ margin: 0 }}>user@example.com</p>}
/>`

const codeCross = `<BjDashboardSidebar
  compact
  brandText="CRM"
  brandImg="/sigle.svg"
  sections={sectionsWithNested}
  footer={<i className="ri-shield-user-line" aria-hidden />}
/>`

const propsRows = computed(() => [
  { name: 'brandText', description: t('prop-brandText') },
  { name: 'brandImg', description: t('prop-brandImg') },
  { name: 'brandHref', description: t('prop-brandHref') },
  { name: 'sections', description: t('prop-sections') },
  { name: 'compact', description: t('prop-compact') },
  { name: 'footer', description: t('prop-footer') },
  { name: '…', description: t('prop-aside') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="react-dashboard-sidebar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="height: 22rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%;">
          <a class="bj-dashboard-sidebar__brand" href="#" @click.prevent>
            <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            <span class="bj-dashboard-sidebar__brand-text">Mon App</span>
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
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-compact" :title="t('section-compact')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-compact')" />
    <DocsPreview>
      <div style="height: 18rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
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
    <DocsCode :code="codeCompact" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-brand" :title="t('section-brand')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-brand')" />
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: stretch;">
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
                      <i class="ri-inbox-line bj-dashboard-sidebar__link-icon"></i>
                      <span class="bj-dashboard-sidebar__link-label">Inbox</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
        <div style="height: 14rem; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
          <aside class="bj-dashboard-sidebar" style="position: relative; height: 100%; width: 12rem;">
            <a class="bj-dashboard-sidebar__brand" href="#" @click.prevent>
              <img src="/sigle.svg" alt="" class="bj-dashboard-sidebar__brand-img">
            </a>
            <nav class="bj-dashboard-sidebar__nav" aria-label="Dashboard"></nav>
          </aside>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-no-title" :title="t('section-no-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-no-title')" />
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
    <DocsCode :code="codeNoTitle" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-nested" :title="t('section-nested')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-nested')" />
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
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="codeNested" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-footer" :title="t('section-footer')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-footer')" />
    <DocsPreview>
      <div style="height: 18rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
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
            <p class="bj-text-sm" style="margin: 0; color: var(--bj-text-alt)">connecté@exemple.fr</p>
          </div>
        </aside>
      </div>
    </DocsPreview>
    <DocsCode :code="codeFooter" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
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
    <DocsCode :code="codeCross" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-dashboard-sidebar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
