// Estructura de la historia interactiva.
//
// Cada escena tiene:
//   - src:     ruta del video (los archivos van en /public/videos)
//   - title:   nombre interno de la escena (se muestra si el video no existe)
//   - prompt:  pregunta que aparece al terminar el video (solo si hay choices)
//   - choices: opciones para continuar; cada una apunta a otra escena con `next`
//
// Una escena sin `choices` es un final.

export interface Choice {
  label: string
  next: SceneId
}

export interface Scene {
  src: string
  title: string
  prompt?: string
  choices?: Choice[]
}

export type SceneId = 'intro' | 'opcionA' | 'opcionB'

export const START_SCENE: SceneId = 'intro'

export const scenes: Record<SceneId, Scene> = {
  intro: {
    src: '/videos/intro.mp4',
    title: 'Fragmento 1',
    prompt: '¿Qué hace Mateo?',
    choices: [
      { label: 'Opción A (placeholder)', next: 'opcionA' },
      { label: 'Opción B (placeholder)', next: 'opcionB' },
    ],
  },
  opcionA: {
    src: '/videos/opcion-a.mp4',
    title: 'Escena A',
  },
  opcionB: {
    src: '/videos/opcion-b.mp4',
    title: 'Escena B',
  },
}
