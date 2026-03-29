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
      desc: 'Composant React pour les bulles de chat DSBJ. Props variant, avatar, sender, time, status et children pour le contenu.',
      'section-usage': 'Utilisation',
      'section-preview': 'Aperçu',
      'section-props': 'Props',
      'section-a11y': 'Accessibilité',
      'prop-variant': 'sent | received (défaut) | system — direction et style.',
      'prop-avatar': 'URL de l\'avatar (optionnel).',
      'prop-sender': 'Nom de l\'expéditeur (optionnel).',
      'prop-time': 'Horodatage (optionnel).',
      'prop-status': 'sending | sent | read | error (optionnel).',
      'prop-children': 'Contenu du message.',
      'prop-className': 'Classe additionnelle.',
      'a11y-note': 'Envelopper dans un conteneur <code>role="list"</code>. Chaque bulle a <code>role="listitem"</code> et un <code>aria-label</code> automatique.',
    },
    en: {
      title: 'BjChatBubble',
      desc: 'React component for DSBJ chat bubbles. Props: variant, avatar, sender, time, status, and children for content.',
      'section-usage': 'Usage',
      'section-preview': 'Preview',
      'section-props': 'Props',
      'section-a11y': 'Accessibility',
      'prop-variant': 'sent | received (default) | system — direction and style.',
      'prop-avatar': 'Avatar URL (optional).',
      'prop-sender': 'Sender name (optional).',
      'prop-time': 'Timestamp (optional).',
      'prop-status': 'sending | sent | read | error (optional).',
      'prop-children': 'Message content.',
      'prop-className': 'Additional class.',
      'a11y-note': 'Wrap in a <code>role="list"</code> container. Each bubble has <code>role="listitem"</code> and an automatic <code>aria-label</code>.',
    },
  },
})

const codeUsage = `import { BjChatBubble } from '@flrxnt/dsbj/react'

export function ChatExample() {
  return (
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
  )
}`

const propsRows = computed(() => [
  { name: 'variant', description: t('prop-variant') },
  { name: 'avatar', description: t('prop-avatar') },
  { name: 'sender', description: t('prop-sender') },
  { name: 'time', description: t('prop-time') },
  { name: 'status', description: t('prop-status') },
  { name: 'children', description: t('prop-children') },
  { name: 'className', description: t('prop-className') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="react-chat-bubble-usage" :title="t('section-usage')">
    <DocsCode :code="codeUsage" lang="tsx" />
  </DocsSection>

  <DocsSection id="react-chat-bubble-preview" :title="t('section-preview')">
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

  <DocsSection id="react-chat-bubble-props" :title="t('section-props')">
    <DocsPropsTable :headers="['Prop', 'Description']" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="react-chat-bubble-a11y" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
