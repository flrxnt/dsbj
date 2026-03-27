<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { BjHeader } from '@flrxnt/dsbj/vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjHeader',
      desc: 'En-tête institutionnel avec marque, nom de service, outils et navigation ; menu mobile intégré. Expose menuOpen et toggleMenu pour un contrôle programmatique.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-serviceName': 'Prop serviceName',
      'section-serviceTagline': 'Prop serviceTagline',
      'section-service-both': 'serviceName + serviceTagline',
      'section-slot-brand': 'Slot brand',
      'section-slot-logo': 'Slot logo',
      'section-slot-tools': 'Slot tools',
      'section-slot-nav': 'Slot nav',
      'section-expose': 'Expose (menuOpen, toggleMenu)',
      'section-slots-table': 'Slots',
      'prop-serviceName': 'Titre du service affiché à côté du logo (dans le bloc marque par défaut).',
      'prop-serviceTagline': 'Sous-titre ou baseline sous le nom du service.',
      'slot-brand':
        'Remplace tout le bloc marque par défaut (lien + logo + textes). Utiliser pour une structure HTML personnalisée.',
      'slot-logo': 'Contenu du sigle ou image à l’intérieur du lien marque par défaut.',
      'slot-tools': 'Zone droite (liens, recherche, etc.) à côté du bouton menu.',
      'slot-nav': 'Éléments li à placer dans la liste de navigation (classes .bj-header__nav-item / .bj-header__nav-link).',
      'expose-desc':
        'Via une ref template, appelez <code>toggleMenu()</code> ou lisez <code>menuOpen</code> (ref) pour synchroniser avec votre logique.',
      'preview-service': 'Mon service',
      'preview-tagline': 'Portail des démarches',
      'preview-menu': 'Menu',
      'preview-nav-aria': 'Navigation principale',
      'preview-nav-home': 'Accueil',
      'preview-nav-services': 'Services',
      'preview-help': 'Aide',
      'preview-custom-brand': 'Marque personnalisée',
      'label-logo-placeholder': 'Logo',
      'expose-toggle-btn': 'toggleMenu()',
    },
    en: {
      title: 'BjHeader',
      desc: 'Institutional header with brand, service name, tools, and navigation; built-in mobile menu. Exposes menuOpen and toggleMenu for programmatic control.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-serviceName': 'serviceName prop',
      'section-serviceTagline': 'serviceTagline prop',
      'section-service-both': 'serviceName + serviceTagline',
      'section-slot-brand': 'brand slot',
      'section-slot-logo': 'logo slot',
      'section-slot-tools': 'tools slot',
      'section-slot-nav': 'nav slot',
      'section-expose': 'Expose (menuOpen, toggleMenu)',
      'section-slots-table': 'Slots',
      'prop-serviceName': 'Service title shown next to the logo (inside the default brand block).',
      'prop-serviceTagline': 'Subtitle or tagline under the service name.',
      'slot-brand': 'Replaces the entire default brand block (link + logo + text). Use for custom markup.',
      'slot-logo': 'Mark or image inside the default brand link.',
      'slot-tools': 'Right area (links, search, etc.) beside the menu button.',
      'slot-nav': 'li nodes for the nav list (use .bj-header__nav-item / .bj-header__nav-link).',
      'expose-desc':
        'With a template ref, call <code>toggleMenu()</code> or read <code>menuOpen</code> (a ref) to sync with your logic.',
      'preview-service': 'My service',
      'preview-tagline': 'Procedures portal',
      'preview-menu': 'Menu',
      'preview-nav-aria': 'Main navigation',
      'preview-nav-home': 'Home',
      'preview-nav-services': 'Services',
      'preview-help': 'Help',
      'preview-custom-brand': 'Custom brand',
      'label-logo-placeholder': 'Logo',
      'expose-toggle-btn': 'toggleMenu()',
    },
  },
})

const exposeHeaderRef = ref<{ toggleMenu: () => void } | null>(null)
function toggleExposeMenu() {
  exposeHeaderRef.value?.toggleMenu()
}

const codeUsage = `<script setup>
import { BjHeader } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <BjHeader service-name="Mon service" service-tagline="Portail des démarches">
    <template #logo>
      <span class="bj-logo bj-logo--md"><!-- mark --></span>
    </template>
    <template #tools>
      <a href="#" class="bj-header__tools-link">Aide</a>
    </template>
    <template #nav>
      <li class="bj-header__nav-item">
        <a class="bj-header__nav-link" href="#">Accueil</a>
      </li>
    </template>
  </BjHeader>
</template>`

const codeServiceName = `<BjHeader service-name="Service seul">
  <template #logo><span class="bj-logo bj-logo--md" /></template>
  <template #nav>
    <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="#">Accueil</a></li>
  </template>
</BjHeader>`

const codeServiceTagline = `<BjHeader service-name="Titre" service-tagline="Sous-titre affiché">
  <template #logo><span class="bj-logo bj-logo--md" /></template>
  <template #nav>
    <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="#">Accueil</a></li>
  </template>
</BjHeader>`

const codeBrandSlot = `<BjHeader>
  <template #brand>
    <a class="bj-header__brand" href="/custom">
      <strong>Marque personnalisée</strong>
    </a>
  </template>
  <template #nav>
    <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="#">Accueil</a></li>
  </template>
</BjHeader>`

const codeExpose = `<script setup>
import { ref } from 'vue'
import { BjHeader } from '@flrxnt/dsbj/vue'

const headerRef = ref<InstanceType<typeof BjHeader> | null>(null)

function openMenu() {
  headerRef.value?.toggleMenu()
}
<\/script>

<template>
  <BjHeader ref="headerRef" service-name="App">
    <template #logo><span class="bj-logo bj-logo--md" /></template>
    <template #nav>
      <li class="bj-header__nav-item"><a class="bj-header__nav-link" href="#">Accueil</a></li>
    </template>
  </BjHeader>
  <button type="button" class="bj-btn bj-btn--secondary" @click="openMenu">Ouvrir le menu</button>
</template>`

const propsRows = computed(() => [
  { name: 'serviceName', description: t('prop-serviceName') },
  { name: 'serviceTagline', description: t('prop-serviceTagline') },
])

const slotsRows = computed(() => [
  { name: '#brand', description: t('slot-brand') },
  { name: '#logo', description: t('slot-logo') },
  { name: '#tools', description: t('slot-tools') },
  { name: '#nav', description: t('slot-nav') },
])

</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-header-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-header-preview" :title="t('section-preview')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')" :service-tagline="t('preview-tagline')">
        <template #logo>
          <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" :aria-label="t('label-logo-placeholder')" />
        </template>
        <template #tools>
          <a href="#" class="bj-header__tools-link" @click.prevent>{{ t('preview-help') }}</a>
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-services') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-header-serviceName" :title="t('section-serviceName')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')">
        <template #logo>
          <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" />
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
    <DocsCode :code="codeServiceName" lang="html" />
  </DocsSection>

  <DocsSection id="vue-header-serviceTagline" :title="t('section-serviceTagline')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('prop-serviceTagline') }}</p>
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')" :service-tagline="t('preview-tagline')">
        <template #logo>
          <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" />
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
    <DocsCode :code="codeServiceTagline" lang="html" />
  </DocsSection>

  <DocsSection id="vue-header-service-both" :title="t('section-service-both')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')" :service-tagline="t('preview-tagline')">
        <template #logo>
          <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" />
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-services') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-header-slot-brand" :title="t('section-slot-brand')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader>
        <template #brand>
          <a class="bj-header__brand" href="#" @click.prevent>
            <strong>{{ t('preview-custom-brand') }}</strong>
          </a>
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
    <DocsCode :code="codeBrandSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-header-slot-logo" :title="t('section-slot-logo')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')">
        <template #logo>
          <img src="/sigle.svg" alt="" width="40" height="40" style="object-fit: contain" />
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-header-slot-tools" :title="t('section-slot-tools')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')">
        <template #logo>
          <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" />
        </template>
        <template #tools>
          <a href="#" class="bj-header__tools-link" @click.prevent>{{ t('preview-help') }}</a>
          <button type="button" class="bj-btn bj-btn--sm">Compte</button>
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-header-slot-nav" :title="t('section-slot-nav')">
    <DocsPreview style="overflow: hidden; padding: 0">
      <BjHeader :service-name="t('preview-service')">
        <template #logo>
          <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" />
        </template>
        <template #nav>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-home') }}</a>
          </li>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-nav-services') }}</a>
          </li>
          <li class="bj-header__nav-item">
            <a class="bj-header__nav-link" href="#" @click.prevent>{{ t('preview-help') }}</a>
          </li>
        </template>
      </BjHeader>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-header-expose" :title="t('section-expose')">
    <p class="bj-text" style="max-width: 44rem; margin-bottom: var(--bj-spacing-3v)" v-html="t('expose-desc')" />
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-3v); align-items: flex-start">
      <div style="overflow: hidden; width: 100%; padding: 0">
        <BjHeader ref="exposeHeaderRef" service-name="Expose demo">
          <template #logo>
            <span class="bj-logo bj-logo--md" style="min-width: 2.5rem; min-height: 2.5rem; display: inline-block; background: var(--bj-bg-alt); border-radius: var(--bj-radius-xs)" />
          </template>
          <template #nav>
            <li class="bj-header__nav-item">
              <a class="bj-header__nav-link" href="#" @click.prevent>A</a>
            </li>
            <li class="bj-header__nav-item">
              <a class="bj-header__nav-link" href="#" @click.prevent>B</a>
            </li>
          </template>
        </BjHeader>
      </div>
      <button type="button" class="bj-btn bj-btn--secondary" @click="toggleExposeMenu">{{ t('expose-toggle-btn') }}</button>
    </DocsPreview>
    <DocsCode :code="codeExpose" lang="html" />
  </DocsSection>

  <DocsSection id="vue-header-slots-table" :title="t('section-slots-table')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotsRows" />
  </DocsSection>

  <DocsSection id="vue-header-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
