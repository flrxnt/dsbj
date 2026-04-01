import { useMemo, type ComponentPropsWithoutRef } from 'react'

import { BjSvgIcon } from '../icons'

export type BjPaginationProps = Omit<ComponentPropsWithoutRef<'nav'>, 'onChange'> & {
  page: number
  total: number
  perPage?: number
  maxVisible?: number
  onChange: (page: number) => void
}

function buildPages(current: number, total: number, maxVisible: number): (number | '...')[] {
  const result: (number | '...')[] = []
  const half = Math.floor(maxVisible / 2)

  let start = Math.max(1, current - half)
  let end = Math.min(total, start + maxVisible - 1)

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }

  if (start > 1) {
    result.push(1)
    if (start > 2) result.push('...')
  }

  for (let i = start; i <= end; i++) result.push(i)

  if (end < total) {
    if (end < total - 1) result.push('...')
    result.push(total)
  }

  return result
}

export function BjPagination({
  page,
  total,
  perPage = 10,
  maxVisible = 5,
  onChange,
  className,
  ...rest
}: BjPaginationProps) {
  const totalPages = Math.ceil(total / perPage)

  const pages = useMemo(
    () => (totalPages > 0 ? buildPages(page, totalPages, maxVisible) : []),
    [page, totalPages, maxVisible],
  )

  function go(nextPage: number) {
    if (nextPage >= 1 && nextPage <= totalPages && nextPage !== page) {
      onChange(nextPage)
    }
  }

  return (
    <nav
      className={['bj-pagination', className].filter(Boolean).join(' ')}
      aria-label="Pagination"
      {...rest}
    >
      <button
        type="button"
        className={['bj-pagination__nav', page <= 1 && 'bj-pagination__nav--disabled']
          .filter(Boolean)
          .join(' ')}
        disabled={page <= 1}
        aria-label="Page précédente"
        onClick={() => go(page - 1)}
      >
        <BjSvgIcon name="arrowLeftSLine" />
      </button>
      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`e-${i}`} className="bj-pagination__ellipsis">
            ...
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={['bj-pagination__link', p === page && 'bj-pagination__link--active']
              .filter(Boolean)
              .join(' ')}
            aria-current={p === page ? 'page' : undefined}
            onClick={() => go(p)}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        className={['bj-pagination__nav', page >= totalPages && 'bj-pagination__nav--disabled']
          .filter(Boolean)
          .join(' ')}
        disabled={page >= totalPages || totalPages === 0}
        aria-label="Page suivante"
        onClick={() => go(page + 1)}
      >
        <BjSvgIcon name="arrowRightSLine" />
      </button>
    </nav>
  )
}

BjPagination.displayName = 'BjPagination'
