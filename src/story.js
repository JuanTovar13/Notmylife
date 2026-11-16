// Estructura de la historia interactiva.
//
// Cada escena tiene:
//   - src:     ruta del video (los archivos van en /public/videos)
//   - title:   nombre interno de la escena (se muestra si el video no existe)
//   - prompt:  pregunta que aparece al terminar el video (solo si hay choices)
//   - choices: opciones para continuar; cada una apunta a otra escena con `next`
//
// Una escena sin `choices` es un final.

export const START_SCENE = 'intro'

export const scenes = {
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
