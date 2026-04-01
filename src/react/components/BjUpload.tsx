import { useId, useRef, useState } from 'react'
import type * as React from 'react'

import { BjSvgIcon, remixClassToIconName } from '../icons'

export interface BjUploadProps {
  label?: string
  hint?: string
  accept?: string
  multiple?: boolean
  error?: boolean
  message?: string
  text?: string
  /** BjSvgIcon name (e.g. `upload2Line`) or legacy `ri-*` class token */
  icon?: string
  onChange?: (files: FileList | null) => void
  className?: string
}

export function BjUpload({
  label,
  hint,
  accept,
  multiple,
  error,
  message,
  text = 'Glissez un fichier ou cliquez pour parcourir',
  icon = 'upload2Line',
  onChange,
  className,
}: BjUploadProps) {
  const uid = useId()
  const uploadId = uid
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [dragging, setDragging] = useState(false)

  const groupClass = ['bj-upload-group', error && 'bj-upload-group--error', className].filter(Boolean).join(' ')
  const uploadClass = ['bj-upload', dragging && 'bj-upload--drag-over'].filter(Boolean).join(' ')

  function handleFiles(fl: FileList | null) {
    if (!fl?.length) return
    setFiles(Array.from(fl))
    onChange?.(fl)
  }

  function onClick() {
    fileInputRef.current?.click()
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    handleFiles(e.dataTransfer?.files ?? null)
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className={groupClass}>
      {label ? (
        <label className="bj-label" htmlFor={uploadId}>
          {label}
        </label>
      ) : null}
      {hint ? <span className="bj-hint">{hint}</span> : null}
      <div
        className={uploadClass}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        }}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        <span className="bj-upload__icon">
          <BjSvgIcon name={remixClassToIconName(icon)} />
        </span>
        <span className="bj-upload__text">{text}</span>
        <input
          ref={fileInputRef}
          id={uploadId}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
      {message ? (
        <p className={['bj-message', error ? 'bj-message--error' : 'bj-message--info'].filter(Boolean).join(' ')}>{message}</p>
      ) : null}
      {files.map((file, i) => (
        <div key={`${file.name}-${i}`} className="bj-upload__file">
          <BjSvgIcon name="fileLine" />
          {file.name}
          <button type="button" className="bj-upload__file-remove" onClick={() => removeFile(i)} aria-label="Retirer">
            <BjSvgIcon name="closeLine" />
          </button>
        </div>
      ))}
    </div>
  )
}

BjUpload.displayName = 'BjUpload'
