import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanity/client';
import { ALL_POSTS_QUERY } from '../sanity/queries';

/* ─────────────────────────────────────────────────────────────
   PLACEHOLDER DATA (reemplazar con client.fetch cuando Sanity
   esté configurado con el projectId real)
───────────────────────────────────────────────────────────── */
const PLACEHOLDER_POSTS = [
  {
    _id: '1',
    title: 'Structurizr: Arquitectura como código',
    slug: { current: 'structurizr' },
    categories: ['Arquitectura', 'DaC'],
    publishedAt: '2026-04-06T10:00:00Z',
    excerpt: 'El estándar para crear Diagrams as Code aplicando el Modelo C4 de forma colaborativa, ideal para documentar la arquitectura de sistemas complejos desde herramientas CI/CD.',
    accent: '#10b981',
    gradientFrom: '#064e3b',
    gradientTo: '#065f46',
  },
  {
    _id: '2',
    title: 'Lucidchart: Gestión visual para el SDLC',
    slug: { current: 'lucidchart' },
    categories: ['Visualización', 'Cloud'],
    publishedAt: '2026-04-05T10:00:00Z',
    excerpt: 'La solución ágil basada en la web para el diseño interactivo de sistemas. Colaboración sincrónica, UML avanzado y diseño ERD potente y accesible.',
    accent: '#f97316',
    gradientFrom: '#431407',
    gradientTo: '#7c2d12',
  },
  {
    _id: '3',
    title: 'Figma: Diseño colaborativo de alta fidelidad',
    slug: { current: 'figma' },
    categories: ['UI/UX', 'Diseño'],
    publishedAt: '2026-04-04T10:00:00Z',
    excerpt: 'Liderando el estándar de la industria en diseño de interfaces y prototipado interactivo en tiempo real con una rica biblioteca de componentes.',
    accent: '#ec4899',
    gradientFrom: '#4a044e',
    gradientTo: '#701a75',
  },
  {
    _id: '4',
    title: 'Microsoft Visio: Diagramación profesional',
    slug: { current: 'microsoft-visio' },
    categories: ['Diagramación', 'Procesos'],
    publishedAt: '2026-04-03T10:00:00Z',
    excerpt: 'Aprovechando su integración con Microsoft 365, permite documentar procesos corporativos, redes robustas e infraestructura industrial de manera conectada y conectada a datos.',
    accent: '#0aa5e9',
    gradientFrom: '#0c4a6e',
    gradientTo: '#0369a1',
  },
  {
    _id: '5',
    title: 'Visual Paradigm: Modelado UML y Diseño',
    slug: { current: 'visual-paradigm' },
    categories: ['UML', 'Modelado'],
    publishedAt: '2026-04-02T10:00:00Z',
    excerpt: 'Una suite de modelado visual versátil con herramientas para BPMN, UML, mapas mentales y planificación de proyectos para guiar la transformación de TI.',
    accent: '#6366f1',
    gradientFrom: '#1e1b4b',
    gradientTo: '#312e81',
  },
  {
    _id: '6',
    title: 'Balsamiq: Wireframes rápidos',
    slug: { current: 'balsamiq' },
    categories: ['Prototipado', 'UX/UI'],
    publishedAt: '2026-04-01T10:00:00Z',
    excerpt: 'La rapidez y creatividad de dibujar en un pizarrón llevadas a una herramienta digital intuitiva de baja fidelidad para el diseño temprano.',
    accent: '#a855f7',
    gradientFrom: '#2a1738',
    gradientTo: '#3c1e4f',
  },
];

const ACCENT_MAP = {
  Frontend: '#818cf8',
  Backend: '#34d399',
  DevOps: '#fb923c',
  Cloud: '#2DD4BF',
  Mobile: '#f472b6',
  Data: '#67e8f9',
  Arquitectura: '#a78bfa',
  Ingeniería: '#fbbf24',
};

function categoryAccent(cat) {
  return ACCENT_MAP[cat] ?? '#2DD4BF';
}

/* ─────────────────────────────────────────────────────────────
   HELPER: Formato de fecha
───────────────────────────────────────────────────────────── */
function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('es-EC', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: Placeholder visual de imagen (mientras no haya
   imagen real de Sanity)
───────────────────────────────────────────────────────────── */
function PostImagePlaceholder({ post, className = '' }) {
  // 1. Si el post tiene imagen de Sanity, la usamos
  if (post.mainImage && post.mainImage.asset) {
    return (
      <img
        src={urlFor(post.mainImage).width(800).height(450).auto('format').fit('crop').url()}
        alt={post.mainImage.alt || post.title || 'Imagen del artículo'}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  // 2. Si es uno de los PLACEHOLDER con imagen externa
  if (post.image) {
    return (
      <img
        src={post.image}
        alt={post.title || 'Imagen del artículo'}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  // 3. Fallback visual generativo si no hay imagen
  const from = post.gradientFrom ?? '#0d2d29';
  const to = post.gradientTo ?? '#1a4a44';
  const accent = post.accent ?? '#2DD4BF';

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Icono central */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ color: accent, opacity: 0.4 }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: Skeleton de carga
───────────────────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] animate-pulse">
      <div className="aspect-video w-full bg-white/[0.06]" />
      <div className="flex flex-col gap-3 p-5">
        <div className="h-3 w-20 rounded-full bg-white/[0.08]" />
        <div className="h-5 w-4/5 rounded-lg bg-white/[0.08]" />
        <div className="h-4 w-full rounded-lg bg-white/[0.06]" />
        <div className="h-4 w-3/4 rounded-lg bg-white/[0.06]" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: BlogCard (posts secundarios)
───────────────────────────────────────────────────────────── */
function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);
  const accent = post.accent ?? categoryAccent(post.categories?.[0]);

  return (
    <article
      className="flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02]
                 hover:border-white/[0.16] transition-all duration-300 group"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {/* Imagen con zoom en hover */}
      <div
        className="relative aspect-video overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        >
          <PostImagePlaceholder post={post} className="w-full h-full" />
        </div>

        {/* Badge de categoría sobre la imagen */}
        {post.categories?.[0] && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="font-code text-[0.63rem] uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                background: `${accent}22`,
                color: accent,
                border: `1px solid ${accent}40`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {post.categories[0]}
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Fecha */}
        <p className="font-code text-[0.68rem] text-text-muted">
          {formatDate(post.publishedAt)}
        </p>

        {/* Título */}
        <h3 className="font-ui font-bold text-text-main text-base leading-snug
                       group-hover:text-white transition-colors duration-200 flex-1">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="font-body text-text-muted text-sm leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Tags adicionales */}
        {post.categories?.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {post.categories.slice(1).map((cat) => (
              <span
                key={cat}
                className="font-code text-[0.6rem] px-2 py-0.5 rounded-md border"
                style={{
                  color: categoryAccent(cat),
                  borderColor: `${categoryAccent(cat)}30`,
                  background: `${categoryAccent(cat)}0a`,
                }}
              >
                #{cat}
              </span>
            ))}
          </div>
        )}

        {/* Link "Leer más" */}
        <Link
          to={`/blog/${post.slug?.current ?? post._id}`}
          className="inline-flex items-center gap-1.5 font-ui font-semibold text-sm mt-1
                     transition-all duration-200 group/link w-fit"
          style={{ color: accent }}
        >
          Leer más
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE: Featured Post (post destacado, full-width)
───────────────────────────────────────────────────────────── */
function FeaturedPost({ post }) {
  const accent = post.accent ?? categoryAccent(post.categories?.[0]);

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border
                 border-white/[0.1] hover:border-white/[0.18] transition-all duration-300 group"
      style={{
        background: `linear-gradient(135deg, ${post.gradientFrom ?? '#0d2d29'}88 0%, rgba(15,23,42,0.7) 100%)`,
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Imagen izquierda */}
      <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <PostImagePlaceholder post={post} className="w-full h-full" />
        </div>
        {/* Gradiente de fundido hacia el contenido (solo desktop) */}
        <div
          className="absolute inset-y-0 right-0 w-16 hidden lg:block"
          style={{ background: `linear-gradient(to right, transparent, ${post.gradientTo ?? '#1a4a44'})` }}
        />
      </div>

      {/* Contenido derecho */}
      <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
        {/* Badge FEATURED + categoría */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="font-code text-[0.62rem] uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
          >
            ★ Destacado
          </span>
          {post.categories?.map((cat) => (
            <span
              key={cat}
              className="font-code text-[0.62rem] uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                background: `${categoryAccent(cat)}12`,
                color: categoryAccent(cat),
                border: `1px solid ${categoryAccent(cat)}30`,
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Título */}
        <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl leading-tight
                       group-hover:text-white transition-colors duration-200">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="font-body text-text-body leading-relaxed text-base line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/[0.08]">
          <span className="font-code text-xs text-text-muted">{formatDate(post.publishedAt)}</span>
          <Link
            to={`/blog/${post.slug?.current ?? post._id}`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-ui font-semibold text-sm
                       transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: accent,
              color: '#0B1120',
              boxShadow: `0 0 16px ${accent}40`,
            }}
          >
            Leer artículo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA: Blog
───────────────────────────────────────────────────────────── */
function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(ALL_POSTS_QUERY)
      .then((data) => {
        // Combinamos los posts activos de Sanity con las 6 entradas estáticas nuevas
        const sanityPosts = data?.length ? data : [];
        setPosts([...sanityPosts, ...PLACEHOLDER_POSTS]);
      })
      .catch((err) => {
        console.error("Error obteniendo datos de Sanity:", err);
        setPosts(PLACEHOLDER_POSTS);
      })
      .finally(() => setLoading(false));
  }, []);

  const featuredPost = posts[0] ?? null;
  const remainingPosts = posts.slice(1);

  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-24 pb-14"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -5%, rgba(45,212,191,0.08) 0%, transparent 65%), #0B1120',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2DD4BF 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-ui font-medium text-xs text-primary uppercase tracking-widest">
              Blog · Terrabyte EC
            </span>
          </div>

          <h1 className="font-heading font-bold text-text-main text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight">
            Bitácora de{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ingeniería.
            </span>
          </h1>

          <p className="font-body text-text-body text-lg sm:text-xl leading-relaxed max-w-xl">
            Aprendizajes y notas desde el volcán. Lo que funciona, lo que falla
            y lo que nadie documenta cuando construyes software en producción.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-white/[0.08] w-full max-w-sm">
            {[
              { v: `${PLACEHOLDER_POSTS.length}`, l: 'Artículos' },
              { v: '4', l: 'Categorías' },
              { v: 'Semanal', l: 'Frecuencia' },
            ].map(({ v, l }) => (
              <div key={l} className="flex flex-col items-center">
                <span className="font-heading font-bold text-2xl text-text-main">{v}</span>
                <span className="font-body text-xs text-text-muted mt-0.5">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contenido principal ──────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 py-14 lg:py-20 flex flex-col gap-12">

        {loading ? (
          /* Skeleton de carga */
          <div className="flex flex-col gap-10">
            {/* Skeleton featured */}
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden
                            border border-white/[0.07] animate-pulse">
              <div className="aspect-video lg:min-h-[320px] bg-white/[0.06]" />
              <div className="flex flex-col gap-4 p-10">
                <div className="h-3 w-24 rounded-full bg-white/[0.08]" />
                <div className="h-7 w-5/6 rounded-lg bg-white/[0.08]" />
                <div className="h-4 w-full rounded-lg bg-white/[0.06]" />
                <div className="h-4 w-4/5 rounded-lg bg-white/[0.06]" />
              </div>
            </div>
            {/* Skeleton grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        ) : (
          <>
            {/* ── Post Destacado ───────────────────────────── */}
            {featuredPost && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-code text-primary/60 text-xs uppercase tracking-widest">
                    último artículo
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
                <FeaturedPost post={featuredPost} />
              </div>
            )}

            {/* ── Grid de posts ─────────────────────────────── */}
            {remainingPosts.length > 0 && (
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-code text-text-muted text-xs uppercase tracking-widest">
                    más artículos
                  </span>
                  <div className="flex-1 h-px bg-white/[0.07]" />
                  <span className="font-code text-xs text-text-muted">
                    {remainingPosts.length} artículos
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* Estado vacío */}
            {posts.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03]
                               flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748B"
                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <p className="font-ui font-semibold text-text-muted">
                  No hay artículos publicados todavía.
                </p>
                <p className="font-body text-sm text-text-muted">
                  Conecta Sanity y publica tu primer post desde el Studio.
                </p>
              </div>
            )}
          </>
        )}
      </section>

      {/* ── Newsletter / CTA ─────────────────────────────── */}
      <section
        className="w-full py-20"
        style={{
          background: 'linear-gradient(180deg, #0B1120 0%, #070d1a 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h2 className="font-heading font-bold text-text-main text-2xl sm:text-3xl">
            ¿Prefieres recibir los artículos{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              por email?
            </span>
          </h2>
          <p className="font-body text-text-body text-base max-w-md">
            Sin spam. Un artículo cuando lo tenemos listo, nada más.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-ui font-semibold text-sm
                       transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: '#2DD4BF',
              color: '#0B1120',
              boxShadow: '0 0 20px rgba(45,212,191,0.35)',
            }}
          >
            Suscribirse al newsletter
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Blog;
