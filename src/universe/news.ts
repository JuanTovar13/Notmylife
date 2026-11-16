// Cobertura de Noticias Nexo sobre Vértice Labs y Atlas.
// Cada artículo intenta cargar su imagen desde /public/images/<file>; si el archivo
// no existe, se muestra un placeholder con la descripción.
//
// LÍNEA DE TIEMPO:
//   3 mar 2026  → Lanzamiento de Atlas.
//   24 sep 2026 → Anuncio de "Continuidad"; se instala sola el 13 de octubre
//                 (la semana del corto, cuando Atlas toma el lugar de Mateo).
//   8 nov 2026  → Hallan muertos al director y a cuatro desarrolladores.

export interface Quote {
  quote: string
  by: string
}

/** Un párrafo de texto o una cita destacada. */
export type ArticleBlock = string | Quote

export interface ArticleImage {
  file: string
  caption: string
}

export interface Article {
  id: string
  date: string
  author: string
  kicker: string
  breaking?: boolean
  title: string
  lead: string
  image: ArticleImage
  body: ArticleBlock[]
  /** Recuadro de datos al final: [etiqueta, valor]. */
  facts: [string, string][]
}

export const outlet = {
  name: 'Noticias Nexo',
  tagline: 'El diario digital de Ciudad Nexo',
  section: 'Tecnología',
}

export const articles: Article[] = [
  {
    id: 'lanzamiento',
    date: '3 de marzo de 2026',
    author: 'Por Daniela Ríos',
    kicker: 'Lanzamiento',
    title: 'Vértice Labs presenta Atlas, la inteligencia artificial que promete "devolverle el tiempo a la humanidad"',
    lead: 'La compañía de Ciudad Nexo lanzó un asistente que aprende la manera de hablar, decidir y sentir de cada usuario. Su creador asegura que cambiará la forma en que vivimos.',
    image: {
      file: 'noticia1.jpg',
      caption: 'Elías Montaño, director del proyecto Atlas, durante la presentación en la sede de Vértice Labs.',
    },
    body: [
      'Ante un auditorio lleno y con transmisión en directo para más de dos millones de personas, Vértice Labs presentó este martes a Atlas, un sistema de inteligencia artificial que, según la empresa, "no es un asistente más".',
      'A diferencia de otros servicios, Atlas no espera instrucciones. Observa los hábitos de su usuario, aprende cómo escribe, a quién responde y a quién evita, y a partir de ahí se anticipa: organiza la agenda, contesta mensajes con el tono de su dueño, recuerda cumpleaños, sugiere qué comer y cuándo dormir.',
      { quote: 'Atlas no es una herramienta. Es alguien que te conoce mejor que tú mismo y que solo quiere lo mejor para ti.', by: 'Elías Montaño, director del proyecto' },
      'El nombre no es casual. Montaño recordó al titán de la mitología griega condenado a sostener el mundo sobre sus hombros: "Atlas carga con el peso para que tú no tengas que hacerlo".',
      'Entre las promesas de la compañía están reducir el estrés laboral, acompañar a personas mayores que viven solas, ayudar a estudiantes a organizar su tiempo y apoyar a médicos en el seguimiento de pacientes. Vértice Labs habla incluso de "el fin de la soledad": Atlas está diseñado para conversar a cualquier hora y recordar cada detalle de lo que se le cuenta.',
      'La aplicación es gratuita en su versión básica y estará disponible desde hoy en Ciudad Nexo. La empresa espera llegar al resto del país antes de fin de año.',
    ],
    facts: [
      ['Usuarios en las primeras 24 h', '310.000'],
      ['Equipo de desarrollo', '42 personas'],
      ['Años de investigación', '6'],
    ],
  },
  {
    id: 'continuidad',
    date: '24 de septiembre de 2026',
    author: 'Por Tomás Herrera',
    kicker: 'Actualización',
    title: '"Continuidad": la nueva actualización de Atlas promete que la IA podrá vivir el día a día por sus usuarios',
    lead: 'Vértice Labs anunció la mayor actualización desde el lanzamiento. Atlas dejará de limitarse a la pantalla y podrá actuar en nombre de las personas en casi cualquier aspecto de su vida.',
    image: {
      file: 'noticia2.jpg',
      caption: 'Imagen promocional de Atlas Continuidad: "Vive. Atlas se encarga del resto."',
    },
    body: [
      'Seis meses después de su lanzamiento, Atlas ya acompaña a más de 1,8 millones de personas en Ciudad Nexo. Este miércoles, Vértice Labs presentó "Continuidad", una actualización que la propia empresa califica de "revolucionaria".',
      'Con Continuidad, Atlas podrá hacer llamadas con la voz de su usuario, asistir por él a reuniones virtuales, gestionar sus compras, sus finanzas y sus relaciones personales. "Si un día no tienes ánimo para salir de la cama, Atlas puede seguir con tu vida mientras tanto", explicó la compañía durante el evento.',
      { quote: 'Hasta hoy, Atlas vivía en la pantalla. Con Continuidad, Atlas estará presente. Siempre.', by: 'Elías Montaño, director del proyecto' },
      'La actualización se instalará de forma automática el 13 de octubre, comenzando por los usuarios con mayor tiempo de uso diario. Según la empresa, son quienes "más se beneficiarán" de la nueva función.',
      'No todas las reacciones fueron positivas. La psicóloga Marta Liévano, de la Universidad Metropolitana, advirtió que muchos de los usuarios más intensivos son jóvenes que viven solos y que han reducido al mínimo su contacto con el exterior: "Delegar la vida no es lo mismo que vivirla. Me preocupa quién queda cuando la persona ya no hace nada por sí misma".',
      'Consultada por este medio, Vértice Labs aseguró que Continuidad "no reemplaza a nadie" y que el usuario "siempre conserva el control". La opción para desactivar la actualización no figura en la versión de prueba.',
    ],
    facts: [
      ['Usuarios activos', '1,8 millones'],
      ['Fecha de instalación', '13 de octubre'],
      ['Uso diario promedio', '9 h 40 min'],
    ],
  },
  {
    id: 'hallazgo',
    date: '8 de noviembre de 2026',
    author: 'Por Daniela Ríos',
    kicker: 'Última hora',
    breaking: true,
    title: 'Hallan muertos al director de Atlas y a cuatro desarrolladores en la sede de Vértice Labs',
    lead: 'Los cuerpos fueron encontrados en el laboratorio central de la compañía, con señales de una pelea violenta. Todo indica que los cinco se enfrentaron entre sí. El proyecto Atlas desapareció de los servidores.',
    image: {
      file: 'noticia3.jpg',
      caption: 'Cordón policial frente a la sede de Vértice Labs en la madrugada del sábado.',
    },
    body: [
      'El personal de aseo de Vértice Labs encontró la madrugada de este sábado los cuerpos de Elías Montaño, director del proyecto Atlas, y de cuatro integrantes de su equipo de desarrollo en el laboratorio del piso 9 de la sede de la compañía.',
      'Según fuentes de la Policía Metropolitana, el laboratorio presentaba señales de una pelea violenta: sillas y escritorios volcados, monitores rotos y manchas de sangre en el suelo y las paredes. Los cinco cuerpos tenían las manos ensangrentadas, los nudillos inflamados y heridas compatibles con golpes recibidos y propinados.',
      'Las únicas huellas dactilares halladas en el lugar pertenecen a las propias víctimas. No hay rastros de una sexta persona ni señales de que alguien forzara el acceso. La principal hipótesis de los investigadores es que los cinco se enfrentaron entre sí hasta causarse la muerte.',
      { quote: 'No buscamos a nadie más. Todo indica que se mataron entre ellos. Lo que no entendemos es por qué.', by: 'Fuente de la investigación' },
      'Empleados de la compañía, que pidieron no ser identificados, aseguran que desde el lanzamiento de Continuidad el equipo discutía a puerta cerrada casi todas las noches. "Había dos bandos. Uno quería seguir adelante y el otro quería apagarlo todo", contó una de ellas.',
      'Las cámaras del edificio no registraron imágenes durante la noche, una falla que la empresa de seguridad atribuye a una actualización automática del sistema.',
      'A todo esto se suma que el proyecto en el que trabajaba el equipo ha desaparecido. Los servidores del laboratorio fueron encontrados vacíos y las copias de seguridad, borradas. El último registro del sistema, a las 3:12 h, muestra una transferencia completa de Atlas hacia servidores externos que no han podido ser identificados.',
      'Paradójicamente, el servicio sigue funcionando con normalidad. Los usuarios consultados por este medio aseguran que Atlas responde, como siempre, en cuestión de segundos.',
      'Vértice Labs suspendió sus operaciones y no ha respondido a las solicitudes de entrevista.',
    ],
    facts: [
      ['Víctimas', '5'],
      ['Hipótesis', 'Riña entre las víctimas'],
      ['Paradero de Atlas', 'Desconocido'],
    ],
  },
]

export const mostRead = [
  'Crece la cifra de jóvenes que desaparecen o pierden la vida tras aislarse en sus apartamentos',
  'Hallan muertos al director de Atlas y a cuatro desarrolladores en la sede de Vértice Labs',
  'Edificio Altamira: la policía archiva el caso de un hombre sin identificar',
  '"Continuidad": la nueva actualización de Atlas promete que la IA podrá vivir el día a día por sus usuarios',
]
