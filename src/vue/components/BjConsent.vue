<script lang="ts">
export interface ConsentService {
  id: string
  name: string
  description?: string
  required?: boolean
}
export interface BjConsentProps {
  title?: string
  text?: string
  services?: ConsentService[]
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjConsentProps>(), {
  title: 'Gestion des cookies',
  text: 'Ce site utilise des cookies pour améliorer votre expérience.',
  services: () => [],
})

const emit = defineEmits<{
  accept: []
  refuse: []
  customize: [accepted: string[]]
}>()

const visible = ref(true)
const managerOpen = ref(false)
const accepted = ref<Set<string>>(new Set(
  props.services.filter(s => s.required).map(s => s.id)
))

function acceptAll() {
  accepted.value = new Set(props.services.map(s => s.id))
  visible.value = false
  emit('accept')
}

function refuseAll() {
  accepted.value = new Set(props.services.filter(s => s.required).map(s => s.id))
  visible.value = false
  emit('refuse')
}

function openManager() {
  managerOpen.value = true
}

function savePreferences() {
  managerOpen.value = false
  visible.value = false
  emit('customize', Array.from(accepted.value))
}

function toggleService(id: string) {
  const next = new Set(accepted.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  accepted.value = next
}
</script>

<template>
  <div
    v-if="visible"
    class="bj-consent-banner"
    data-bj-consent-banner
    data-bj-expanded
    role="dialog"
    aria-label="Consentement aux cookies"
  >
    <div class="bj-consent-banner__body">
      <div class="bj-consent-banner__header">
        <span class="bj-consent-banner__icon"><BjSvgIcon name="shieldCheckLine" /></span>
        <p class="bj-consent-banner__title">{{ title }}</p>
      </div>
      <p class="bj-consent-banner__text">{{ text }}</p>
      <slot />
      <div class="bj-consent-banner__actions">
        <button type="button" class="bj-btn" data-bj-consent-accept @click="acceptAll">
          Tout accepter
        </button>
        <button type="button" class="bj-btn bj-btn--secondary" data-bj-consent-refuse @click="refuseAll">
          Tout refuser
        </button>
        <button type="button" class="bj-btn bj-btn--tertiary" data-bj-consent-customize @click="openManager">
          Personnaliser
        </button>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="managerOpen" class="bj-consent-manager" style="display: flex">
      <div class="bj-consent-manager__dialog">
        <div class="bj-consent-manager__header">
          <h2 class="bj-consent-manager__title">Préférences de cookies</h2>
        </div>
        <div class="bj-consent-manager__body">
          <div v-for="service in services" :key="service.id" class="bj-consent-service">
            <div class="bj-consent-service__info">
              <p class="bj-consent-service__name">{{ service.name }}</p>
              <p v-if="service.description" class="bj-consent-service__desc">{{ service.description }}</p>
            </div>
            <label class="bj-toggle bj-consent-service__toggle">
              <input
                type="checkbox"
                class="bj-toggle__input"
                :checked="accepted.has(service.id)"
                :disabled="service.required"
                @change="toggleService(service.id)"
              />
            </label>
          </div>
        </div>
        <div class="bj-consent-manager__footer">
          <button type="button" class="bj-btn" @click="savePreferences">Enregistrer</button>
          <button type="button" class="bj-btn bj-btn--tertiary" @click="managerOpen = false">Annuler</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
