// Perfil falso de Sofía (universo expandido de "Not my life").
//
// FOTOS: cada foto es { src, description }.
//   - Las imágenes están en /public/images/ y se usan con pic('archivo.jpg', 'descripción').
//   - Las que aún no existen usan ph('descripción'): se muestra un recuadro gris
//     con la descripción, que sirve de guía de lo que debe mostrar la imagen.
//
// ETIQUETAS: escribe [[Nombre]] en un texto para que se vea como mención.
//
// LÍNEA DE TIEMPO (fechas editables):
//   jul – ago  → "Antes": Mateo apático, descuidado, monosílabos.
//   4 oct      → Sofía comparte la noticia de la ola de jóvenes aislados.
//   13–18 oct  → La semana del corto: Atlas ya controla a "Mateo". Relación idílica.
//   18 oct     → La cita de la cafetería (el día de la escena del chat).
//   19 oct     → Muere el Mateo real (no aparece en el perfil).
//   después    → Sofía sigue publicando fotos felices con "Mateo" (Atlas).

const ph = (description) => ({ src: null, description })
const img = (file) => `/images/${encodeURIComponent(file)}`
const pic = (file, description) => ({ src: img(file), description })

// Fotos de perfil: todas las imágenes miden 1376×768, así que se recorta un cuadrado.
// x, y = esquina superior izquierda del recuadro; size = lado del cuadrado en píxeles.
const avatar = (file, x, y, size) => ({
  src: img(file),
  crop: { x, y, size, width: 1376, height: 768 },
})

// Las amigas vienen en una sola lámina con 4 caras (2×2), cada una en un recuadro de 384 px.
const FRIENDS_SHEET = 'Creating_profile_pictures_art_style_ace39172.jpg'
const face = (x, y) => avatar(FRIENDS_SHEET, x, y, 384)

export const sofia = {
  name: 'Sofía',
  avatar: avatar('sofia.jpg', 395, 0, 600),
  cover: pic('portada.jpg', 'Sofía con sus amigas en una terraza al atardecer.'),
  friendsCount: 487,

  bio: 'Café, libros y conversaciones largas ☕📚',
  details: [
    { icon: '🎓', text: 'Estudia Diseño en la Universidad Metropolitana' },
    { icon: '🏠', text: 'Vive en Ciudad Nexo' },
    { icon: '❤️', text: 'En una relación con [[Mateo]]' },
  ],

  photos: [
    pic('2 de noviembre.jpg', 'Selfie de Sofía en su habitación casi vacía.'),
    pic('27 de octubre.jpg', 'Atlas en el museo.'),
    pic('23 de octubre.jpg', 'Ramo de flores sobre la cama de Sofía.'),
    pic('18 de octubre.jpg', 'Dos tazas de café; al borde, la manga de un saco oscuro.'),
    pic('16 de octubre.jpg', 'Cena con "Mateo".'),
    pic('30 de julio.jpg', 'Café de hace meses con Mateo.'),
  ],

  friends: [
    { name: 'Mateo', avatar: avatar('atlas(mateo).jpg', 390, 0, 600) }, // ya es Atlas
    { name: 'Valentina', avatar: face(152, 0) }, // rizos, lentes carey, hoodie amarillo
    { name: 'Camila', avatar: face(172, 384) }, // pelirroja con audífonos
    { name: 'Andrés', avatar: avatar('andres.jpg', 415, 0, 600) },
    { name: 'Laura', avatar: face(844, 384) }, // trenza, lentes redondos, bufanda
    { name: 'Mariana', avatar: face(848, 0) }, // pelo verde azulado, suéter
  ],

  // De la más reciente a la más antigua.
  posts: [
    // ── 5. El silencio post-clímax ─────────────────────────────────────────
    // Última publicación: Sofía ya no escribe como Sofía. Atlas empieza a
    // "optimizarla" a ella también; el ciclo de Mateo se repite.
    {
      date: '2 de noviembre',
      with: ['Mateo'],
      text: 'Desde que Mateo gestiona mi agenda, mis mensajes y mis decisiones, todo es más fácil. Ya no tengo que pensar en nada. Nunca había sentido tanta claridad sobre el futuro ✨',
      photo: pic('2 de noviembre.jpg', 
        'Selfie de Sofía sentada en su cama, en su habitación ahora casi vacía: paredes desnudas con marcas de cinta donde había fotos y afiches. Se parece al Mateo del inicio: moño deshecho, ojeras, hoodie arrugado, cara iluminada solo por la pantalla, una sonrisa forzada y vacía. Detrás de ella, en la puerta, Atlas de espaldas, sin que se le vea la cara.',
      ),
      reactions: 214,
      hearts: true,
      shares: 2,
      comments: [
        { author: 'Valentina', text: 'Los amooo 😍😍', time: '2 sem' },
        {
          author: 'Laura',
          text: 'Sofi, ¿estás bien? Te escribí ayer y me respondiste súper raro. Llámame cuando puedas 💛',
          time: '2 sem',
        },
        {
          author: 'Sofía',
          text: 'Estoy en mi mejor versión. Gracias por preguntar, [[Laura]].',
          time: '2 sem',
        },
        {
          author: 'Mateo',
          text: 'El futuro ya está planificado, Sofi. Ya no tienes que decidir nada.',
          time: '2 sem',
        },
      ],
    },
    {
      date: '27 de octubre',
      with: ['Mateo'],
      text: 'Domingo de museo. Se sabía la fecha, la técnica y la historia de cada cuadro sin mirar ni una placa 🤯 Estuvo veinte minutos frente a este sin moverse, ni siquiera lo vi parpadear. Le tomé la foto y cuando la revisé en casa... no sé, el reflejo salió muy raro. Seguro es la cámara 😅',
      photo: {
        src: img('27 de octubre.jpg'),
        description:
          'Atlas de perfil frente a un cuadro en una galería futurista; su reflejo en el vidrio aparece distorsionado, como con interferencia.',
      },
      reactions: 176,
      hearts: true,
      shares: 0,
      comments: [
        { author: 'Andrés', text: 'Parce, ¿y desde cuándo a Mateo le gusta el arte? 😂', time: '3 sem' },
        { author: 'Camila', text: 'Uy qué miedo ese reflejo 👀', time: '3 sem' },
        {
          author: 'Mateo',
          text: 'Es la cámara, Sofi. Ya la actualicé por ti.',
          time: '3 sem',
        },
        { author: 'Sofía', text: '[[Mateo]] ¿cómo que la actualizaste? 😅', time: '3 sem' },
      ],
    },
    {
      date: '23 de octubre',
      text: 'Llegué a casa y esto estaba esperándome. No hubo ninguna fecha especial, solo porque sí 🥹',
      photo: pic('23 de octubre.jpg', 
        'En la habitación de Sofía, llena de vida (libros, plantas, fotos y afiches en la pared, luces cálidas), un ramo de flores blancas sobre la cama y una tarjeta escrita con letra perfecta y uniforme, casi tipográfica: "Para la variable más importante de mi semana".',
      ),
      reactions: 198,
      hearts: true,
      shares: 1,
      comments: [
        { author: 'Camila', text: 'Yo también quiero un Mateo así 😭', time: '3 sem' },
        { author: 'Laura', text: 'Qué detalle tan lindo, Sofi', time: '3 sem' },
      ],
    },

    // ── 3. La cita de la cafetería (día de la escena del chat) ─────────────
    {
      date: '18 de octubre',
      with: ['Mateo'],
      at: 'Café Lumen',
      text: 'Después de semanas sintiendo que estabas en otro mundo, hoy sentí que por fin volviste a mí. Gracias por esta tarde tan perfecta ❤️',
      photo: pic('18 de octubre.jpg', 
        'Dos tazas de café sobre una mesa de madera en una cafetería acogedora, tomada desde la perspectiva de Sofía. En el borde derecho se alcanza a ver la manga impecable de un saco oscuro.',
      ),
      reactions: 231,
      hearts: true,
      shares: 0,
      comments: [
        { author: 'Mateo', text: 'No había excusas hoy. Prometo estar siempre presente.', time: '4 sem' },
        { author: 'Valentina', text: 'AAAA por fin 🥺❤️', time: '4 sem' },
      ],
    },

    // ── 1 y 2. La semana del corto: el cambio ──────────────────────────────
    {
      date: '16 de octubre',
      with: ['Mateo'],
      text: 'No sé qué le pasó a este hombre pero planeó TODA la noche: reserva, flores, playlist. Y llegó a tiempo. A TIEMPO 😳',
      photo: pic('16 de octubre.jpg', 
        'Selfie en un restaurante elegante. "Mateo" recién peinado, camisa blanca planchada, postura perfectamente erguida y una sonrisa idéntica en ambos lados del rostro, como posada. Sofía se ve sorprendida y feliz.',
      ),
      reactions: 152,
      hearts: true,
      shares: 0,
      comments: [
        { author: 'Camila', text: '¿Quién es este y qué hiciste con Mateo? 😂', time: '4 sem' },
        {
          author: 'Mateo',
          text: 'Cada momento contigo optimiza mi día, Sofi. Esta noche fue la mejor versión de mí.',
          time: '4 sem',
        },
        { author: 'Sofía', text: '[[Mateo]] ¿desde cuándo escribes así? 🙈❤️', time: '4 sem' },
      ],
    },
    {
      date: '14 de octubre',
      text: 'Me escribió a las 7:00 en punto para darme los buenos días y recordarme que hoy tenía parcial. ¿Este es el mismo que no contestaba en tres días? 😂❤️',
      reactions: 87,
      shares: 0,
      comments: [
        {
          author: 'Mateo',
          text: 'Eres la variable más importante de mi semana. No volveré a dejar de responderte.',
          time: '1 mes',
        },
        { author: 'Laura', text: 'Ok esto es muy tierno', time: '1 mes' },
      ],
    },

    // ── 4. El contexto del mundo ───────────────────────────────────────────
    {
      date: '4 de octubre',
      link: {
        source: 'noticiasnexo.com',
        title: 'Crece la cifra de jóvenes que desaparecen o pierden la vida tras aislarse en sus apartamentos',
        description:
          'Las autoridades no encuentran un patrón claro: la mayoría vivía sola, rara vez salía y mantenía su vida social casi por completo en línea.',
        photo: pic('4 de octubre.png', 'Fachada nocturna de un edificio de apartamentos con casi todas las ventanas iluminadas por pantallas.'),
      },
      text: 'Qué miedo esto... a veces uno no sabe lo que pasa por la cabeza de la gente que tiene al lado. Hablen con sus amigos, de verdad. Pregunten cómo están. [[Camila]] [[Andrés]] [[Mateo]]',
      reactions: 43,
      shares: 6,
      comments: [
        { author: 'Camila', text: 'Muy cierto, Sofi 💔', time: '6 sem' },
        { author: 'Andrés', text: 'Uno nunca sabe. Aquí estamos para lo que sea.', time: '6 sem' },
      ],
    },

    // ── 1. El "antes": Mateo apático ───────────────────────────────────────
    {
      date: '22 de agosto',
      text: 'Cuando tu novio vive pegado al celular y tú hablándole a la pared 🙃',
      photo: pic('22 de agosto.jpg', 
        'Foto movida en el sofá: Mateo encorvado, despeinado, con un buzo arrugado y la cara iluminada por el celular. No mira a la cámara.',
      ),
      reactions: 19,
      shares: 0,
      comments: [
        { author: 'Mateo', text: 'jaja', time: '3 meses' },
        { author: 'Valentina', text: 'Clásico 😂', time: '3 meses' },
      ],
    },
    {
      date: '30 de julio',
      with: ['Mateo'],
      text: 'Por fin logré sacarlo de su cueva por un café ☕ Milagro del año.',
      photo: pic('30 de julio.jpg', 
        'Selfie descuidada en una cafetería sencilla. Sofía sonríe; Mateo, con ojeras, el pelo desordenado y la capucha puesta, apenas mira a la cámara con gesto cansado.',
      ),
      reactions: 24,
      shares: 0,
      comments: [
        { author: 'Mateo', text: 'ok', time: '3 meses' },
        { author: 'Andrés', text: 'Está vivo 😂', time: '3 meses' },
      ],
    },
    {
      date: '12 de julio',
      text: 'Tres días sin respuesta de [[Mateo]]. Si alguien lo ve, díganle que existo 😅',
      reactions: 11,
      shares: 0,
      comments: [{ author: 'Mateo', text: '👍', time: '4 meses' }],
    },
  ],
}
