import { useLayoutEffect, useRef, useState } from 'react'

import EasyMDE from 'easymde'

import './index.less'

export type EditorProps = {
  value?: string
  initialValue?: string
  onChange?: (value: string) => void
}

const Editor = ({
  value = '',
  initialValue = '',
  onChange = (value: string) => {},
}: EditorProps) => {
  const ref = useRef(null)
  const [easyMDE, setEasyMDE] = useState<EasyMDE | undefined>()

  useLayoutEffect(() => {
    const element = ref?.current || undefined
    setEasyMDE(
      new EasyMDE({
        element,
        autofocus: true,
        forceSync: true,
        hideIcons: ['preview', 'side-by-side'],
        showIcons: ['code', 'table'],
        minHeight: 'calc(100vh - 260px)',
        maxHeight: 'calc(100vh - 260px)',
        initialValue,
      }),
    )
  }, [ref, initialValue])

  easyMDE?.codemirror.on('change', () => {
    onChange(easyMDE.value())
  })

  return <textarea className="easy-mde" ref={ref} value={value} />
}

export default Editor
