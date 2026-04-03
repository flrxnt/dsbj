import { useCallback, useRef, useState, type Dispatch, type KeyboardEvent, type SetStateAction } from 'react'

import { BjSvgIcon, remixClassToIconName } from '../icons'

export type TreeNode = {
  id: string
  label: string
  icon?: string
  children?: TreeNode[]
  checked?: boolean
}

function collectChecked(nodes: TreeNode[]): string[] {
  const result: string[] = []
  for (const n of nodes) {
    if (n.checked) result.push(n.id)
    if (n.children?.length) result.push(...collectChecked(n.children))
  }
  return result
}

function flattenVisible(nodes: TreeNode[], expanded: Set<string>): string[] {
  const result: string[] = []
  for (const n of nodes) {
    result.push(n.id)
    if (n.children?.length && expanded.has(n.id)) {
      result.push(...flattenVisible(n.children, expanded))
    }
  }
  return result
}

function findNode(nodes: TreeNode[], id: string): TreeNode | undefined {
  for (const n of nodes) {
    if (n.id === id) return n
    if (n.children?.length) {
      const found = findNode(n.children, id)
      if (found) return found
    }
  }
  return undefined
}

function findParentNode(nodes: TreeNode[], id: string): TreeNode | undefined {
  for (const n of nodes) {
    if (n.children?.some(c => c.id === id)) return n
    if (n.children?.length) {
      const found = findParentNode(n.children, id)
      if (found) return found
    }
  }
  return undefined
}

export interface BjTreeviewProps {
  nodes: TreeNode[]
  checkbox?: boolean
  compact?: boolean
  onCheck?: (id: string, checked: boolean) => void
  onToggle?: (id: string, expanded: boolean) => void
  className?: string
}

interface BjTreeviewBranchProps extends BjTreeviewProps {
  expanded: Set<string>
  checkedSet: Set<string>
  setExpanded: Dispatch<SetStateAction<Set<string>>>
  setCheckedSet: Dispatch<SetStateAction<Set<string>>>
  focusedId: string | null
  isRoot?: boolean
}

function BjTreeviewBranch({
  nodes,
  checkbox = false,
  compact = false,
  onCheck,
  onToggle,
  className,
  expanded,
  checkedSet,
  setExpanded,
  setCheckedSet,
  focusedId,
  isRoot = false,
}: BjTreeviewBranchProps) {
  const toggleExpand = useCallback(
    (id: string) => {
      setExpanded(prev => {
        const next = new Set(prev)
        const wasExpanded = next.has(id)
        if (wasExpanded) next.delete(id)
        else next.add(id)
        onToggle?.(id, !wasExpanded)
        return next
      })
    },
    [onToggle, setExpanded],
  )

  const toggleCheck = useCallback(
    (id: string) => {
      setCheckedSet(prev => {
        const next = new Set(prev)
        const wasChecked = next.has(id)
        if (wasChecked) next.delete(id)
        else next.add(id)
        onCheck?.(id, !wasChecked)
        return next
      })
    },
    [onCheck, setCheckedSet],
  )

  const isExpanded = (id: string) => expanded.has(id)
  const isChecked = (id: string) => checkedSet.has(id)

  return (
    <ul
      className={
        isRoot
          ? ['bj-tree', compact && 'bj-tree--compact', checkbox && 'bj-tree--checkbox', className]
              .filter(Boolean)
              .join(' ')
          : 'bj-tree__branch'
      }
      role={isRoot ? 'tree' : 'group'}
      hidden={!isRoot ? undefined : undefined}
    >
      {nodes.map(node => (
        <li
          key={node.id}
          className="bj-tree__item"
          role="treeitem"
          data-node-id={node.id}
          aria-expanded={node.children?.length ? isExpanded(node.id) : undefined}
          tabIndex={focusedId === node.id ? 0 : -1}
        >
          <div className="bj-tree__item-content">
            {node.children?.length ? (
              <button
                type="button"
                className="bj-tree__toggle"
                aria-label={isExpanded(node.id) ? 'Réduire' : 'Développer'}
                aria-expanded={isExpanded(node.id)}
                data-bj-tree-toggle
                tabIndex={-1}
                onClick={() => toggleExpand(node.id)}
              >
                <BjSvgIcon name="arrowRightSLine" />
              </button>
            ) : (
              <span className="bj-tree__toggle-spacer" />
            )}
            {checkbox ? (
              <input
                type="checkbox"
                className="bj-tree__checkbox"
                checked={isChecked(node.id)}
                aria-label={node.label}
                tabIndex={-1}
                onChange={() => toggleCheck(node.id)}
              />
            ) : null}
            {node.icon ? (
              <span className="bj-tree__icon" aria-hidden="true">
                <BjSvgIcon name={remixClassToIconName(node.icon)} />
              </span>
            ) : null}
            <span className="bj-tree__label">{node.label}</span>
          </div>
          {node.children?.length ? (
            <BjTreeviewBranch
              nodes={node.children}
              checkbox={checkbox}
              compact={compact}
              onCheck={onCheck}
              onToggle={onToggle}
              expanded={expanded}
              checkedSet={checkedSet}
              setExpanded={setExpanded}
              setCheckedSet={setCheckedSet}
              focusedId={focusedId}
            />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export function BjTreeview({
  nodes,
  checkbox = false,
  compact = false,
  onCheck,
  onToggle,
  className,
}: BjTreeviewProps) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set())
  const [checkedSet, setCheckedSet] = useState<Set<string>>(() => new Set(collectChecked(nodes)))
  const [focusedId, setFocusedId] = useState<string | null>(nodes[0]?.id ?? null)
  const treeRef = useRef<HTMLDivElement>(null)

  function focusNode(id: string) {
    setFocusedId(id)
    requestAnimationFrame(() => {
      const el = treeRef.current?.querySelector<HTMLElement>(`[data-node-id="${id}"]`)
      el?.focus()
    })
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (!focusedId) return
    const visible = flattenVisible(nodes, expanded)
    const idx = visible.indexOf(focusedId)
    if (idx === -1) return

    const node = findNode(nodes, focusedId)
    if (!node) return

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault()
        if (idx < visible.length - 1) focusNode(visible[idx + 1])
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        if (idx > 0) focusNode(visible[idx - 1])
        break
      }
      case 'ArrowRight': {
        e.preventDefault()
        if (node.children?.length) {
          if (!expanded.has(node.id)) {
            setExpanded(prev => {
              const next = new Set(prev)
              next.add(node.id)
              onToggle?.(node.id, true)
              return next
            })
          } else if (node.children[0]) {
            focusNode(node.children[0].id)
          }
        }
        break
      }
      case 'ArrowLeft': {
        e.preventDefault()
        if (node.children?.length && expanded.has(node.id)) {
          setExpanded(prev => {
            const next = new Set(prev)
            next.delete(node.id)
            onToggle?.(node.id, false)
            return next
          })
        } else {
          const parent = findParentNode(nodes, focusedId)
          if (parent) focusNode(parent.id)
        }
        break
      }
      case 'Home': {
        e.preventDefault()
        if (visible[0]) focusNode(visible[0])
        break
      }
      case 'End': {
        e.preventDefault()
        if (visible.length) focusNode(visible[visible.length - 1])
        break
      }
      case 'Enter':
      case ' ': {
        e.preventDefault()
        if (checkbox) {
          setCheckedSet(prev => {
            const next = new Set(prev)
            const wasChecked = next.has(node.id)
            if (wasChecked) next.delete(node.id)
            else next.add(node.id)
            onCheck?.(node.id, !wasChecked)
            return next
          })
        } else if (node.children?.length) {
          setExpanded(prev => {
            const next = new Set(prev)
            const wasExpanded = next.has(node.id)
            if (wasExpanded) next.delete(node.id)
            else next.add(node.id)
            onToggle?.(node.id, !wasExpanded)
            return next
          })
        }
        break
      }
    }
  }

  return (
    <div ref={treeRef} onKeyDown={onKeyDown}>
      <BjTreeviewBranch
        nodes={nodes}
        checkbox={checkbox}
        compact={compact}
        onCheck={onCheck}
        onToggle={onToggle}
        className={className}
        expanded={expanded}
        checkedSet={checkedSet}
        setExpanded={setExpanded}
        setCheckedSet={setCheckedSet}
        focusedId={focusedId}
        isRoot
      />
    </div>
  )
}

BjTreeview.displayName = 'BjTreeview'
