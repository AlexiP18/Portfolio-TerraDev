import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { client, urlFor } from '../sanity/client';
import { POST_BY_SLUG_QUERY } from '../sanity/queries';

/* ─────────────────────────────────────────────────────────────
   HELPER: Tiempo de lectura estimado
───────────────────────────────────────────────────────────── */
function estimateReadingTime(blocks = []) {
  let words = 0;
  blocks.forEach((block) => {
    if (block._type === 'block' && Array.isArray(block.children)) {
      block.children.forEach((span) => {
        if (span.text) {
          words += span.text.split(/\s+/).filter(Boolean).length;
        }
      });
    }
    if (block._type === 'codeBlock' && block.code) {
      words += block.code.split(/\s+/).length * 0.3;
    }
  });
  return Math.max(1, Math.ceil(words / 200));
}

/* ─────────────────────────────────────────────────────────────
   HELPER: Formato de fecha largo
───────────────────────────────────────────────────────────── */
function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('es-EC', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

/* ─────────────────────────────────────────────────────────────
   HELPER: Color por categoría
───────────────────────────────────────────────────────────── */
const ACCENT_MAP = {
  Frontend:     '#818cf8',
  Backend:      '#34d399',
  DevOps:       '#fb923c',
  Cloud:        '#2DD4BF',
  Mobile:       '#f472b6',
  Data:         '#67e8f9',
  Arquitectura: '#a78bfa',
  Ingeniería:   '#fbbf24',
};
function categoryAccent(cat) {
  return ACCENT_MAP[cat] ?? '#2DD4BF';
}

/* ─────────────────────────────────────────────────────────────
   PORTABLE TEXT — Componentes personalizados
───────────────────────────────────────────────────────────── */
const ptComponents = {
  /* ── Bloques de texto ──────────────────────────────────── */
  block: {
    normal: ({ children }) => (
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          color: '#94A3B8',
          lineHeight: '1.875',
          marginBottom: '1.375rem',
          fontSize: '1.0625rem',
        }}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          color: '#F8FAFC',
          fontSize: '1.625rem',
          lineHeight: 1.25,
          margin: '3rem 0 1rem',
          paddingBottom: '0.625rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          color: '#2DD4BF',
          fontSize: '1.25rem',
          lineHeight: 1.35,
          margin: '2.25rem 0 0.75rem',
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 600,
          color: '#CBD5E1',
          fontSize: '1.0625rem',
          lineHeight: 1.4,
          margin: '1.875rem 0 0.5rem',
        }}
      >
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: '3px solid #2DD4BF',
          margin: '2rem 0',
          padding: '1rem 1.375rem',
          background: 'rgba(45,212,191,0.05)',
          borderRadius: '0 10px 10px 0',
          color: '#CBD5E1',
          fontStyle: 'italic',
          fontSize: '1.0625rem',
          lineHeight: 1.75,
        }}
      >
        {children}
      </blockquote>
    ),
  },

  /* ── Tipos custom (imágenes y código) ──────────────────── */
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure style={{ margin: '2.25rem 0' }}>
          <img
            src={urlFor(value).width(840).quality(85).url()}
            alt={value.alt ?? ''}
            style={{
              width: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
            }}
          />
          {value.caption && (
            <figcaption
              style={{
                textAlign: 'center',
                color: '#64748B',
                fontSize: '0.8125rem',
                marginTop: '0.625rem',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic',
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    codeBlock: ({ value }) => {
      const rawLang = value?.language ?? 'text';
      const code    = value?.code ?? '';
      const filename = value?.filename ?? null;

      /* Mapear alias de lenguaje → Prism */
      const langMap = {
        typescript: 'tsx',
        javascript: 'jsx',
        python:     'python',
        bash:       'bash',
        sql:        'sql',
        json:       'json',
        yaml:       'yaml',
        text:       'text',
      };
      const prismLang = langMap[rawLang] ?? rawLang;

      return (
        <div
          style={{
            margin: '2rem 0',
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          {/* Barra de título estilo macOS */}
          <div
            style={{
              background: '#0d1117',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Puntos */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
            </div>
            {/* Nombre de archivo / lenguaje */}
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.72rem',
                color: '#64748B',
              }}
            >
              {filename ?? rawLang}
            </span>
          </div>

          <SyntaxHighlighter
            language={prismLang}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: 0,
              background: '#0d1117',
              padding: '1.375rem 1.5rem',
              fontSize: '0.875rem',
              lineHeight: 1.7,
            }}
            showLineNumbers
            lineNumberStyle={{
              color: '#3d4a5c',
              marginRight: '1.75rem',
              minWidth: '2rem',
              fontSize: '0.75rem',
              userSelect: 'none',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },

  /* ── Marcas inline ─────────────────────────────────────── */
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href ?? '#'}
        target={value?.blank ? '_blank' : '_self'}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        style={{
          color: '#2DD4BF',
          textDecoration: 'underline',
          textDecorationColor: 'rgba(45,212,191,0.4)',
          textUnderlineOffset: '3px',
          transition: 'color 0.2s',
        }}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.875em',
          background: 'rgba(45,212,191,0.1)',
          color: '#2DD4BF',
          padding: '0.1em 0.45em',
          borderRadius: '5px',
          border: '1px solid rgba(45,212,191,0.2)',
        }}
      >
        {children}
      </code>
    ),
    strong: ({ children }) => (
      <strong style={{ fontWeight: 700, color: '#F8FAFC' }}>{children}</strong>
    ),
    em: ({ children }) => (
      <em style={{ fontStyle: 'italic', color: '#CBD5E1' }}>{children}</em>
    ),
    underline: ({ children }) => (
      <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(148,163,184,0.5)', textUnderlineOffset: '3px' }}>{children}</span>
    ),
    'strike-through': ({ children }) => (
      <span style={{ textDecoration: 'line-through', color: '#64748B' }}>{children}</span>
    ),
  },

  /* ── Listas ────────────────────────────────────────────── */
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          margin: '0.875rem 0 1.375rem 1.375rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.375rem',
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          margin: '0.875rem 0 1.375rem 1.375rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.375rem',
        }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        style={{
          fontFamily: 'Inter, sans-serif',
          color: '#94A3B8',
          lineHeight: 1.75,
          listStyleType: 'disc',
          paddingLeft: '0.25rem',
        }}
      >
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li
        style={{
          fontFamily: 'Inter, sans-serif',
          color: '#94A3B8',
          lineHeight: 1.75,
          listStyleType: 'decimal',
          paddingLeft: '0.25rem',
        }}
      >
        {children}
      </li>
    ),
  },
};

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: Skeleton de carga
───────────────────────────────────────────────────────────── */
function PostSkeleton() {
  return (
    <div
      className="animate-pulse max-w-2xl mx-auto flex flex-col gap-5"
      style={{ padding: '7rem 1.5rem 5rem' }}
    >
      <div className="h-3 w-24 rounded-full bg-white/[0.07]" />
      <div className="flex gap-2">
        <div className="h-5 w-20 rounded-full bg-white/[0.07]" />
        <div className="h-5 w-16 rounded-full bg-white/[0.05]" />
      </div>
      <div className="h-10 w-full rounded-xl bg-white/[0.09]" />
      <div className="h-9 w-4/5 rounded-xl bg-white/[0.07]" />
      <div className="flex gap-4 mt-1">
        <div className="h-3 w-36 rounded-full bg-white/[0.06]" />
        <div className="h-3 w-24 rounded-full bg-white/[0.05]" />
        <div className="h-3 w-20 rounded-full bg-white/[0.05]" />
      </div>
      <div className="aspect-[16/6] w-full rounded-2xl bg-white/[0.05] mt-2" />
      <div className="flex flex-col gap-3 mt-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-4 rounded-lg bg-white/[0.04]"
            style={{ width: `${78 + (i % 4) * 6}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA: BlogPost (dinámica por slug)
───────────────────────────────────────────────────────────── */
function BlogPost() {
  const { slug }              = useParams();
  const [post, setPost]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);
    setPost(null);

    client
      .fetch(POST_BY_SLUG_QUERY, { slug })
      .then((data) => {
        if (!data) setNotFound(true);
        else setPost(data);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  const readTime = post?.body ? estimateReadingTime(post.body) : 0;

  /* ── Estado: cargando ─────────────────────────────────── */
  if (loading) {
    return (
      <div style={{ background: '#0B1120', minHeight: '100vh' }}>
        <PostSkeleton />
      </div>
    );
  }

  /* ── Estado: no encontrado ───────────────────────────── */
  if (notFound) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-5 text-center"
        style={{ background: '#0B1120', minHeight: '100vh', padding: '4rem 1.5rem' }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
          style={{ background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.25)' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="11"/><line x1="11" y1="14" x2="11.01" y2="14"/>
          </svg>
        </div>
        <p className="font-code text-primary/60 text-xs uppercase tracking-widest">404</p>
        <h1 className="font-heading font-bold text-text-main text-3xl">
          Artículo no encontrado
        </h1>
        <p className="font-body text-text-body text-base max-w-xs leading-relaxed">
          Este slug no corresponde a ningún post publicado en el CMS.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-ui font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: '#2DD4BF', color: '#0B1120', boxShadow: '0 0 16px rgba(45,212,191,0.35)' }}
        >
          ← Volver al blog
        </Link>
      </div>
    );
  }

  const mainImageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1200).quality(85).url()
    : null;

  return (
    <div style={{ background: '#0B1120', minHeight: '100vh' }}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(45,212,191,0.08) 0%, transparent 65%), #0B1120',
          paddingTop: '6rem',
          paddingBottom: '2.5rem',
        }}
      >
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* ← Volver */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-ui text-sm text-text-muted
                       hover:text-primary transition-colors duration-200 mb-8 group"
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>
            </svg>
            Volver al blog
          </Link>

          {/* Categorías */}
          {post.categories?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="font-code"
                  style={{
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    background: `${categoryAccent(cat)}18`,
                    color: categoryAccent(cat),
                    border: `1px solid ${categoryAccent(cat)}35`,
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Título */}
          <h1
            className="font-heading font-bold text-text-main"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.875rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              maxWidth: '44rem',
            }}
          >
            {post.title}
          </h1>

          {/* Meta: autor + fecha + lectura */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            {/* Avatar + nombre */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0B1120',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  fontFamily: '"Space Grotesk", sans-serif',
                  flexShrink: 0,
                }}
              >
                T
              </div>
              <span
                className="font-ui font-medium"
                style={{ color: '#CBD5E1', fontSize: '0.9rem' }}
              >
                Equipo Terrabyte EC
              </span>
            </div>

            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />

            {/* Fecha */}
            <span
              className="font-code"
              style={{ color: '#64748B', fontSize: '0.78rem' }}
            >
              {formatDate(post.publishedAt)}
            </span>

            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />

            {/* Tiempo de lectura */}
            <span
              className="font-code"
              style={{ color: '#64748B', fontSize: '0.78rem' }}
            >
              {readTime} min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* ── IMAGEN PRINCIPAL ─────────────────────────────── */}
      {mainImageUrl && (
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
            }}
          >
            <img
              src={mainImageUrl}
              alt={post.mainImage?.alt ?? post.title}
              style={{ width: '100%', display: 'block', maxHeight: '30rem', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}

      {/* ── CUERPO ───────────────────────────────────────── */}
      <div style={{ maxWidth: '42rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        {post.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : (
          <p
            className="font-body text-text-muted"
            style={{ lineHeight: '1.875', fontSize: '1.0625rem' }}
          >
            Este artículo no tiene contenido todavía. Añade el cuerpo desde el Sanity Studio.
          </p>
        )}

        {/* Separador */}
        <div
          style={{
            margin: '3.5rem 0',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(45,212,191,0.3), transparent)',
          }}
        />

        {/* ── CTA FINAL ─────────────────────────────────── */}
        <div
          style={{
            borderRadius: '22px',
            border: '1px solid rgba(45,212,191,0.22)',
            background:
              'linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(15,23,42,0.8) 60%, rgba(45,212,191,0.04) 100%)',
            padding: '2.75rem 2.25rem',
            backdropFilter: 'blur(16px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow decorativo */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Icono */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '14px',
              background: 'rgba(45,212,191,0.12)',
              border: '1px solid rgba(45,212,191,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}
          >
            <svg
              width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>

          <h2
            className="font-heading font-bold text-text-main"
            style={{ fontSize: '1.375rem', marginBottom: '0.6rem' }}
          >
            ¿Te gustó lo que leíste?
          </h2>
          <p
            className="font-body text-text-body"
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              maxWidth: '22rem',
              margin: '0 auto 1.75rem',
            }}
          >
            Si este artículo fue útil para tu proyecto, conversemos.
            Nos encanta trabajar con equipos que piensan en serio.
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 font-ui font-semibold"
            style={{
              padding: '0.75rem 1.625rem',
              borderRadius: '12px',
              background: '#2DD4BF',
              color: '#0B1120',
              fontSize: '0.9375rem',
              boxShadow: '0 0 24px rgba(45,212,191,0.38)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(45,212,191,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(45,212,191,0.38)';
            }}
          >
            Trabajemos juntos
            <svg
              width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default BlogPost;
