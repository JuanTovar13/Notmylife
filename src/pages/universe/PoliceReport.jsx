import { Link } from 'react-router'
import './PoliceReport.css'

// Informe policial sobre la muerte de Mateo. La víctima nunca se identifica:
// para la policía es un N.N. Todo el texto está aquí; [R] = dato tachado.

function R({ w = 6 }) {
  return <span className="pr-redact" style={{ width: `${w}ch` }} aria-label="dato tachado" />
}

function Field({ label, children }) {
  return (
    <div className="pr-field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}

const interviews = [
  { unit: '1401', name: <>Hernán <R w={7} /></>, text: 'No reconoce a la víctima. Indica que dormía y no escuchó nada.' },
  { unit: '1403', name: <>Familia <R w={8} /></>, text: 'Cuatro moradores presentes. Ninguno reconoce a la víctima.' },
  {
    unit: '1406',
    name: <>Gloria <R w={9} /></>,
    text: 'No reconoce a la víctima. Sin que se le pregunte, comenta que el joven del 1407 "antes casi no salía, pero ahora se le ve muy bien, muy arreglado".',
  },
  {
    unit: '1407',
    name: <>Mateo <R w={9} /></>,
    highlight: true,
    text: 'Morador registrado, 21 años. Atiende de inmediato, vestido de traje oscuro y corbata. Se muestra sereno y colaborador. Presenta documento de identidad vigente. Afirma vivir solo y no haber escuchado nada. No reconoce a la víctima.',
  },
  { unit: '1408', name: <>Iván <R w={6} /></>, text: 'No reconoce a la víctima. Escuchó "un golpe seco" cerca de las 22:30.' },
  { unit: '101 – 1808', name: 'Resto del edificio', text: 'Ninguno reconoce a la víctima. Ninguno reporta a un familiar o conocido desaparecido.' },
]

export default function PoliceReport() {
  return (
    <div className="pr">
      <div className="pr-exit">
        <Link to="/universo">← Universo expandido</Link>
      </div>

      <article className="pr-doc">
        <span className="pr-stamp" aria-hidden="true">
          Archivado
          <small>N.N.</small>
        </span>

        <header className="pr-head">
          <div className="pr-seal" aria-hidden="true">PM</div>
          <div>
            <p className="pr-org">Policía Metropolitana de Ciudad Nexo</p>
            <p className="pr-sub">Unidad de Investigación Criminal · Sección Muertes Violentas</p>
          </div>
        </header>

        <h1 className="pr-title">Informe de inspección técnica a cadáver</h1>

        <dl className="pr-grid">
          <Field label="Caso n.º">NX-2026-10-4471</Field>
          <Field label="Fecha del informe">20 de octubre de 2026</Field>
          <Field label="Clasificación">Muerte por caída de altura · presunto suicidio</Field>
          <Field label="Estado">Archivado · víctima no identificada (N.N.)</Field>
        </dl>

        <section>
          <h2>1. Datos del hecho</h2>
          <dl className="pr-grid">
            <Field label="Aviso">19/10/2026, 22:41 h · vigilante nocturno del edificio</Field>
            <Field label="Llegada de la unidad">22:58 h</Field>
            <Field label="Lugar">Edificio Altamira, Calle 48 n.º 12-30, Ciudad Nexo. Zona común, costado oriental.</Field>
            <Field label="Hora estimada">Entre 22:00 y 23:00 h</Field>
          </dl>
          <p>
            El cuerpo se encuentra en la zona común del costado oriental del edificio. Por la
            posición y la trayectoria, se establece que la víctima se lanzó desde la azotea, por
            el muro perimetral de esa fachada. No hay testigos directos.
          </p>
        </section>

        <section>
          <h2>2. Descripción del cuerpo</h2>
          <dl className="pr-grid">
            <Field label="Sexo">Masculino</Field>
            <Field label="Edad aparente">18 a 25 años</Field>
            <Field label="Complexión">Delgada, con signos de bajo peso y atrofia muscular</Field>
            <Field label="Cabello">Negro, abundante, desordenado</Field>
          </dl>

          <h3>Rostro</h3>
          <p>
            Ausencia total de rasgos faciales identificables. La superficie del rostro se presenta{' '}
            <strong>lisa y uniforme</strong>, sin ojos, nariz ni boca diferenciables. Medicina Legal
            descarta que esta condición corresponda a lesiones por el impacto, quemaduras o
            intervención de terceros, y no logra explicar su origen.
          </p>

          <h3>Huellas dactilares</h3>
          <p>
            Las yemas de los diez dedos carecen de crestas papilares. No es posible realizar
            necrodactilia ni cotejo en el sistema de identificación.
          </p>

          <h3>Otros métodos de identificación</h3>
          <ul>
            <li>Muestra de ADN: sin coincidencias en las bases de datos nacionales.</li>
            <li>Carta dental: sin coincidencias.</li>
            <li>Tatuajes, cicatrices o señales particulares: ninguna.</li>
            <li>Reportes de personas desaparecidas que coincidan: ninguno.</li>
          </ul>
        </section>

        <section>
          <h2>3. Prendas y elementos hallados</h2>
          <ul>
            <li>Camisa de manga larga, gris clara, arrugada, con las mangas recogidas.</li>
            <li>Pantalón jean azul, desgastado.</li>
            <li>Tenis de lona negros, con desgaste visible en las suelas.</li>
            <li>Anteojos de montura negra rectangular, fracturados, hallados a 3 m del cuerpo.</li>
            <li>Un audífono inalámbrico blanco. El segundo se halla en la azotea, junto al muro perimetral.</li>
          </ul>
          <p>
            <strong>No porta</strong> documentos de identidad, teléfono celular, billetera ni llaves.
          </p>
        </section>

        <section>
          <h2>4. Inspección del edificio</h2>
          <p>
            El Edificio Altamira cuenta con 18 pisos y 144 apartamentos (8 por piso). Se verifica puerta por
            puerta con el administrador y el registro de residentes:{' '}
            <strong>los 144 apartamentos se encuentran ocupados</strong> y todos sus moradores
            registrados están presentes y fueron identificados.
          </p>
          <p>
            La puerta de acceso a la azotea se encuentra cerrada con candado, sin signos de
            forzamiento, y la única llave la custodia la administración. No se ha podido
            determinar cómo accedió la víctima. El libro de visitantes no registra ingresos
            después de las 20:15 h.
          </p>
          <p>
            Las cámaras del lobby, de las escaleras y de la azotea no registran imágenes entre las 21:00 y
            las 23:30 h. La empresa de seguridad lo atribuye a una{' '}
            <em>"actualización automática del software"</em> que nadie programó.
          </p>
        </section>

        <section>
          <h2>5. Entrevistas a moradores</h2>
          <ul className="pr-interviews">
            {interviews.map((i) => (
              <li key={i.unit} className={i.highlight ? 'is-highlight' : ''}>
                <p className="pr-interviews__who">
                  Apto. {i.unit} · {i.name}
                </p>
                <p>{i.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>6. Conclusiones</h2>
          <p>
            Dado que la totalidad de los apartamentos se encuentra ocupada por sus moradores
            registrados, <strong>se descarta que la víctima residiera en el edificio</strong>. Se
            presume que ingresó sin ser registrado, aunque no se ha podido establecer cómo.
          </p>
          <p>
            No fue posible establecer la identidad de la víctima por ningún medio. El cuerpo se
            remite a Medicina Legal en calidad de <strong>N.N.</strong> Al no existir familiares
            que lo reclamen, se procederá conforme al protocolo de inhumación de cuerpos no
            identificados.
          </p>
          <p>
            El caso se vincula al registro de muertes de jóvenes en condiciones de aislamiento
            reportadas en Ciudad Nexo durante el presente año. Es el <strong>caso n.º 38</strong>{' '}
            con víctima no identificada.
          </p>
        </section>

        <footer className="pr-sign">
          <div>
            <span className="pr-sign__line" />
            <p>
              Investigador a cargo: Subintendente <R w={10} />
            </p>
          </div>
          <div>
            <span className="pr-sign__line" />
            <p>
              Vo. Bo.: Comandante de Sección <R w={8} />
            </p>
          </div>
        </footer>

        <p className="pr-footnote">Documento de uso interno · Prohibida su divulgación</p>
      </article>
    </div>
  )
}
