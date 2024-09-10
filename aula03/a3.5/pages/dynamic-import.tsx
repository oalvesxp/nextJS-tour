import { useState } from 'react'
import dynamic from 'next/dynamic'

const YoutubeVideo = dynamic(() => import('../src/components/DynamicImport'))

export default function DynamicScreen() {
  const [isVisible, setVideo] = useState(false)

  return (
    <>
      <style>{`
        * {
          font-family: sans-serif;
        }
      `}</style>
      <h1>Dynamic Import Page!</h1>
      <input type="checkbox" onChange={() => setVideo(!isVisible)} />
      Mostrar video
      <div>{isVisible && <YoutubeVideo />}</div>
    </>
  )
}
