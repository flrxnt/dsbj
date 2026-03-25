<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const intervalMS = 60 * 60 * 1000

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW({
  onRegisteredSW(swUrl, registration) {
    if (!registration) return
    setInterval(async () => {
      if (registration.installing || !navigator) return
      if ('connection' in navigator && !navigator.onLine) return
      const resp = await fetch(swUrl, {
        cache: 'no-store',
        headers: { 'cache-control': 'no-cache' },
      })
      if (resp.status === 200) await registration.update()
    }, intervalMS)
  },
})

function close() {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <Transition name="pwa-toast">
    <div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
      <div class="pwa-toast__body">
        <i v-if="offlineReady && !needRefresh" class="ri-wifi-off-line pwa-toast__icon" />
        <i v-else class="ri-refresh-line pwa-toast__icon" />
        <p class="pwa-toast__text">
          <template v-if="needRefresh">
            Une nouvelle version est disponible.
          </template>
          <template v-else>
            Le site est prêt à être consulté hors-ligne.
          </template>
        </p>
      </div>
      <div class="pwa-toast__actions">
        <button
          v-if="needRefresh"
          class="bj-btn bj-btn--sm"
          @click="updateServiceWorker()"
        >
          Mettre à jour
        </button>
        <button class="bj-btn bj-btn--sm bj-btn--tertiary" @click="close">
          Fermer
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.pwa-toast {
  position: fixed;
  bottom: var(--bj-spacing-4v);
  right: var(--bj-spacing-4v);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--bj-spacing-2v);
  padding: var(--bj-spacing-3v) var(--bj-spacing-4v);
  background: var(--bj-bg-elevated);
  border: 1px solid var(--bj-border-default);
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px rgb(0 0 0 / 0.12);
  max-width: 22rem;
}

.pwa-toast__body {
  display: flex;
  align-items: center;
  gap: var(--bj-spacing-2v);
}

.pwa-toast__icon {
  font-size: 1.25rem;
  color: var(--bj-action-high);
  flex-shrink: 0;
}

.pwa-toast__text {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--bj-text-default);
}

.pwa-toast__actions {
  display: flex;
  gap: var(--bj-spacing-2v);
  justify-content: flex-end;
}

.pwa-toast-enter-active,
.pwa-toast-leave-active {
  transition: all 0.3s ease;
}

.pwa-toast-enter-from,
.pwa-toast-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
