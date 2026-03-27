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
      title: 'BjConsent',
      desc: 'Composant Vue pour la bannière de consentement cookies DSBJ et la modale de personnalisation. Props title, text et services ; slot par défaut sous le texte ; événements accept, refuse et customize.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu (HTML)',
      'section-props': 'Props',
      'section-slot': 'Slot par défaut',
      'section-emits': 'Événements',
      'section-services': 'services : champs et required',
      'section-combos': 'Combinaisons title × text × services',
      'section-vmodel': 'v-model',
      'section-preview-custom': 'Aperçu HTML (titre personnalisé)',
      'combo-intro':
        'Titre et texte par défaut du composant si omis ; services=[] affiche uniquement les trois boutons (la modale « Personnaliser » est vide de lignes).',
      'vmodel-desc': 'Pas de v-model : la visibilité est interne jusqu’aux actions accept / refuse / customize.',
      'prop-title': 'Titre de la bannière (défaut côté composant : « Gestion des cookies »).',
      'prop-text': 'Texte explicatif sous le titre (défaut fourni par le composant si non renseigné).',
      'prop-services':
        'ConsentService[] : id, name requis ; description et required optionnels. Les services required restent acceptés après « Tout refuser ».',
      'slot-default': 'Contenu optionnel inséré après le paragraphe text et avant les boutons (liens, précisions).',
      'emit-accept': 'Émis après « Tout accepter » (tous les services cochés, bannière masquée).',
      'emit-refuse': 'Émis après « Tout refuser » (uniquement les services required, bannière masquée).',
      'emit-customize':
        'Émis après « Enregistrer » dans la modale : charge utile string[] des ids acceptés (hors fermeture par Annuler).',
    },
    en: {
      title: 'BjConsent',
      desc:
        'Vue component for the DSBJ cookie banner and preferences modal. title, text, and services props; default slot under the copy; accept, refuse, and customize events.',
      'section-usage': 'Usage',
      'section-preview': 'Preview (HTML)',
      'section-props': 'Props',
      'section-slot': 'Default slot',
      'section-emits': 'Events',
      'section-services': 'services: fields and required',
      'section-combos': 'title × text × services combinations',
      'section-vmodel': 'v-model',
      'section-preview-custom': 'HTML preview (custom title)',
      'combo-intro':
        'Component defaults apply when title/text are omitted; services=[] still shows the three buttons (preferences modal has no service rows).',
      'vmodel-desc': 'No v-model: visibility is internal until accept / refuse / customize.',
      'prop-title': 'Banner title (component default: cookie management string).',
      'prop-text': 'Body copy under the title (component provides a default if omitted).',
      'prop-services':
        'ConsentService[]: id and name required; optional description and required. Required services stay on after “Refuse all”.',
      'slot-default': 'Optional content after the text paragraph and before the action buttons.',
      'emit-accept': 'Emitted after “Accept all” (all services on, banner hidden).',
      'emit-refuse': 'Emitted after “Refuse all” (only required services, banner hidden).',
      'emit-customize':
        'Emitted after “Save” in the modal: payload is string[] of accepted service ids (not on Cancel).',
    },
  },
})

const codeUsage = `<script setup>
import { BjConsent } from '@flrxnt/dsbj/vue'

const services = [
  { id: 'analytics', name: 'Mesure d’audience', description: 'Statistiques anonymes.' },
  { id: 'required', name: 'Indispensable', required: true },
]
<\/script>

<template>
  <BjConsent
    title="Gestion des cookies"
    text="Nous utilisons des cookies pour améliorer le site."
    :services="services"
    @accept="() => {}"
    @refuse="() => {}"
    @customize="() => {}"
  />
</template>`

const codeSlot = `<BjConsent title="Cookies" text="Description courte." :services="services">
  <p class="bj-text-sm">
    <a href="/politique" class="bj-link">Politique de confidentialité</a>
  </p>
</BjConsent>`

const codeEmits = `<script setup>
import { BjConsent } from '@flrxnt/dsbj/vue'

function onAccept() {
  /* tout accepté */
}
function onRefuse() {
  /* seuls les required */
}
function onCustomize(acceptedIds: string[]) {
  console.log('Ids acceptés', acceptedIds)
}
<\/script>

<template>
  <BjConsent
    :services="services"
    @accept="onAccept"
    @refuse="onRefuse"
    @customize="onCustomize"
  />
</template>`

const codeServices = `const services = [
  { id: 'necessary', name: 'Nécessaires', required: true },
  { id: 'stats', name: 'Statistiques', description: 'Mesure d’audience anonyme.' },
  { id: 'ads', name: 'Publicité', description: 'Optionnel', required: false },
]`

const codeCombos = `<!-- Défauts du composant (titre + texte intégrés) -->
<BjConsent :services="services" @accept="onA" @refuse="onR" @customize="onC" />

<!-- Texte marketing + liste riche -->
<BjConsent
  title="Cookies et traceurs"
  text="Nous respectons votre choix."
  :services="services"
  @accept="onA"
/>

<!-- Aucun service (personnaliser sans lignes) -->
<BjConsent title="Consentement" text="Pas de catégories." :services="[]" />`

const propsRows = computed(() => [
  { name: 'title', description: t('prop-title') },
  { name: 'text', description: t('prop-text') },
  { name: 'services', description: t('prop-services') },
])

const slotRows = computed(() => [{ name: 'default', description: t('slot-default') }])

const emitRows = computed(() => [
  { name: 'accept', description: t('emit-accept') },
  { name: 'refuse', description: t('emit-refuse') },
  { name: 'customize', description: t('emit-customize') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-consent-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-consent-preview" :title="t('section-preview')">
    <DocsPreview>
      <div
        class="bj-consent-banner"
        data-bj-consent-banner
        role="dialog"
        aria-label="Consentement aux cookies"
        style="position: relative"
      >
        <div class="bj-consent-banner__body">
          <div class="bj-consent-banner__header">
            <i class="bj-consent-banner__icon ri-shield-check-line" aria-hidden="true"></i>
            <p class="bj-consent-banner__title">Gestion des cookies</p>
          </div>
          <p class="bj-consent-banner__text">
            Ce site utilise des cookies pour améliorer votre expérience.
          </p>
          <div class="bj-consent-banner__actions">
            <button type="button" class="bj-btn" data-bj-consent-accept>Tout accepter</button>
            <button type="button" class="bj-btn bj-btn--secondary" data-bj-consent-refuse>
              Tout refuser
            </button>
            <button type="button" class="bj-btn bj-btn--tertiary" data-bj-consent-customize>
              Personnaliser
            </button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-consent-preview-custom" :title="t('section-preview-custom')">
    <DocsPreview>
      <div
        class="bj-consent-banner"
        data-bj-consent-banner
        role="dialog"
        aria-label="Consentement"
        style="position: relative"
      >
        <div class="bj-consent-banner__body">
          <div class="bj-consent-banner__header">
            <i class="bj-consent-banner__icon ri-shield-check-line" aria-hidden="true"></i>
            <p class="bj-consent-banner__title">Cookies et traceurs</p>
          </div>
          <p class="bj-consent-banner__text">Titre et texte entièrement fournis par l’app.</p>
          <div class="bj-consent-banner__actions">
            <button type="button" class="bj-btn">Tout accepter</button>
            <button type="button" class="bj-btn bj-btn--secondary">Tout refuser</button>
            <button type="button" class="bj-btn bj-btn--tertiary">Personnaliser</button>
          </div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-consent-combos" :title="t('section-combos')">
    <p class="bj-text-sm" style="max-width: 44rem; margin-bottom: var(--bj-spacing-2v)">{{ t('combo-intro') }}</p>
    <DocsCode :code="codeCombos" lang="html" />
  </DocsSection>

  <DocsSection id="vue-consent-vmodel" :title="t('section-vmodel')">
    <p class="bj-text-sm" style="max-width: 44rem">{{ t('vmodel-desc') }}</p>
  </DocsSection>

  <DocsSection id="vue-consent-slot" :title="t('section-slot')">
    <DocsPropsTable :headers="['Slot', 'Description']" :rows="slotRows" />
    <DocsCode :code="codeSlot" lang="html" />
  </DocsSection>

  <DocsSection id="vue-consent-emits" :title="t('section-emits')">
    <DocsPropsTable :headers="['Événement', 'Description']" :rows="emitRows" />
    <DocsCode :code="codeEmits" lang="html" />
  </DocsSection>

  <DocsSection id="vue-consent-services" :title="t('section-services')">
    <DocsCode :code="codeServices" lang="typescript" />
  </DocsSection>

  <DocsSection id="vue-consent-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>
</template>
