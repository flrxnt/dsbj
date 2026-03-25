import { ref, watchEffect, type Ref } from 'vue'
import { createHighlighter, type Highlighter } from 'shiki'

let instance: Promise<Highlighter> | null = null

function getHighlighter(): Promise<Highlighter> {
  if (!instance) {
    instance = createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['html', 'css', 'scss', 'javascript', 'typescript', 'jsx', 'tsx', 'bash', 'json'],
    })
  }
  return instance
}

export function useShiki(code: Ref<string> | string, lang: Ref<string> | string = 'html') {
  const highlighted = ref('')

  if (typeof window === 'undefined') return { highlighted }

  watchEffect(async () => {
    const src = typeof code === 'string' ? code : code.value
    const language = typeof lang === 'string' ? lang : lang.value
    if (!src) return

    const hl = await getHighlighter()
    highlighted.value = hl.codeToHtml(src, {
      lang: language,
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    })
  })

  return { highlighted }
}
