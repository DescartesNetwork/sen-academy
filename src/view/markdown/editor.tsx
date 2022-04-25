import { useEffect, useRef } from 'react'

import EasyMDE from 'easymde'

import 'easymde/dist/easymde.min.css'

const HEIGHT = 'calc(100vh - 276px)'

export type EditorProps = {
  value?: string
  initialValue?: string
  onChange?: (value: string) => void
}

let easyMDE: EasyMDE | null

const Editor = ({
  value = '',
  initialValue = '',
  onChange = (value: string) => {},
}: EditorProps) => {
  const ref = useRef(null)

  useEffect(() => {
    if (easyMDE) easyMDE.toTextArea() // Unmount in case
    easyMDE = new EasyMDE({
      initialValue,
      element: ref.current || undefined,
      lineNumbers: true,
      showIcons: ['code', 'table'],
      hideIcons: ['side-by-side', 'preview'],
      minHeight: HEIGHT,
      maxHeight: HEIGHT,
    })
    easyMDE.codemirror.on('change', () => onChange(easyMDE?.value() || ''))
  }, [ref, initialValue, onChange])

  return <textarea ref={ref} defaultValue={value} style={{ display: 'none' }} />
}

export default Editor
