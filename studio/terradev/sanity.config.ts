import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {CogIcon, DocumentTextIcon} from '@sanity/icons'
import {schemaTypes} from './schemaTypes'

/**
 * ID fijo del documento Singleton.
 * Siempre se abre/edita el mismo documento — nunca se crea uno nuevo.
 */
const SITE_SETTINGS_DOC_ID = 'siteSettings'

export default defineConfig({
  name: 'terrabyte-ec',
  title: 'Terrabyte EC · CMS',

  projectId: 'hhcu69rv',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Terrabyte EC')
          .items([

            // ── SINGLETON: Configuración Global ───────────────────────────
            // Al hacer clic abre directamente el documento único.
            // No hay lista, no hay botón "Create new".
            S.listItem()
              .title('Configuración Global')
              .icon(CogIcon)
              .child(
                S.document()
                  .title('Configuración Global')
                  .schemaType('siteSettings')
                  .documentId(SITE_SETTINGS_DOC_ID)
              ),

            S.divider(),

            // ── Blog ────────────────────────────────────────────────
            S.documentTypeListItem('post')
              .title('Artículos de Blog')
              .icon(DocumentTextIcon),
          ]),
    }),

    // Vision: explorador GROQ interactivo (solo visible en el Studio)
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
