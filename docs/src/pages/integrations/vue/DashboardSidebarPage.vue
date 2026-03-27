<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjDashboardSidebar } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjDashboardSidebar',
      desc: 'Sidebar de navigation pour tableaux de bord Vue : branding, sections, items collapsibles et mode compact. Slot nommé <code class="bj-code">footer</code> pour le bas de panneau.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu par défaut',
      'section-compact': 'Mode compact',
      'section-brand': 'Branding : texte, image, lien',
      'section-no-title': 'Section sans titre',
      'section-nested': 'Liens enfants (collapsible)',
      'section-footer': 'Slot footer',
      'section-cross': 'Combinaison : compact + footer + sous-menu',
      'section-props': 'Props',
      'desc-compact': 'La classe <code class="bj-code">bj-dashboard-sidebar--compact</code> masque libellés et titres ; gardez des icônes sur chaque lien.',
      'desc-brand': 'Toutes les props de marque sont optionnelles : texte seul, image seule, ou les deux ; <code class="bj-code">brand-href</code> rend le bloc en lien.',
      'desc-no-title': 'Une entrée de <code class="bj-code">sections</code> peut omettre <code class="bj-code">title</code> : seule la liste de liens est rendue.',
      'desc-nested': 'Si un lien possède <code class="bj-code">children</code>, un bouton repliable affiche les sous-liens (clé interne : <code class="bj-code">to</code> du parent).',
      'desc-footer': 'Le slot <code class="bj-code">#footer</code> est rendu dans <code class="bj-code">.bj-dashboard-sidebar__footer</code> lorsqu’il est fourni.',
      'desc-cross': 'Exemple combinant <code class="bj-code">compact</code>, un parent avec <code class="bj-code">children</code> et le slot footer.',
      'prop-brandText': 'Texte de la marque.',
      'prop-brandImg': 'URL de l’image du logo.',
      'prop-brandHref': 'Lien sur le bloc branding (sinon <code class="bj-code">&lt;div&gt;</code>).',
      "prop-sections": "Tableau de <code class=\"bj-code\">{'{'} title?, links[] {'}'}</code> ; chaque lien peut avoir <code class=\"bj-code\">children</code>.",
      'prop-compact': 'Mode compact (icônes seules, largeur réduite).',
      'prop-footer': 'Slot <code class="bj-code">footer</code> pour le contenu sous la navigation.',
      'prop-attrs': 'Attributs additionnels sur la racine <code class="bj-code">&lt;aside&gt;</code> (héritage Vue 3).',
    },
    en: {
      title: 'BjDashboardSidebar',
      desc: 'Vue dashboard sidebar: branding, sections, collapsible nested links and compact mode. Named <code class="bj-code">footer</code> slot for the bottom area.',
      'section-usage': 'Usage',
      'section-preview': 'Default preview',
      'section-compact': 'Compact mode',
      'section-brand': 'Branding: text, image, link',
      'section-no-title': 'Section without title',
      'section-nested': 'Nested links (collapsible)',
      'section-footer': 'Footer slot',
      'section-cross': 'Combination: compact + footer + nested',
      'section-props': 'Props',
      'desc-compact': '<code class="bj-code">bj-dashboard-sidebar--compact</code> hides labels and titles; keep icons on each link.',
      'desc-brand': 'All brand props are optional: text only, image only, or both; <code class="bj-code">brand-href</code> makes the block an anchor.',
      'desc-no-title': 'A <code class="bj-code">sections</code> entry may omit <code class="bj-code">title</code>: only the link list is rendered.',
      'desc-nested': 'When a link has <code class="bj-code">children</code>, a collapsible button reveals nested links (toggle key: parent <code class="bj-code">to</code>).',
      'desc-footer': 'The <code class="bj-code">#footer</code> slot renders inside <code class="bj-code">.bj-dashboard-sidebar__footer</code> when provided.',
      'desc-cross': 'Example mixing <code class="bj-code">compact</code>, a parent with <code class="bj-code">children</code>, and the footer slot.',
      'prop-brandText': 'Brand text.',
      'prop-brandImg': 'Logo image URL.',
      'prop-brandHref': 'Branding block href (otherwise a <code class="bj-code">&lt;div&gt;</code>).',
      "prop-sections": "Array of <code class=\"bj-code\">{'{'} title?, links[] {'}'}</code>; links may include <code class=\"bj-code\">children</code>.",
      'prop-compact': 'Compact mode (icon-only, narrow width).',
      'prop-footer': '<code class="bj-code">footer</code> slot for content below the nav.',
      'prop-attrs': 'Extra attributes on the root <code class="bj-code">&lt;aside&gt;</code> (Vue 3 fallthrough).',
    },
  },
})

const sectionsDefault = [
  {
    title: 'Principal',
    links: [
      { label: 'Tableau de bord', to: '#dash', icon: 'ri-dashboard-line', active: true },
      { label: 'Statistiques', to: '#stats', icon: 'ri-bar-chart-line' },
      { label: 'Paramètres', to: '#settings', icon: 'ri-settings-3-line' },
    ],
  },
]

const sectionsNoTitle = {
  links: [
    { label: 'Boîte de réception', to: '#inbox', icon: 'ri-inbox-line', active: true },
    { label: 'Envoyés', to: '#sent', icon: 'ri-send-plane-line' },
  ],
}

const sectionsNested = [
  {
    title: 'Contenu',
    links: [
      {
        label: 'Dossiers',
        to: '#folders',
        icon: 'ri-folder-line',
        children: [
          { label: 'Rapport Q1', to: '#q1', icon: 'ri-file-line' },
          { label: 'Rapport Q2', to: '#q2', icon: 'ri-file-line', active: true },
        ],
      },
      { label: 'Index', to: '#index', icon: 'ri-file-list-line' },
    ],
  },
]

const sectionsCross = [
  {
    title: 'Ventes',
    links: [
      {
        label: 'Clients',
        to: '#clients',
        icon: 'ri-team-line',
        children: [
          { label: 'Comptes VIP', to: '#vip', icon: 'ri-user-star-line' },
        ],
      },
    ],
  },
]

const codeUsage = `<script setup>
import { BjDashboardSidebar } from '@flrxnt/dsbj/vue'

const sections = [
  {
    title: 'Principal',
    links: [
      { label: 'Tableau de bord', to: '/dashboard', icon: 'ri-dashboard-line', active: true },
      { label: 'Statistiques', to: '/stats', icon: 'ri-bar-chart-line' },
    ],
  },
]
<\/script>

<template>
  <BjDashboardSidebar
    brand-text="Mon App"
    brand-img="/sigle.svg"
    brand-href="/"
    :sections="sections"
  />
</template>`

const codeCompact = `<BjDashboardSidebar
  brand-text="App"
  brand-img="/sigle.svg"
  brand-href="/"
  :sections="sections"
  compact
/>`

const codeNoTitle = `const sections = [
  {
    links: [
      { label: 'Inbox', to: '/inbox', icon: 'ri-inbox-line' },
    ],
  },
]

<BjDashboardSidebar brand-text="Mail" :sections="sections" />`

const codeNested = `const sections = [
  {
    title: 'Projet',
    links: [
      {
        label: 'Fichiers',
        to: '/files',
        icon: 'ri-folder-line',
        children: [
          { label: 'Notes', to: '/files/notes', icon: 'ri-file-text-line' },
        ],
      },
    ],
  },
]

<BjDashboardSidebar :sections="sections" />`

const codeFooter = `<BjDashboardSidebar :sections="sections" brand-text="Espace">
  <template #footer>
    <p class="bj-text-sm" style="margin:0">user@example.com</p>
  </template>
</BjDashboardSidebar>`

const codeCross = `<BjDashboardSidebar
  compact
  brand-text="CRM"
  brand-img="/sigle.svg"
  :sections="sectionsWithNested"
>
  <template #footer>
    <i class="ri-shield-user-line" aria-hidden="true" />
  </template>
</BjDashboardSidebar>`

const propsRows = computed(() => [
  { name: 'brandText', description: t('prop-brandText') },
  { name: 'brandImg', description: t('prop-brandImg') },
  { name: 'brandHref', description: t('prop-brandHref') },
  { name: 'sections', description: t('prop-sections') },
  { name: 'compact', description: t('prop-compact') },
  { name: 'footer (slot)', description: t('prop-footer') },
  { name: '…', description: t('prop-attrs') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)" v-html="t('desc')" />

  <DocsSection id="vue-dashboard-sidebar-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-preview" :title="t('section-preview')">
    <DocsPreview>
      <div style="height: 22rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <BjDashboardSidebar
          brand-text="Mon App"
          brand-img="/sigle.svg"
          brand-href="#"
          :sections="sectionsDefault"
          style="position: relative; height: 100%"
        />
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-compact" :title="t('section-compact')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-compact')" />
    <DocsPreview>
      <div style="height: 18rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <BjDashboardSidebar
          brand-text="App"
          brand-img="/sigle.svg"
          brand-href="#"
          :sections="sectionsDefault"
          compact
          style="position: relative; height: 100%"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeCompact" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-brand" :title="t('section-brand')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-brand')" />
    <DocsPreview>
      <div style="display: flex; flex-wrap: wrap; gap: var(--bj-spacing-4v); align-items: stretch;">
        <div style="height: 14rem; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
          <BjDashboardSidebar brand-text="Texte seul" :sections="[sectionsNoTitle]" style="position: relative; height: 100%; width: 14rem" />
        </div>
        <div style="height: 14rem; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
          <BjDashboardSidebar brand-img="/sigle.svg" brand-href="#" :sections="[]" style="position: relative; height: 100%; width: 12rem" />
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-no-title" :title="t('section-no-title')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-no-title')" />
    <DocsPreview>
      <div style="height: 16rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <BjDashboardSidebar brand-text="Messagerie" :sections="[sectionsNoTitle]" style="position: relative; height: 100%" />
      </div>
    </DocsPreview>
    <DocsCode :code="codeNoTitle" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-nested" :title="t('section-nested')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-nested')" />
    <DocsPreview>
      <div style="height: 22rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <BjDashboardSidebar
          brand-text="Docs"
          brand-img="/sigle.svg"
          :sections="sectionsNested"
          style="position: relative; height: 100%"
        />
      </div>
    </DocsPreview>
    <DocsCode :code="codeNested" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-footer" :title="t('section-footer')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-footer')" />
    <DocsPreview>
      <div style="height: 18rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <BjDashboardSidebar brand-text="Mon espace" :sections="[sectionsNoTitle]" style="position: relative; height: 100%">
          <template #footer>
            <p class="bj-text-sm" style="margin: 0; color: var(--bj-text-alt)">connecté@exemple.fr</p>
          </template>
        </BjDashboardSidebar>
      </div>
    </DocsPreview>
    <DocsCode :code="codeFooter" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-cross" :title="t('section-cross')">
    <p class="bj-text" style="max-width: 44rem; color: var(--bj-text-alt); margin-bottom: var(--bj-spacing-3v)" v-html="t('desc-cross')" />
    <DocsPreview>
      <div style="height: 22rem; display: flex; border: 1px solid var(--bj-border-subtle); border-radius: var(--bj-radius-md); overflow: hidden;">
        <BjDashboardSidebar
          compact
          brand-text="CRM"
          brand-img="/sigle.svg"
          brand-href="#"
          :sections="sectionsCross"
          style="position: relative; height: 100%"
        >
          <template #footer>
            <i class="ri-shield-user-line" style="font-size: 1.25rem; color: var(--bj-text-alt)" aria-hidden="true" />
          </template>
        </BjDashboardSidebar>
      </div>
    </DocsPreview>
    <DocsCode :code="codeCross" lang="html" />
  </DocsSection>

  <DocsSection id="vue-dashboard-sidebar-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
