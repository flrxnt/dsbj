<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsSection from '@docs/components/DocsSection.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import BjChatBubble from '@dsbj/vue/components/BjChatBubble.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'BjChatBubble',
      desc: 'Composant Vue pour les bulles de chat DSBJ. Prend en charge les variantes envoyé, reçu et système, avec avatar, horodatage et statut optionnels.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-variantes': 'Variantes',
      'section-props': 'Props',
      'section-a11y': 'Accessibilité',
      'prop-variant': 'sent | received (défaut) | system — direction et style de la bulle.',
      'prop-avatar': 'URL de l\'avatar de l\'expéditeur (optionnel).',
      'prop-sender': 'Nom de l\'expéditeur (optionnel).',
      'prop-time': 'Horodatage du message (optionnel).',
      'prop-status': 'sending | sent | read | error — indicateur de statut (optionnel).',
      'a11y-note': 'Envelopper les bulles dans un conteneur <code>role="list"</code>. Chaque bulle possède <code>role="listitem"</code> et un <code>aria-label</code> descriptif automatique.',
    },
    en: {
      title: 'BjChatBubble',
      desc: 'Vue component for DSBJ chat bubbles. Supports sent, received, and system variants, with optional avatar, timestamp, and status.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-variantes': 'Variants',
      'section-props': 'Props',
      'section-a11y': 'Accessibility',
      'prop-variant': 'sent | received (default) | system — bubble direction and style.',
      'prop-avatar': 'Sender avatar URL (optional).',
      'prop-sender': 'Sender name (optional).',
      'prop-time': 'Message timestamp (optional).',
      'prop-status': 'sending | sent | read | error — status indicator (optional).',
      'a11y-note': 'Wrap bubbles in a <code>role="list"</code> container. Each bubble has <code>role="listitem"</code> and an automatic descriptive <code>aria-label</code>.',
    },
  },
})

const codeUsage = `<script setup>
import { BjChatBubble } from '@flrxnt/dsbj/vue'
<\/script>

<template>
  <div role="list">
    <BjChatBubble variant="received" sender="Amina" time="10:32">
      Bonjour, comment puis-je vous aider ?
    </BjChatBubble>

    <BjChatBubble variant="sent" time="10:33" status="read">
      J'ai besoin d'informations sur mon dossier.
    </BjChatBubble>

    <BjChatBubble variant="system">
      Conversation démarrée
    </BjChatBubble>
  </div>
</template>`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'avatar', description: t('prop-avatar') },
  { name: 'sender', description: t('prop-sender') },
  { name: 'time', description: t('prop-time') },
  { name: 'status', description: t('prop-status') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="vue-chat-bubble-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="html" />
  </DocsSection>

  <DocsSection id="vue-chat-bubble-preview" :title="t('section-preview')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); padding: var(--bj-spacing-4v)">
      <BjChatBubble variant="received" sender="Amina" time="10:32">
        Bonjour, comment puis-je vous aider ?
      </BjChatBubble>
      <BjChatBubble variant="sent" time="10:33" status="read">
        J'ai besoin d'informations sur mon dossier.
      </BjChatBubble>
      <BjChatBubble variant="system">
        Conversation démarrée
      </BjChatBubble>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-chat-bubble-variantes" :title="t('section-variantes')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); padding: var(--bj-spacing-4v)">
      <BjChatBubble variant="received" sender="Bot" time="09:00">
        Message reçu
      </BjChatBubble>
      <BjChatBubble variant="sent" time="09:01" status="sent">
        Message envoyé
      </BjChatBubble>
      <BjChatBubble variant="sent" time="09:02" status="error">
        Erreur d'envoi
      </BjChatBubble>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="vue-chat-bubble-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="vue-chat-bubble-a11y" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
