import { defineType, defineField, defineArrayMember } from 'sanity';
import { CogIcon } from '@sanity/icons';

/**
 * Schema: siteSettings — SINGLETON
 *
 * Para que este documento sea un Singleton (solo una instancia),
 * en `sanity.config.ts` agregar:
 *
 *   import { singletonPlugin } from './plugins/singletonPlugin'
 *
 * O la forma manual de ocultar el botón "Create new" en la estructura:
 *
 *   structure: (S) =>
 *     S.list().items([
 *       S.listItem()
 *         .title('Configuración del sitio')
 *         .icon(CogIcon)
 *         .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
 *       ...S.documentTypeListItems().filter(t => t.getId() !== 'siteSettings'),
 *     ])
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  icon: CogIcon,

  // __experimental_actions limita a solo editar (no crear/borrar/duplicar)
  // Descomenta esto para habilitar el comportamiento Singleton nativo:
  // __experimental_actions: ['update', 'publish'],

  fields: [
    // ── Título del sitio ───────────────────────────────────
    defineField({
      name: 'siteTitle',
      title: 'Nombre del sitio',
      type: 'string',
      description: 'Ej: "Terrabyte EC · Ingeniería de Software"',
      initialValue: 'Terrabyte EC',
      validation: (Rule) => Rule.required().max(80),
    }),

    // ── Hero Headline (H1 de la Home) ──────────────────────
    defineField({
      name: 'heroHeadline',
      title: 'Titular principal (Hero)',
      type: 'string',
      description: 'El texto grande del H1 en la Landing Page.',
      initialValue: 'Construimos software que escala con tu negocio.',
      validation: (Rule) => Rule.required().max(120),
    }),

    // ── Hero Subheadline ───────────────────────────────────
    defineField({
      name: 'heroSubheadline',
      title: 'Subtítulo del Hero',
      type: 'text',
      rows: 3,
      description: 'El párrafo de apoyo debajo del H1.',
      initialValue:
        'Desde Ambato, Ecuador, construimos productos digitales para empresas que quieren crecer. Full-stack · Cloud · Mobile.',
      validation: (Rule) => Rule.max(220),
    }),

    // ── Email de contacto ──────────────────────────────────
    defineField({
      name: 'contactEmail',
      title: 'Email de contacto',
      type: 'string',
      description: 'Mostrado en el footer y la página de Contacto.',
      initialValue: 'hola@terrabyte.ec',
      validation: (Rule) =>
        Rule.required().regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          { name: 'email', invert: false }
        ).error('Debe ser un email válido.'),
    }),

    // ── Redes sociales ─────────────────────────────────────
    defineField({
      name: 'socialLinks',
      title: 'Redes sociales',
      type: 'array',
      description: 'Lista de URLs de redes. Se muestran en el Footer y Contacto.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          title: 'Red social',
          fields: [
            {
              name: 'platform',
              title: 'Plataforma',
              type: 'string',
              options: {
                list: [
                  { title: 'GitHub',    value: 'github' },
                  { title: 'LinkedIn',  value: 'linkedin' },
                  { title: 'X / Twitter', value: 'x' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube',   value: 'youtube' },
                ],
                layout: 'radio',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) =>
                Rule.required().uri({ scheme: ['http', 'https'] }),
            },
            {
              name: 'label',
              title: 'Label (opcional)',
              type: 'string',
              description: 'Texto visible del enlace. Si se deja vacío se usa el nombre de la plataforma.',
            },
          ],
          preview: {
            select: { platform: 'platform', url: 'url' },
            prepare({ platform, url }) {
              return { title: platform, subtitle: url };
            },
          },
        }),
      ],
      initialValue: [
        { _key: 'gh',  platform: 'github',   url: 'https://github.com/terrrabyteec' },
        { _key: 'li',  platform: 'linkedin',  url: 'https://linkedin.com/company/terrabyte-ec' },
        { _key: 'x',   platform: 'x',         url: 'https://x.com/terrabyte_ec' },
      ],
    }),

    // ── SEO Meta description ───────────────────────────────
    defineField({
      name: 'seoDescription',
      title: 'Descripción SEO (meta description)',
      type: 'text',
      rows: 2,
      description: 'Aparece en Google debajo del título. Máx. 160 caracteres.',
      validation: (Rule) => Rule.max(160),
    }),
  ],

  preview: {
    select: { title: 'siteTitle', subtitle: 'contactEmail' },
  },
});
