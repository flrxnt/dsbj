<script lang="ts">
export interface TreeNode {
  id: string
  label: string
  icon?: string
  children?: TreeNode[]
  checked?: boolean
}
export interface BjTreeviewProps {
  nodes: TreeNode[]
  checkbox?: boolean
  compact?: boolean
}

export default { name: 'BjTreeview' }
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { BjSvgIcon } from '../icons'

function riKebabToCamel(s: string): string {
  return s.split('-').map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1))).join('')
}

function remixIconNameFromClassString(icon: string): string {
  const ri = icon.trim().match(/\bri-[a-z0-9-]+\b/)?.[0]
  if (!ri) return 'fileLine'
  return riKebabToCamel(ri.replace(/^ri-/, ''))
}

function hasRemixIconClass(icon: string): boolean {
  return /\bri-[a-z0-9-]+\b/.test(icon)
}

function extraClassesWithoutRi(icon: string): string {
  return icon
    .trim()
    .split(/\s+/)
    .filter(p => p && !p.startsWith('ri-'))
    .join(' ')
}

const props = withDefaults(defineProps<BjTreeviewProps>(), {
  checkbox: false,
  compact: false,
})

const emit = defineEmits<{
  check: [id: string, checked: boolean]
  toggle: [id: string, expanded: boolean]
}>()

const expanded = ref<Set<string>>(new Set())
const checked = ref<Set<string>>(new Set(
  collectChecked(props.nodes)
))

function collectChecked(nodes: TreeNode[]): string[] {
  const result: string[] = []
  for (const n of nodes) {
    if (n.checked) result.push(n.id)
    if (n.children) result.push(...collectChecked(n.children))
  }
  return result
}

function toggleExpand(id: string) {
  const next = new Set(expanded.value)
  const isExp = next.has(id)
  if (isExp) next.delete(id)
  else next.add(id)
  expanded.value = next
  emit('toggle', id, !isExp)
}

function toggleCheck(id: string) {
  const next = new Set(checked.value)
  const isChk = next.has(id)
  if (isChk) next.delete(id)
  else next.add(id)
  checked.value = next
  emit('check', id, !isChk)
}

function isExpanded(id: string) { return expanded.value.has(id) }
function isChecked(id: string) { return checked.value.has(id) }

function getAllVisibleItems(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>('[role="treeitem"]')).filter(el => {
    let parent = el.parentElement
    while (parent && parent !== root) {
      if (parent.hidden) return false
      parent = parent.parentElement
    }
    return true
  })
}

function onKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement
  const treeitem = target.closest('[role="treeitem"]') as HTMLElement | null
  if (!treeitem) return
  const treeRoot = (e.currentTarget as HTMLElement)
  const items = getAllVisibleItems(treeRoot)
  const idx = items.indexOf(treeitem)

  switch (e.key) {
    case 'ArrowDown': {
      e.preventDefault()
      if (idx < items.length - 1) items[idx + 1].focus()
      break
    }
    case 'ArrowUp': {
      e.preventDefault()
      if (idx > 0) items[idx - 1].focus()
      break
    }
    case 'ArrowRight': {
      e.preventDefault()
      const toggle = treeitem.querySelector('[data-bj-tree-toggle]') as HTMLElement | null
      if (toggle) {
        const nodeId = treeitem.dataset.nodeId
        if (nodeId && !isExpanded(nodeId)) {
          toggleExpand(nodeId)
        } else {
          const child = treeitem.querySelector('[role="group"] [role="treeitem"]') as HTMLElement | null
          child?.focus()
        }
      }
      break
    }
    case 'ArrowLeft': {
      e.preventDefault()
      const nodeId = treeitem.dataset.nodeId
      if (nodeId && isExpanded(nodeId)) {
        toggleExpand(nodeId)
      } else {
        const parentGroup = treeitem.parentElement?.closest('[role="treeitem"]') as HTMLElement | null
        parentGroup?.focus()
      }
      break
    }
    case 'Home': {
      e.preventDefault()
      if (items.length) items[0].focus()
      break
    }
    case 'End': {
      e.preventDefault()
      if (items.length) items[items.length - 1].focus()
      break
    }
    case 'Enter':
    case ' ': {
      e.preventDefault()
      const nodeId = treeitem.dataset.nodeId
      if (!nodeId) break
      if (props.checkbox) {
        toggleCheck(nodeId)
      } else {
        const toggle = treeitem.querySelector('[data-bj-tree-toggle]') as HTMLElement | null
        if (toggle) toggleExpand(nodeId)
      }
      break
    }
  }
}
</script>

<template>
  <ul
    class="bj-tree"
    :class="{
      'bj-tree--compact': compact,
      'bj-tree--checkbox': checkbox,
    }"
    role="tree"
    v-bind="$attrs"
    @keydown="onKeydown"
  >
    <li
      v-for="(node, i) in nodes"
      :key="node.id"
      class="bj-tree__item"
      role="treeitem"
      :data-node-id="node.id"
      :tabindex="i === 0 ? 0 : -1"
      :aria-expanded="node.children?.length ? isExpanded(node.id) : undefined"
    >
      <div class="bj-tree__item-content">
        <button
          v-if="node.children?.length"
          type="button"
          class="bj-tree__toggle"
          tabindex="-1"
          :aria-label="`${isExpanded(node.id) ? 'Réduire' : 'Développer'} ${node.label}`"
          data-bj-tree-toggle
          @click="toggleExpand(node.id)"
        >
          <BjSvgIcon name="arrowRightSLine" />
        </button>
        <span v-else class="bj-tree__toggle-spacer" />
        <input
          v-if="checkbox"
          type="checkbox"
          class="bj-tree__checkbox"
          tabindex="-1"
          :checked="isChecked(node.id)"
          :aria-label="node.label"
          @change="toggleCheck(node.id)"
        />
        <BjSvgIcon
          v-if="node.icon && hasRemixIconClass(node.icon)"
          class="bj-tree__icon"
          :class="extraClassesWithoutRi(node.icon) || undefined"
          :name="remixIconNameFromClassString(node.icon)"
        />
        <i
          v-else-if="node.icon"
          class="bj-tree__icon"
          :class="node.icon"
          aria-hidden="true"
        />
        <span class="bj-tree__label">{{ node.label }}</span>
      </div>
      <ul
        v-if="node.children?.length"
        class="bj-tree__branch"
        :hidden="!isExpanded(node.id)"
        role="group"
      >
        <BjTreeview
          :nodes="node.children"
          :checkbox="checkbox"
          :compact="compact"
          @check="(id, val) => emit('check', id, val)"
          @toggle="(id, val) => emit('toggle', id, val)"
        />
      </ul>
    </li>
  </ul>
</template>
