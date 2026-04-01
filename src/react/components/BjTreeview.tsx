import { useCallback, useState, type Dispatch, type SetStateAction } from 'react'

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
      className={[
        'bj-tree',
        compact && 'bj-tree--compact',
        checkbox && 'bj-tree--checkbox',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="tree"
    >
      {nodes.map(node => (
        <li key={node.id} className="bj-tree__item" role="treeitem">
          <div className="bj-tree__item-content">
            {node.children?.length ? (
              <button
                type="button"
                className="bj-tree__toggle"
                aria-expanded={isExpanded(node.id)}
                data-bj-tree-toggle
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
                onChange={() => toggleCheck(node.id)}
              />
            ) : null}
            {node.icon ? (
              <span className="bj-tree__icon">
                <BjSvgIcon name={remixClassToIconName(node.icon)} />
              </span>
            ) : null}
            <span className="bj-tree__label">{node.label}</span>
          </div>
          {node.children?.length ? (
            <ul className="bj-tree__branch" hidden={!isExpanded(node.id)} role="group">
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
              />
            </ul>
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

  return (
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
    />
  )
}

BjTreeview.displayName = 'BjTreeview'
