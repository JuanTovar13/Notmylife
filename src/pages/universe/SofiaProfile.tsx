import { Fragment } from 'react'
import { Link } from 'react-router'
import {
  sofia,
  type Crop,
  type Photo as PhotoData,
  type Post as PostData,
  type Profile,
} from '../../universe/sofia'
import './FacebookProfile.css'

type AvatarLookup = (name: string) => PhotoData | undefined

// Foto: { src, description }. Sin `src` se muestra un recuadro con la descripción,
// que sirve como guía de lo que debe mostrar la imagen definitiva.
// Si la foto trae `crop` ({ x, y, size, width, height } en píxeles de la imagen
// original), se muestra solo ese recuadro: sirve para usar una lámina con varias caras.
function cropStyle(src: string, { x, y, size, width, height }: Crop) {
  const pos = (offset: number, total: number) => (total === size ? 0 : (offset / (total - size)) * 100)
  return {
    backgroundImage: `url("${src}")`,
    backgroundSize: `${(width / size) * 100}% auto`,
    backgroundPosition: `${pos(x, width)}% ${pos(y, height)}%`,
  }
}

interface PhotoProps {
  photo?: PhotoData
  className?: string
  showDescription?: boolean
}

function Photo({ photo, className = '', showDescription = true }: PhotoProps) {
  if (photo?.src && photo.crop) {
    return (
      <div
        role="img"
        aria-label={photo.description ?? ''}
        className={`fb-crop ${className}`}
        style={cropStyle(photo.src, photo.crop)}
      />
    )
  }
  if (photo?.src) {
    return <img src={photo.src} alt={photo.description ?? ''} className={className} />
  }
  return (
    <div className={`fb-ph ${className}`} title={photo?.description}>
      {showDescription && photo?.description && (
        <p className="fb-ph__text">📷 {photo.description}</p>
      )}
    </div>
  )
}

function Avatar({
  photo,
  name,
  className = '',
}: {
  photo?: PhotoData
  name: string
  className?: string
}) {
  if (photo?.src) {
    return (
      <Photo
        photo={{ ...photo, description: name }}
        className={`fb-avatar ${className}`}
        showDescription={false}
      />
    )
  }
  return (
    <div className={`fb-avatar fb-avatar--initial ${className}`} aria-label={name}>
      {name.charAt(0)}
    </div>
  )
}

// Convierte "[[Nombre]]" en una etiqueta resaltada, como las menciones de Facebook.
function RichText({ text }: { text: string }) {
  const parts = text.split(/\[\[(.+?)\]\]/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="fb-tag">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`

function PostHeadline({ profile, post }: { profile: Profile; post: PostData }) {
  return (
    <p className="fb-post__author">
      {profile.name}
      {post.link && !post.with && <span className="fb-post__verb"> compartió un enlace.</span>}
      {post.with && (
        <>
          <span className="fb-post__verb"> está con </span>
          {post.with.map((n, i) => (
            <Fragment key={n}>
              {i > 0 && <span className="fb-post__verb"> y </span>}
              {n}
            </Fragment>
          ))}
        </>
      )}
      {post.at && (
        <>
          <span className="fb-post__verb"> en </span>
          {post.at}
        </>
      )}
      {(post.with || post.at) && <span className="fb-post__verb">.</span>}
    </p>
  )
}

function Post({
  post,
  profile,
  avatarOf,
}: {
  post: PostData
  profile: Profile
  avatarOf: AvatarLookup
}) {
  const comments = post.comments ?? []
  return (
    <article className="fb-card fb-post">
      <header className="fb-post__head">
        <Avatar photo={profile.avatar} name={profile.name} className="fb-avatar--sm" />
        <div>
          <PostHeadline profile={profile} post={post} />
          <p className="fb-muted fb-small">{post.date} · 🌐</p>
        </div>
        <span className="fb-post__more" aria-hidden="true">···</span>
      </header>

      {post.text && (
        <p className="fb-post__text">
          <RichText text={post.text} />
        </p>
      )}

      {post.photo && <Photo photo={post.photo} className="fb-post__image" />}

      {post.link && (
        <div className="fb-link">
          <Photo photo={post.link.photo} className="fb-link__image" />
          <div className="fb-link__body">
            <p className="fb-link__source">{post.link.source}</p>
            <p className="fb-link__title">{post.link.title}</p>
            <p className="fb-link__desc">{post.link.description}</p>
          </div>
        </div>
      )}

      <div className="fb-post__stats fb-muted fb-small">
        <span>
          <span className="fb-like-badge">👍</span>
          {post.hearts && <span className="fb-like-badge fb-like-badge--heart">❤️</span>}{' '}
          {post.reactions}
        </span>
        <span>
          {plural(comments.length, 'comentario', 'comentarios')} ·{' '}
          {plural(post.shares ?? 0, 'vez', 'veces')} compartido
        </span>
      </div>

      <div className="fb-post__actions">
        <span>👍 Me gusta</span>
        <span>💬 Comentar</span>
        <span>↗ Compartir</span>
      </div>

      {comments.length > 0 && (
        <ul className="fb-comments">
          {comments.map((c, i) => (
            <li key={i} className="fb-comment">
              <Avatar photo={avatarOf(c.author)} name={c.author} className="fb-avatar--xs" />
              <div>
                <div className="fb-comment__bubble">
                  <p className="fb-comment__author">{c.author}</p>
                  <p>
                    <RichText text={c.text} />
                  </p>
                </div>
                <p className="fb-muted fb-small fb-comment__meta">
                  {c.time} · Me gusta · Responder
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

export default function SofiaProfile() {
  const p = sofia
  const avatarOf: AvatarLookup = (name) =>
    name === p.name ? p.avatar : p.friends.find((f) => f.name === name)?.avatar

  return (
    <div className="fb">
      <div className="fb-exit">
        <Link to="/universo">← Universo expandido</Link>
      </div>

      <nav className="fb-topbar">
        <div className="fb-topbar__left">
          <span className="fb-logo" aria-hidden="true">f</span>
          <div className="fb-search">🔍 Buscar</div>
        </div>
        <div className="fb-topbar__center">
          <span className="is-active">🏠</span>
          <span>📺</span>
          <span>🏪</span>
          <span>👥</span>
        </div>
        <div className="fb-topbar__right">
          <span className="fb-round">☰</span>
          <span className="fb-round">💬</span>
          <span className="fb-round">🔔</span>
        </div>
      </nav>

      <header className="fb-header">
        <div className="fb-header__inner">
          <Photo photo={p.cover} className="fb-cover" />
          <div className="fb-identity">
            <Avatar photo={p.avatar} name={p.name} className="fb-avatar--xl" />
            <div className="fb-identity__text">
              <h1>{p.name}</h1>
              <p className="fb-muted">{p.friendsCount} amigos</p>
              <div className="fb-friend-stack">
                {p.friends.slice(0, 6).map((f) => (
                  <Avatar key={f.name} photo={f.avatar} name={f.name} className="fb-avatar--xs" />
                ))}
              </div>
            </div>
            <div className="fb-identity__actions">
              <span className="fb-btn fb-btn--primary">👤 Agregar a amigos</span>
              <span className="fb-btn">💬 Mensaje</span>
            </div>
          </div>
          <div className="fb-tabs">
            <span className="is-active">Publicaciones</span>
            <span>Información</span>
            <span>Amigos</span>
            <span>Fotos</span>
            <span>Más ▾</span>
          </div>
        </div>
      </header>

      <div className="fb-body">
        <aside className="fb-side">
          <section className="fb-card">
            <h2>Detalles</h2>
            {p.bio && <p className="fb-bio">{p.bio}</p>}
            <ul className="fb-details">
              {p.details.map((d, i) => (
                <li key={i}>
                  <span aria-hidden="true">{d.icon}</span> <RichText text={d.text} />
                </li>
              ))}
            </ul>
          </section>

          <section className="fb-card">
            <h2>Fotos</h2>
            <div className="fb-grid3">
              {p.photos.map((photo, i) => (
                <Photo key={i} photo={photo} className="fb-grid3__item" showDescription={false} />
              ))}
            </div>
          </section>

          <section className="fb-card">
            <h2>Amigos</h2>
            <p className="fb-muted fb-small">{p.friendsCount} amigos</p>
            <div className="fb-grid3 fb-grid3--friends">
              {p.friends.map((f) => (
                <div key={f.name} className="fb-friend">
                  <Photo photo={f.avatar} className="fb-grid3__item" showDescription={false} />
                  <span>{f.name}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <section className="fb-feed">
          <div className="fb-card fb-feed__title">
            <h2>Publicaciones</h2>
          </div>
          {p.posts.map((post, i) => (
            <Post key={i} post={post} profile={p} avatarOf={avatarOf} />
          ))}
        </section>
      </div>
    </div>
  )
}
