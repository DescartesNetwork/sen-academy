const MakeUpHtml = ({ children }: { children?: string }) => {
  return <span dangerouslySetInnerHTML={{ __html: children || '' }} />
}
export default MakeUpHtml
