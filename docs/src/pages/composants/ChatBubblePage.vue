<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import DocsA11yNote from '@docs/components/DocsA11yNote.vue'
import DocsCode from '@docs/components/DocsCode.vue'
import DocsPreview from '@docs/components/DocsPreview.vue'
import DocsPropsTable from '@docs/components/DocsPropsTable.vue'
import DocsSection from '@docs/components/DocsSection.vue'

const { t } = useI18n({
  messages: {
    fr: {
      title: 'Bulle de chat',
      desc: 'Bulle de message conversationnelle pour afficher des échanges de type messagerie. Variantes envoyé, reçu et système.',
      'section-exemples': 'Exemples',
      'section-variantes': 'Variantes',
      'section-etats': 'États',
      'section-classes-css': 'Classes CSS',
      'section-a11y': 'Accessibilité',
      'cls-base': 'Conteneur principal de la bulle.',
      'cls-avatar': 'Avatar de l\'expéditeur.',
      'cls-content': 'Zone de contenu (texte + métadonnées).',
      'cls-text': 'Texte du message.',
      'cls-time': 'Horodatage du message.',
      'cls-status': 'Indicateur de statut d\'envoi.',
      'cls-sent': 'Message envoyé (aligné à droite).',
      'cls-received': 'Message reçu (aligné à gauche).',
      'cls-system': 'Message système (centré, discret).',
      'cls-error': 'État d\'erreur d\'envoi.',
      'a11y-note': 'Utiliser <code>role="list"</code> sur le conteneur parent et <code>role="listitem"</code> sur chaque bulle. Fournir un <code>aria-label</code> descriptif incluant l\'expéditeur et l\'heure.',
    },
    en: {
      title: 'Chat Bubble',
      desc: 'Conversational message bubble for displaying messaging-style exchanges. Sent, received, and system variants.',
      'section-exemples': 'Examples',
      'section-variantes': 'Variants',
      'section-etats': 'States',
      'section-classes-css': 'CSS Classes',
      'section-a11y': 'Accessibility',
      'cls-base': 'Main bubble wrapper.',
      'cls-avatar': 'Sender avatar.',
      'cls-content': 'Content area (text + metadata).',
      'cls-text': 'Message text.',
      'cls-time': 'Message timestamp.',
      'cls-status': 'Send status indicator.',
      'cls-sent': 'Sent message (right-aligned).',
      'cls-received': 'Received message (left-aligned).',
      'cls-system': 'System message (centered, subtle).',
      'cls-error': 'Send error state.',
      'a11y-note': 'Use <code>role="list"</code> on the parent container and <code>role="listitem"</code> on each bubble. Provide a descriptive <code>aria-label</code> including sender and time.',
    },
  },
})

const codeReceived = `<div role="list">
  <div class="bj-chat-bubble bj-chat-bubble--received" role="listitem" aria-label="Message de Amina à 10:32">
    <div class="bj-chat-bubble__avatar">
      <img src="/avatar.jpg" alt="Amina" />
    </div>
    <div class="bj-chat-bubble__content">
      <span class="bj-chat-bubble__sender">Amina</span>
      <div class="bj-chat-bubble__text">Bonjour, comment puis-je vous aider ?</div>
      <div class="bj-chat-bubble__meta">
        <span class="bj-chat-bubble__time">10:32</span>
      </div>
    </div>
  </div>
</div>`

const codeSent = `<div class="bj-chat-bubble bj-chat-bubble--sent" role="listitem" aria-label="Message envoyé à 10:33">
  <div class="bj-chat-bubble__content">
    <div class="bj-chat-bubble__text">J'ai besoin d'informations sur mon dossier.</div>
    <div class="bj-chat-bubble__meta">
      <span class="bj-chat-bubble__time">10:33</span>
      <span class="bj-chat-bubble__status bj-chat-bubble__status--read">
        <i class="ri-check-double-line" aria-hidden="true"></i>
      </span>
    </div>
  </div>
</div>`

const codeSystem = `<div class="bj-chat-bubble bj-chat-bubble--system" role="listitem">
  <div class="bj-chat-bubble__content">
    <div class="bj-chat-bubble__text">Amina a rejoint la conversation</div>
  </div>
</div>`

const propsTableHeaders = computed((): [string, string] => ['Classe', 'Description'])

const propsRows = computed(() => [
  { name: 'bj-chat-bubble', description: t('cls-base') },
  { name: 'bj-chat-bubble__avatar', description: t('cls-avatar') },
  { name: 'bj-chat-bubble__content', description: t('cls-content') },
  { name: 'bj-chat-bubble__text', description: t('cls-text') },
  { name: 'bj-chat-bubble__time', description: t('cls-time') },
  { name: 'bj-chat-bubble__status', description: t('cls-status') },
  { name: 'bj-chat-bubble--sent', description: t('cls-sent') },
  { name: 'bj-chat-bubble--received', description: t('cls-received') },
  { name: 'bj-chat-bubble--system', description: t('cls-system') },
  { name: 'bj-chat-bubble--error', description: t('cls-error') },
])
</script>

<template>
  <h1 class="bj-h1" style="margin-top: var(--bj-spacing-4v)">{{ t('title') }}</h1>
  <p class="bj-text-lg" style="max-width: 44rem; color: var(--bj-text-alt)">{{ t('desc') }}</p>

  <DocsSection id="exemples-chat-bubble" :title="t('section-exemples')">
    <DocsPreview style="display: flex; flex-direction: column; gap: var(--bj-spacing-2v); padding: var(--bj-spacing-4v)">
      <div class="bj-chat-bubble bj-chat-bubble--received" role="listitem" aria-label="Message de Amina à 10:32">
        <div class="bj-chat-bubble__content">
          <span class="bj-chat-bubble__sender">Amina</span>
          <div class="bj-chat-bubble__text">Bonjour, comment puis-je vous aider ?</div>
          <div class="bj-chat-bubble__meta">
            <span class="bj-chat-bubble__time">10:32</span>
          </div>
        </div>
      </div>
      <div class="bj-chat-bubble bj-chat-bubble--sent" role="listitem" aria-label="Message envoyé à 10:33">
        <div class="bj-chat-bubble__content">
          <div class="bj-chat-bubble__text">J'ai besoin d'informations sur mon dossier.</div>
          <div class="bj-chat-bubble__meta">
            <span class="bj-chat-bubble__time">10:33</span>
            <span class="bj-chat-bubble__status bj-chat-bubble__status--read">
              <i class="ri-check-double-line" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="bj-chat-bubble bj-chat-bubble--system" role="listitem">
        <div class="bj-chat-bubble__content">
          <div class="bj-chat-bubble__text">Conversation démarrée</div>
        </div>
      </div>
    </DocsPreview>
  </DocsSection>

  <DocsSection id="variante-received" :title="t('section-variantes') + ' — Reçu'">
    <DocsPreview style="padding: var(--bj-spacing-4v)">
      <div class="bj-chat-bubble bj-chat-bubble--received" role="listitem">
        <div class="bj-chat-bubble__content">
          <span class="bj-chat-bubble__sender">Amina</span>
          <div class="bj-chat-bubble__text">Bonjour, comment puis-je vous aider ?</div>
          <div class="bj-chat-bubble__meta">
            <span class="bj-chat-bubble__time">10:32</span>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeReceived" />
  </DocsSection>

  <DocsSection id="variante-sent" :title="t('section-variantes') + ' — Envoyé'">
    <DocsPreview style="padding: var(--bj-spacing-4v)">
      <div class="bj-chat-bubble bj-chat-bubble--sent" role="listitem">
        <div class="bj-chat-bubble__content">
          <div class="bj-chat-bubble__text">J'ai besoin d'informations sur mon dossier.</div>
          <div class="bj-chat-bubble__meta">
            <span class="bj-chat-bubble__time">10:33</span>
            <span class="bj-chat-bubble__status bj-chat-bubble__status--read">
              <i class="ri-check-double-line" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSent" />
  </DocsSection>

  <DocsSection id="variante-system" :title="t('section-variantes') + ' — Système'">
    <DocsPreview style="padding: var(--bj-spacing-4v)">
      <div class="bj-chat-bubble bj-chat-bubble--system" role="listitem">
        <div class="bj-chat-bubble__content">
          <div class="bj-chat-bubble__text">Amina a rejoint la conversation</div>
        </div>
      </div>
    </DocsPreview>
    <DocsCode :code="codeSystem" />
  </DocsSection>

  <DocsSection id="classes-chat-bubble" :title="t('section-classes-css')">
    <DocsPropsTable :headers="propsTableHeaders" :rows="propsRows" />
  </DocsSection>

  <DocsSection id="a11y-chat-bubble" :title="t('section-a11y')">
    <DocsA11yNote>
      <span v-html="t('a11y-note')" />
    </DocsA11yNote>
  </DocsSection>
</template>
