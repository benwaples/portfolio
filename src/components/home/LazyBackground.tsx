import React, { useEffect, useState } from 'react'

export default function LazyBackground({src}: {src: string}) {
  const [source, setSource] = useState('https://media.giphy.com/media/5AtXMjjrTMwvK/giphy.gif')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSource(src)
  }, [src])

  return <div style={{backgroundImage: `url(${source})`}}></div>
}
