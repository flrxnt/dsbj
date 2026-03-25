import type { ComponentPropsWithoutRef } from 'react'

export type BjSkeletonProps = {
  variant?: 'text' | 'heading' | 'circle' | 'rect'
  size?: 'sm' | 'md' | 'lg'
} & ComponentPropsWithoutRef<'div'>

export function BjSkeleton({
  variant = 'text',
  size = 'md',
  className,
  ...rest
}: BjSkeletonProps) {
  const cls = [
    'bj-skeleton',
    `bj-skeleton--${variant}`,
    size !== 'md' && `bj-skeleton--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={cls} aria-hidden="true" {...rest} />
}

BjSkeleton.displayName = 'BjSkeleton'
