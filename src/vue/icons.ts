import { h, type FunctionalComponent } from 'vue'
import { iconPaths } from '../shared/icon-paths'

export { iconPaths }

export const BjSvgIcon: FunctionalComponent<{ name: string }> = (props) =>
  h('svg', {
    viewBox: '0 0 24 24',
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    innerHTML: `<path d="${iconPaths[props.name]}"/>`,
  })

BjSvgIcon.displayName = 'BjSvgIcon'
