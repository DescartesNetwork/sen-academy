import { useLayoutEffect, useRef, useState } from 'react'

import EasyMDE from 'easymde'

import 'easymde/dist/easymde.min.css'

const HEIGHT = 'calc(100vh - 276px)'

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
        initialValue,
        element,
        autofocus: true,
        forceSync: true,
        sideBySideFullscreen: false,
        showIcons: ['code', 'table'],
        hideIcons: ['side-by-side', 'preview'],
        minHeight: HEIGHT,
        maxHeight: HEIGHT,
        shortcuts: {
          toggleFullScreen: 'esc',
        },
      }),
    )
  }, [ref, initialValue])

  easyMDE?.codemirror.on('change', () => {
    onChange(easyMDE.value())
  })

  return <textarea ref={ref} defaultValue={value} />
}

export default Editor
