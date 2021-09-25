import React, { useState, useEffect } from 'react'

function PreviewTitle() {
  const [title, setTitle] = useState(document.title)
  useEffect(() => {
    new MutationObserver(() => {
      setTitle(document.title)
    }).observe(document.querySelector('title'), { childList: true })
  }, [])
  return (
    <p style={{ margin: 5 }}>
      <code>document.title</code> = {title}
    </p>
  )
}

export default PreviewTitle
