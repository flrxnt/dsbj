<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bj-footer" role="contentinfo">
    <div class="bj-container">
      <div class="bj-footer__bottom">
        <ul class="bj-footer__bottom-list">
          <li><RouterLink class="bj-footer__bottom-link" to="/mentions-legales">{{ t('footer.legal') }}</RouterLink></li>
          <li><RouterLink class="bj-footer__bottom-link" to="/donnees-personnelles">{{ t('footer.privacy') }}</RouterLink></li>
          <li><RouterLink class="bj-footer__bottom-link" to="/accessibilite">{{ t('footer.a11y') }}</RouterLink></li>
        </ul>
        <p class="bj-footer__copy">
          <span>{{ t('footer.copy') }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>
