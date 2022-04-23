import { useEffect, useRef } from 'react'

import EasyMDE from 'easymde'

import 'easymde/dist/easymde.min.css'

const HEIGHT = 'calc(100vh - 276px)'

export type EditorProps = {
  id: string
  value?: string
  initialValue?: string
  onChange?: (value: string) => void
}

const Editor = ({
  id,
  value = '',
  initialValue = '',
  onChange = (value: string) => {},
}: EditorProps) => {
  const ref = useRef(null)

  useEffect(() => {
    const easyMDE = new EasyMDE({
      initialValue,
      element: ref.current || undefined,
      lineNumbers: true,
      showIcons: ['code', 'table'],
      hideIcons: ['side-by-side', 'preview'],
      minHeight: HEIGHT,
      maxHeight: HEIGHT,
      shortcuts: {
        toggleFullScreen: 'Esc',
      },
      autosave: {
        enabled: true,
        uniqueId: id,
      },
    })
    easyMDE.codemirror.on('change', () => onChange(easyMDE.value()))
  }, [ref, id, initialValue, onChange])

  return <textarea ref={ref} defaultValue={value} style={{ display: 'none' }} />
}

export default Editor
