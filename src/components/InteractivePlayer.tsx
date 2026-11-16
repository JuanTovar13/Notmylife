import { useEffect, useState } from 'react'
import { scenes, START_SCENE, type SceneId } from '../story'
import './InteractivePlayer.css'

export default function InteractivePlayer() {
  const [sceneId, setSceneId] = useState<SceneId>(START_SCENE)
  const [ended, setEnded] = useState(false)
  const [missing, setMissing] = useState(false)

  const scene = scenes[sceneId]
  const choices = scene.choices ?? []
  const hasChoices = choices.length > 0

  // Precargar los videos de las opciones para que el cambio sea inmediato.
  useEffect(() => {
    const links = (scene.choices ?? []).map(({ next }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'video'
      link.href = scenes[next].src
      document.head.appendChild(link)
      return link
    })
    return () => links.forEach((l) => l.remove())
  }, [scene])

  // Cambiar de escena: el <video> se vuelve a montar (key={sceneId})
  // y las escenas posteriores a la primera arrancan solas (autoPlay).
  const goTo = (next: SceneId) => {
    setEnded(false)
    setMissing(false)
    setSceneId(next)
  }

  return (
    <div className="player">
      <video
        key={sceneId}
        className={`player__video ${ended && hasChoices ? 'is-dimmed' : ''}`}
        src={scene.src}
        controls={!ended}
        playsInline
        preload="auto"
        autoPlay={sceneId !== START_SCENE}
        onEnded={() => setEnded(true)}
        onError={() => setMissing(true)}
      />

      {missing && !ended && (
        <div className="player__placeholder">
          <p className="player__placeholder-title">{scene.title}</p>
          <p className="player__placeholder-text">
            Aún no hay video en <code>public{scene.src}</code>
          </p>
          <button className="player__ghost" onClick={() => setEnded(true)}>
            Simular fin de la escena
          </button>
        </div>
      )}

      {ended && hasChoices && (
        <div className="player__overlay">
          <p className="player__prompt">{scene.prompt}</p>
          <div className="player__choices">
            {choices.map((c) => (
              <button
                key={c.next}
                className="player__choice"
                onClick={() => goTo(c.next)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {ended && !hasChoices && (
        <div className="player__overlay">
          <p className="player__prompt">Fin</p>
          <button className="player__ghost" onClick={() => goTo(START_SCENE)}>
            Volver a empezar
          </button>
        </div>
      )}
    </div>
  )
}
