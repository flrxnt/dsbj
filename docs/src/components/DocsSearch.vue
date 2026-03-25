<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { searchIndex, type SearchEntry } from '../data/searchIndex'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const router = useRouter()
const { t } = useI18n()

const query = ref('')
const activeIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const results = computed<SearchEntry[]>(() => {
  const q = normalize(query.value.trim())
  if (!q) return searchIndex.slice(0, 12)

  const terms = q.split(/\s+/)

  return searchIndex
    .map((entry) => {
      const haystack = normalize(
        `${entry.label} ${entry.section} ${entry.keywords.join(' ')}`
      )
      let score = 0
      for (const term of terms) {
        if (!haystack.includes(term)) return { entry, score: 0 }
        if (normalize(entry.label).includes(term)) score += 10
        if (normalize(entry.label).startsWith(term)) score += 5
        score += 1
      }
      return { entry, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.entry)
    .slice(0, 15)
})

const grouped = computed(() => {
  const groups: { section: string; items: SearchEntry[] }[] = []
  const map = new Map<string, SearchEntry[]>()

  for (const entry of results.value) {
    let arr = map.get(entry.section)
    if (!arr) {
      arr = []
      map.set(entry.section, arr)
      groups.push({ section: entry.section, items: arr })
    }
    arr.push(entry)
  }
  return groups
})

const flatResults = computed(() => results.value)

watch(() => props.open, (val) => {
  if (val) {
    query.value = ''
    activeIndex.value = 0
    nextTick(() => inputRef.value?.focus())
  }
})

watch(query, () => {
  activeIndex.value = 0
})

function go(entry: SearchEntry) {
  router.push(entry.path)
  emit('close')
}

function onKeydown(e: KeyboardEvent) {
  const len = flatResults.value.length
  if (!len) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % len
    scrollActive()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value - 1 + len) % len
    scrollActive()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const entry = flatResults.value[activeIndex.value]
    if (entry) go(entry)
  }
}

function scrollActive() {
  nextTick(() => {
    const el = document.querySelector('.docs-search__item--active')
    el?.scrollIntoView({ block: 'nearest' })
  })
}

function onOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('docs-search__overlay')) {
    emit('close')
  }
}

function onGlobalKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', onGlobalKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onGlobalKeydown)
})

function getFlatIndex(entry: SearchEntry): number {
  return flatResults.value.indexOf(entry)
}

const sectionIcons: Record<string, string> = {
  'Premiers pas': 'ri-rocket-line',
  'Fondamentaux': 'ri-palette-line',
  'Composants': 'ri-layout-3-line',
  'Vue': 'ri-vuejs-line',
  'React': 'ri-reactjs-line',
  'Modèles': 'ri-file-copy-line',
  'Showcases': 'ri-window-line',
}
</script>

<template>
  <Teleport to="body">
    <Transition name="docs-search-fade">
      <div v-if="open" class="docs-search__overlay" @click="onOverlayClick">
        <div class="docs-search" role="dialog" aria-modal="true" :aria-label="t('search.label')">
          <div class="docs-search__header">
            <i class="ri-search-line docs-search__icon" aria-hidden="true"></i>
            <input
              ref="inputRef"
              v-model="query"
              class="docs-search__input"
              type="search"
              :placeholder="t('search.placeholder')"
              autocomplete="off"
              @keydown="onKeydown"
            />
            <kbd class="docs-search__kbd">Esc</kbd>
          </div>
          <div class="docs-search__body" v-if="flatResults.length">
            <template v-for="group in grouped" :key="group.section">
              <p class="docs-search__section">
                <i :class="sectionIcons[group.section] || 'ri-file-line'" aria-hidden="true"></i>
                {{ group.section }}
              </p>
              <ul class="docs-search__list">
                <li
                  v-for="item in group.items"
                  :key="item.path"
                  class="docs-search__item"
                  :class="{ 'docs-search__item--active': getFlatIndex(item) === activeIndex }"
                  @click="go(item)"
                  @mouseenter="activeIndex = getFlatIndex(item)"
                >
                  <span class="docs-search__item-label">{{ item.label }}</span>
                  <i class="ri-arrow-right-s-line docs-search__item-arrow" aria-hidden="true"></i>
                </li>
              </ul>
            </template>
          </div>
          <div class="docs-search__empty" v-else-if="query.trim()">
            <i class="ri-search-eye-line" aria-hidden="true"></i>
            <p>{{ t('search.empty') }}</p>
          </div>
          <div class="docs-search__footer">
            <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> {{ t('search.navigate') }}</span>
            <span><kbd>&crarr;</kbd> {{ t('search.select') }}</span>
            <span><kbd>Esc</kbd> {{ t('search.close') }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
