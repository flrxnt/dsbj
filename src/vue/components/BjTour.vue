<script lang="ts">
export interface TourStep {
  target: string
  title: string
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export interface BjTourProps {
  steps: TourStep[]
  modelValue?: boolean
}
</script>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'
import { BjSvgIcon } from '../icons'

const PADDING = 8

const props = withDefaults(defineProps<BjTourProps>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [payload: { step: number; total: number }]
  start: []
  end: []
}>()

const currentStep = ref(0)
const highlightStyle = ref<Record<string, string>>({})
const popoverStyle = ref<Record<string, string>>({})
const popoverRef = ref<HTMLElement | null>(null)

function positionPopover(targetRect: DOMRect, placement: string) {
  const gap = 12
  const popEl = popoverRef.value
  if (!popEl) return

  nextTick(() => {
    const pop = popEl.getBoundingClientRect()
    let top = 0
    let left = 0

    switch (placement) {
      case 'bottom':
        top = targetRect.bottom + gap + PADDING + window.scrollY
        left = targetRect.left + targetRect.width / 2 - pop.width / 2 + window.scrollX
        break
      case 'left':
        top = targetRect.top + targetRect.height / 2 - pop.height / 2 + window.scrollY
        left = targetRect.left - pop.width - gap - PADDING + window.scrollX
        break
      case 'right':
        top = targetRect.top + targetRect.height / 2 - pop.height / 2 + window.scrollY
        left = targetRect.right + gap + PADDING + window.scrollX
        break
      default:
        top = targetRect.top - pop.height - gap - PADDING + window.scrollY
        left = targetRect.left + targetRect.width / 2 - pop.width / 2 + window.scrollX
        break
    }

    left = Math.max(8, Math.min(left, window.innerWidth - pop.width - 8))
    top = Math.max(8, Math.min(top, window.innerHeight - pop.height - 8))

    popoverStyle.value = { top: `${top}px`, left: `${left}px` }
  })
}

function renderStep() {
  const step = props.steps[currentStep.value]
  if (!step) return

  const targetEl = document.querySelector<HTMLElement>(step.target)
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    requestAnimationFrame(() => {
      const rect = targetEl.getBoundingClientRect()
      highlightStyle.value = {
        display: '',
        top: `${rect.top + window.scrollY - PADDING}px`,
        left: `${rect.left + window.scrollX - PADDING}px`,
        width: `${rect.width + PADDING * 2}px`,
        height: `${rect.height + PADDING * 2}px`,
      }
      positionPopover(rect, step.placement || 'bottom')
    })
  } else {
    highlightStyle.value = { display: 'none' }
    popoverStyle.value = { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  }

  emit('change', { step: currentStep.value, total: props.steps.length })
}

function open() {
  currentStep.value = 0
  document.body.classList.add('bj-modal-open')
  emit('update:modelValue', true)
  emit('start')
  nextTick(renderStep)
}

function close() {
  document.body.classList.remove('bj-modal-open')
  emit('update:modelValue', false)
  emit('end')
}

function nextStep() {
  if (currentStep.value < props.steps.length - 1) {
    currentStep.value++
    renderStep()
  } else {
    close()
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    renderStep()
  }
}

function onKeydown(e: KeyboardEvent) {
  if (!props.modelValue) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') nextStep()
  else if (e.key === 'ArrowLeft') prevStep()
}

watch(() => props.modelValue, (val) => {
  if (val) open()
  else close()
})

onBeforeUnmount(() => {
  document.body.classList.remove('bj-modal-open')
})

defineExpose({ open, close, nextStep, prevStep })
</script>

<template>
  <slot name="trigger" :open="open" />

  <Teleport to="body">
    <template v-if="modelValue && steps.length">
      <div class="bj-tour-overlay" data-bj-expanded @keydown="onKeydown">
        <div class="bj-tour-overlay__backdrop" @click="close" />
      </div>

      <div class="bj-tour-highlight" :style="highlightStyle" />

      <div
        ref="popoverRef"
        class="bj-tour-popover"
        role="dialog"
        aria-label="Visite guidée"
        :style="popoverStyle"
      >
        <button class="bj-tour-popover__close" aria-label="Fermer la visite" @click="close">
          <BjSvgIcon name="closeLine" />
        </button>
        <div class="bj-tour-popover__header">
          <h3 class="bj-tour-popover__title">{{ steps[currentStep]?.title }}</h3>
          <span class="bj-tour-popover__step">{{ currentStep + 1 }}/{{ steps.length }}</span>
        </div>
        <div class="bj-tour-popover__body" v-html="steps[currentStep]?.content" />
        <div class="bj-tour-popover__footer">
          <div class="bj-tour-popover__progress">
            <span
              v-for="(_, i) in steps"
              :key="i"
              :class="[
                'bj-tour-popover__progress-dot',
                i === currentStep && 'bj-tour-popover__progress-dot--active',
                i < currentStep && 'bj-tour-popover__progress-dot--done',
              ]"
            />
          </div>
          <div class="bj-tour-popover__actions">
            <button
              v-if="currentStep > 0"
              class="bj-btn bj-btn--sm bj-btn--secondary"
              @click="prevStep"
            >
              Précédent
            </button>
            <button class="bj-btn bj-btn--sm" @click="nextStep">
              {{ currentStep === steps.length - 1 ? 'Terminer' : 'Suivant' }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </Teleport>
</template>
