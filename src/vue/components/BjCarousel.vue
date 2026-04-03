<script lang="ts">
export interface CarouselSlide {
  src: string
  alt?: string
  caption?: string
}

export interface BjCarouselProps {
  slides: CarouselSlide[]
  autoplay?: boolean
  interval?: number
  showIndicators?: boolean
  showNavigation?: boolean
}
</script>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { BjSvgIcon } from '../icons'

const props = withDefaults(defineProps<BjCarouselProps>(), {
  autoplay: false,
  interval: 5000,
  showIndicators: true,
  showNavigation: true,
})

const emit = defineEmits<{
  change: [payload: { index: number; total: number }]
}>()

const current = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const total = computed(() => props.slides.length)
const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
}))

function goTo(index: number) {
  current.value = ((index % total.value) + total.value) % total.value
  emit('change', { index: current.value, total: total.value })
}

function next() { goTo(current.value + 1) }
function prev() { goTo(current.value - 1) }

function startAutoplay() {
  if (!props.autoplay || timer) return
  timer = setInterval(next, props.interval)
}

function stopAutoplay() {
  if (timer) { clearInterval(timer); timer = null }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') { e.preventDefault(); stopAutoplay(); prev() }
  else if (e.key === 'ArrowRight') { e.preventDefault(); stopAutoplay(); next() }
}

let touchStartX = 0
function onTouchStart(e: TouchEvent) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e: TouchEvent) {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) {
    stopAutoplay()
    diff > 0 ? next() : prev()
  }
}

watch(() => props.autoplay, (val) => { val ? startAutoplay() : stopAutoplay() })

onMounted(() => { startAutoplay() })
onBeforeUnmount(() => { stopAutoplay() })
</script>

<template>
  <div
    :class="['bj-carousel', autoplay && 'bj-carousel--auto']"
    role="region"
    aria-roledescription="carousel"
    aria-label="Carrousel"
    tabindex="0"
    v-bind="$attrs"
    @keydown="onKeydown"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @focusin="stopAutoplay"
    @focusout="startAutoplay"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div class="bj-carousel__track" :style="trackStyle">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="bj-carousel__slide"
        role="group"
        :aria-roledescription="'slide'"
        :aria-label="`Diapositive ${i + 1} sur ${total}`"
        :aria-hidden="i !== current"
      >
        <slot name="slide" :slide="slide" :index="i">
          <img :src="slide.src" :alt="slide.alt || ''" />
          <div v-if="slide.caption" class="bj-carousel__caption">{{ slide.caption }}</div>
        </slot>
      </div>
    </div>

    <template v-if="showNavigation && slides.length > 1">
      <button
        class="bj-carousel__nav bj-carousel__nav--prev"
        aria-label="Diapositive précédente"
        @click="stopAutoplay(); prev()"
      >
        <BjSvgIcon name="arrowLeftSLine" />
      </button>
      <button
        class="bj-carousel__nav bj-carousel__nav--next"
        aria-label="Diapositive suivante"
        @click="stopAutoplay(); next()"
      >
        <BjSvgIcon name="arrowRightSLine" />
      </button>
    </template>

    <div v-if="showIndicators && slides.length > 1" class="bj-carousel__indicators">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="['bj-carousel__dot', i === current && 'bj-carousel__dot--active']"
        :aria-label="`Aller à la diapositive ${i + 1}`"
        :aria-current="i === current || undefined"
        @click="stopAutoplay(); goTo(i)"
      />
    </div>
  </div>
</template>
