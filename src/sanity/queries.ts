// ─── GROQ Queries ─────────────────────────────────────────────────────────────
// Importar: import { client } from './client';
// Usar:     const posts = await client.fetch(ALL_POSTS_QUERY);
// ─────────────────────────────────────────────────────────────────────────────

/** Todos los posts ordenados por fecha descendente */
export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    categories,
    publishedAt,
    "excerpt": coalesce(excerpt, array::join(string::split((pt::text(body)), "")[0..200], "") + "...")
  }
`;

/** Un post por slug (incluye excerpt y alt de imagen) */
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage { ..., "alt": alt },
    categories,
    publishedAt,
    "excerpt": coalesce(excerpt, array::join(string::split((pt::text(body)), "")[0..200], "") + "..."),
    body
  }
`;

/** Posts por categoría */
export const POSTS_BY_CATEGORY_QUERY = `
  *[_type == "post" && $category in categories] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }
`;

/** Configuración general del sitio (Singleton) */
export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteTitle,
    heroHeadline,
    heroSubheadline,
    contactEmail,
    secondaryEmail,
    phoneNumber,
    location,
    logoLight,
    logoDark,
    favicon,
    socialLinks,
    seoDescription
  }
`;

/** Datos de la página de inicio (Singleton) */
export const HOMEPAGE_QUERY = `
  *[_type == "homePage"][0] {
    heroPill,
    heroTitle,
    heroDescription,
    heroMeta,
    studioStatusLabel,
    availableSlots,
    availableSlotsText,
    processSteps,
    metrics
  }
`;

/** Miembros del equipo ordenados por "order" */
export const TEAM_MEMBERS_QUERY = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    title,
    specialty,
    focus,
    github,
    linkedin,
    initials,
    color,
    photo
  }
`;
