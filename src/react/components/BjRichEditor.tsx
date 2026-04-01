import {
  useRef,
  useCallback,
  useEffect,
  type ComponentPropsWithoutRef,
} from 'react'
import { BjSvgIcon } from '../icons'

export const TOOLBAR_ALL = [
  'heading', 'bold', 'italic', 'underline', 'strikethrough',
  'unorderedList', 'orderedList', 'indent', 'outdent',
  'alignLeft', 'alignCenter', 'alignRight', 'alignJustify',
  'link', 'unlink', 'image', 'video', 'table',
  'blockquote', 'codeBlock', 'removeFormat',
  'textColor', 'bgColor', 'horizontalRule', 'undo', 'redo',
] as const

export type BjRichEditorProps = {
  value?: string
  onChange?: (html: string) => void
  placeholder?: string
  disabled?: boolean
  toolbar?: string[]
  height?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'onChange'>

export function BjRichEditor({
  value = '',
  onChange,
  placeholder = '',
  disabled,
  toolbar = [...TOOLBAR_ALL],
  height,
  className,
  ...rest
}: BjRichEditorProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const isUpdating = useRef(false)
  const toolbarSet = new Set(toolbar)
  const has = (tool: string) => toolbarSet.has(tool)

  const ALLOWED_SCHEMES = ['http:', 'https:', 'mailto:']
  const EMBED_HOSTS = ['youtube.com', 'www.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com', 'player.vimeo.com', 'vimeo.com', 'www.dailymotion.com']

  function isSafeUrl(raw: string): string | null {
    try {
      const u = new URL(raw)
      if (!ALLOWED_SCHEMES.includes(u.protocol)) return null
      return u.href
    } catch { return null }
  }

  function isEmbedUrl(raw: string): string | null {
    try {
      const u = new URL(raw)
      if (u.protocol !== 'https:') return null
      if (!EMBED_HOSTS.some(h => u.hostname === h)) return null
      return u.href
    } catch { return null }
  }

  const exec = useCallback((command: string, val?: string) => {
    document.execCommand(command, false, val)
    contentRef.current?.focus()
    if (!isUpdating.current) {
      onChange?.(contentRef.current?.innerHTML ?? '')
    }
  }, [onChange])

  const onInput = useCallback(() => {
    if (!isUpdating.current) {
      onChange?.(contentRef.current?.innerHTML ?? '')
    }
  }, [onChange])

  const insertLink = useCallback(() => {
    const raw = prompt('URL du lien :')
    if (!raw) return
    const safe = isSafeUrl(raw)
    if (!safe) return alert('URL invalide. Seuls http://, https:// et mailto: sont autorisés.')
    exec('createLink', safe)
  }, [exec])

  const insertImage = useCallback(() => {
    const raw = prompt("URL de l'image :")
    if (!raw) return
    const safe = isSafeUrl(raw)
    if (!safe) return alert('URL invalide. Seuls http:// et https:// sont autorisés.')
    exec('insertImage', safe)
  }, [exec])

  const insertVideo = useCallback(() => {
    const raw = prompt('URL de la vidéo (YouTube, Vimeo embed) :')
    if (!raw) return
    const safe = isEmbedUrl(raw)
    if (!safe) return alert('URL invalide. Seuls les liens embed YouTube, Vimeo et Dailymotion en HTTPS sont autorisés.')
    const wrapper = document.createElement('div')
    const iframe = document.createElement('iframe')
    iframe.src = safe
    iframe.width = '560'
    iframe.height = '315'
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allowfullscreen', '')
    iframe.style.maxWidth = '100%'
    wrapper.appendChild(iframe)
    exec('insertHTML', wrapper.outerHTML)
  }, [exec])

  const insertTable = useCallback(() => {
    const rows = parseInt(prompt('Nombre de lignes :') || '3', 10)
    const cols = parseInt(prompt('Nombre de colonnes :') || '3', 10)
    if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) return
    let html = '<table><thead><tr>'
    for (let c = 0; c < cols; c++) html += '<th>En-tête</th>'
    html += '</tr></thead><tbody>'
    for (let r = 0; r < rows - 1; r++) {
      html += '<tr>'
      for (let c = 0; c < cols; c++) html += '<td>Cellule</td>'
      html += '</tr>'
    }
    html += '</tbody></table>'
    exec('insertHTML', html)
  }, [exec])

  const insertCodeBlock = useCallback(() => {
    exec('insertHTML', '<pre><code>// code ici</code></pre><p><br></p>')
  }, [exec])

  const setHeading = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    exec('formatBlock', e.target.value)
  }, [exec])

  const setTextColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    exec('foreColor', e.target.value)
  }, [exec])

  const setBgColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    exec('hiliteColor', e.target.value)
  }, [exec])

  const onKeydown = useCallback((e: React.KeyboardEvent) => {
    const mod = e.ctrlKey || e.metaKey
    if (!mod) return
    const key = e.key.toLowerCase()
    const shortcuts: Record<string, () => void> = {
      b: () => exec('bold'),
      i: () => exec('italic'),
      u: () => exec('underline'),
      z: () => e.shiftKey ? exec('redo') : exec('undo'),
      y: () => exec('redo'),
    }
    if (shortcuts[key]) {
      e.preventDefault()
      shortcuts[key]()
    }
  }, [exec])

  function sanitizeHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    doc.querySelectorAll('script, style, link, meta, object, embed, applet').forEach(el => el.remove())
    doc.querySelectorAll('*').forEach(el => {
      for (const attr of Array.from(el.attributes)) {
        if (attr.name.startsWith('on') || (attr.name === 'href' && attr.value.trim().toLowerCase().startsWith('javascript:')) || (attr.name === 'src' && attr.value.trim().toLowerCase().startsWith('javascript:'))) {
          el.removeAttribute(attr.name)
        }
      }
    })
    return doc.body.innerHTML
  }

  useEffect(() => {
    const safe = sanitizeHtml(value)
    if (contentRef.current && contentRef.current.innerHTML !== safe) {
      isUpdating.current = true
      contentRef.current.innerHTML = safe
      isUpdating.current = false
    }
  }, [value])

  const cls = ['bj-rich-editor', disabled && 'bj-rich-editor--disabled', className].filter(Boolean).join(' ')

  const Sep = () => <div className="bj-rich-editor__toolbar-separator" aria-hidden="true" />

  return (
    <div className={cls} {...rest}>
      <div className="bj-rich-editor__toolbar" role="toolbar" aria-label="Éditeur de texte riche">
        {has('heading') && (
          <div className="bj-rich-editor__toolbar-group">
            <select className="bj-rich-editor__toolbar-select" onChange={setHeading} aria-label="Style de bloc">
              <option value="p">Paragraphe</option>
              <option value="h1">Titre 1</option>
              <option value="h2">Titre 2</option>
              <option value="h3">Titre 3</option>
            </select>
          </div>
        )}

        {has('heading') && (has('bold') || has('italic')) && <Sep />}

        {(has('bold') || has('italic') || has('underline') || has('strikethrough')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('bold') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('bold')} title="Gras" aria-label="Gras"><BjSvgIcon name="bold" /></button>}
            {has('italic') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('italic')} title="Italique" aria-label="Italique"><BjSvgIcon name="italic" /></button>}
            {has('underline') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('underline')} title="Souligné" aria-label="Souligné"><BjSvgIcon name="underline" /></button>}
            {has('strikethrough') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('strikethrough')} title="Barré" aria-label="Barré"><BjSvgIcon name="strikethrough" /></button>}
          </div>
        )}

        {(has('bold') || has('italic')) && (has('unorderedList') || has('orderedList')) && <Sep />}

        {(has('unorderedList') || has('orderedList')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('unorderedList') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('insertUnorderedList')} title="Liste à puces" aria-label="Liste à puces"><BjSvgIcon name="listUnordered" /></button>}
            {has('orderedList') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('insertOrderedList')} title="Liste numérotée" aria-label="Liste numérotée"><BjSvgIcon name="listOrdered" /></button>}
          </div>
        )}

        {(has('indent') || has('outdent')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('indent') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('indent')} title="Augmenter le retrait" aria-label="Augmenter le retrait"><BjSvgIcon name="indentIncrease" /></button>}
            {has('outdent') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('outdent')} title="Réduire le retrait" aria-label="Réduire le retrait"><BjSvgIcon name="indentDecrease" /></button>}
          </div>
        )}

        {(has('unorderedList') || has('orderedList') || has('indent') || has('outdent')) && (has('alignLeft') || has('alignCenter')) && <Sep />}

        {(has('alignLeft') || has('alignCenter') || has('alignRight') || has('alignJustify')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('alignLeft') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('justifyLeft')} title="Aligner à gauche" aria-label="Aligner à gauche"><BjSvgIcon name="alignLeft" /></button>}
            {has('alignCenter') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('justifyCenter')} title="Centrer" aria-label="Centrer"><BjSvgIcon name="alignCenter" /></button>}
            {has('alignRight') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('justifyRight')} title="Aligner à droite" aria-label="Aligner à droite"><BjSvgIcon name="alignRight" /></button>}
            {has('alignJustify') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('justifyFull')} title="Justifier" aria-label="Justifier"><BjSvgIcon name="alignJustify" /></button>}
          </div>
        )}

        {(has('alignLeft') || has('alignCenter')) && (has('link') || has('image')) && <Sep />}

        {(has('link') || has('image') || has('video') || has('table')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('link') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={insertLink} title="Lien" aria-label="Insérer un lien"><BjSvgIcon name="link" /></button>}
            {has('unlink') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('unlink')} title="Supprimer le lien" aria-label="Supprimer le lien"><BjSvgIcon name="linkUnlink" /></button>}
            {has('image') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={insertImage} title="Image" aria-label="Insérer une image"><BjSvgIcon name="image" /></button>}
            {has('video') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={insertVideo} title="Vidéo" aria-label="Insérer une vidéo"><BjSvgIcon name="video" /></button>}
            {has('table') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={insertTable} title="Tableau" aria-label="Insérer un tableau"><BjSvgIcon name="table" /></button>}
          </div>
        )}

        {(has('link') || has('image')) && (has('blockquote') || has('codeBlock')) && <Sep />}

        {(has('blockquote') || has('codeBlock') || has('horizontalRule') || has('removeFormat')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('blockquote') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('formatBlock', 'blockquote')} title="Citation" aria-label="Citation"><BjSvgIcon name="doubleQuotes" /></button>}
            {has('codeBlock') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={insertCodeBlock} title="Bloc de code" aria-label="Bloc de code"><BjSvgIcon name="code" /></button>}
            {has('horizontalRule') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('insertHorizontalRule')} title="Ligne horizontale" aria-label="Ligne horizontale"><BjSvgIcon name="separator" /></button>}
            {has('removeFormat') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('removeFormat')} title="Effacer le formatage" aria-label="Effacer le formatage"><BjSvgIcon name="formatClear" /></button>}
          </div>
        )}

        {(has('blockquote') || has('codeBlock')) && (has('textColor') || has('bgColor')) && <Sep />}

        {(has('textColor') || has('bgColor')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('textColor') && (
              <div className="bj-rich-editor__color-picker">
                <button type="button" className="bj-rich-editor__toolbar-btn" title="Couleur du texte" aria-label="Couleur du texte"><BjSvgIcon name="fontColor" /></button>
                <input type="color" onChange={setTextColor} defaultValue="#000000" aria-label="Choisir la couleur du texte" />
              </div>
            )}
            {has('bgColor') && (
              <div className="bj-rich-editor__color-picker">
                <button type="button" className="bj-rich-editor__toolbar-btn" title="Couleur de fond" aria-label="Couleur de fond"><BjSvgIcon name="paintFill" /></button>
                <input type="color" onChange={setBgColor} defaultValue="#ffff00" aria-label="Choisir la couleur de fond" />
              </div>
            )}
          </div>
        )}

        {(has('textColor') || has('bgColor')) && (has('undo') || has('redo')) && <Sep />}

        {(has('undo') || has('redo')) && (
          <div className="bj-rich-editor__toolbar-group">
            {has('undo') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('undo')} title="Annuler" aria-label="Annuler"><BjSvgIcon name="undo" /></button>}
            {has('redo') && <button type="button" className="bj-rich-editor__toolbar-btn" onClick={() => exec('redo')} title="Rétablir" aria-label="Rétablir"><BjSvgIcon name="redo" /></button>}
          </div>
        )}
      </div>

      <div
        ref={contentRef}
        className="bj-rich-editor__content"
        contentEditable={!disabled}
        data-placeholder={placeholder}
        style={height ? { minHeight: height } : undefined}
        role="textbox"
        aria-multiline="true"
        aria-label={placeholder || 'Éditeur de texte riche'}
        onInput={onInput}
        onKeyDown={onKeydown}
        suppressContentEditableWarning
      />
    </div>
  )
}

BjRichEditor.displayName = 'BjRichEditor'
