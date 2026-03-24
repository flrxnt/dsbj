import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { routes } from './router'
import fr from './data/locales/fr.json'
import en from './data/locales/en.json'

import '@dsbj/dsbj.scss'
import './styles/docs.css'

function getStoredLang(): string {
  try {
    return globalThis.localStorage?.getItem('bj-docs-lang') || 'fr'
  } catch {
    return 'fr'
  }
}

const i18n = createI18n({
  legacy: false,
  locale: getStoredLang(),
  fallbackLocale: 'fr',
  messages: { fr, en },
})

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  async ({ app, router, isClient }) => {
    app.use(i18n)

    if (isClient) {
      const { initDSBJ } = await import('@dsbj/index')
      router.afterEach(() => {
        window.scrollTo({ top: 0, left: 0 })
        setTimeout(() => initDSBJ(), 50)
      })
    }
  },
)
