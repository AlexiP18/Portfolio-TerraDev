// ⚠️  ESTE ARCHIVO ES UNA COPIA DE REFERENCIA — NO ES EL STUDIO ACTIVO.
// El Studio real con node_modules y dependencias instaladas está en:
//   studio/terradev/sanity.config.ts
//
// Para ejecutar el Studio:
//   cd studio/terradev
//   npx sanity dev

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { CogIcon } from '@sanity/icons';
import { schemaTypes } from './schemaTypes';

/**
 * Configuración principal del Sanity Studio.
 *
 * Para ejecutar el Studio:
 *   cd studio
 *   npm install
 *   npx sanity dev          → http://localhost:3333
 *
 * Para hacer deploy del Studio:
 *   npx sanity deploy
 */
export default defineConfig({
  name: 'terrabyte-ec',
  title: 'Terrabyte EC · CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'hhcu69rv',
  dataset:   process.env.SANITY_STUDIO_DATASET   ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            // ── Singleton: Configuración del sitio ──────────
            S.listItem()
              .title('Configuración del sitio')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),

            S.divider(),

            // ── Blog posts ───────────────────────────────────
            S.documentTypeListItem('post').title('Posts del Blog'),
          ]),
    }),

    // Vision: GROQ query explorer en el Studio (solo dev)
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
