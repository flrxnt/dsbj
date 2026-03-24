<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const STORAGE_KEY = 'bj-consent'
const visible = ref(false)

function getConsent(): unknown {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
  } catch {
    return null
  }
}

function setConsent(value: Record<string, unknown>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch { /* noop */ }
}

function accept() {
  setConsent({ all: true, ts: Date.now() })
  visible.value = false
}

function refuse() {
  setConsent({ all: false, ts: Date.now() })
  visible.value = false
}

onMounted(() => {
  if (!getConsent()) {
    visible.value = true
  }
})
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="bj-consent-banner" data-bj-expanded style="display: block">
      <div class="bj-consent-banner__body">
        <div class="bj-consent-banner__header">
          <div class="bj-consent-banner__icon">
            <i class="ri-shield-check-line"></i>
          </div>
          <h2 class="bj-consent-banner__title">Gestion des cookies</h2>
        </div>
        <p class="bj-consent-banner__text">
          Ce site utilise des cookies pour améliorer votre expérience de navigation
          et mesurer l'audience. En cliquant sur « Tout accepter », vous acceptez
          l'utilisation de l'ensemble des cookies. Consultez notre
          <RouterLink to="/donnees-personnelles" style="color: var(--bj-action-high); text-decoration: underline">politique de données personnelles</RouterLink>
          pour en savoir plus.
        </p>
        <div class="bj-consent-banner__actions">
          <button type="button" class="bj-btn" @click="accept">Tout accepter</button>
          <button type="button" class="bj-btn bj-btn--secondary" @click="refuse">Tout refuser</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
