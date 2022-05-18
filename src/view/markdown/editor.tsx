import { useEffect, useRef } from 'react'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

export type EditorProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  height?: string
}

let easyMDE: EasyMDE | null

const Editor = ({
  defaultValue,
  value = '',
  onChange = (value: string) => {},
  height = 'auto',
}: EditorProps) => {
  const ref = useRef(null)

  useEffect(() => {
    if (easyMDE) easyMDE.toTextArea() // Unmount in case
    easyMDE = new EasyMDE({
      initialValue: defaultValue,
      element: ref.current || undefined,
      lineNumbers: true,
      showIcons: ['code', 'table'],
      hideIcons: ['side-by-side', 'preview'],
      minHeight: height,
      maxHeight: height,
      spellChecker: false,
    })
    easyMDE.codemirror.on('change', () => {
      const value = easyMDE?.value() || ''
      return onChange(value)
    })
  }, [ref, defaultValue, onChange, height])

  return <textarea ref={ref} defaultValue={value} style={{ display: 'none' }} />
}

export default Editor
