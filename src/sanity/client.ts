import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

// ─── Variables de entorno ────────────────────────────────────────────────────
// Definir en `.env.local`:
//   VITE_SANITY_PROJECT_ID=xxxxxxxx
//   VITE_SANITY_DATASET=production
//   VITE_SANITY_API_VERSION=2024-01-01   (opcional, se usa la de abajo por defecto)
// ─────────────────────────────────────────────────────────────────────────────

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? 'hhcu69rv',
  dataset:   import.meta.env.VITE_SANITY_DATASET   ?? 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01',
  useCdn: true,   // true en producción (lecturas cacheadas por CDN)
                  // false durante desarrollo si necesitas datos en tiempo real
});

// ─── Helper de imágenes ───────────────────────────────────────────────────────
const builder = imageUrlBuilder(client);

/**
 * Construye una URL optimizada para una imagen de Sanity.
 *
 * @example
 * urlFor(post.mainImage).width(800).auto('format').url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
