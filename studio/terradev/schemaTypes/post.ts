import { defineType, defineField } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

/**
 * Schema: post
 * Representa un artículo del blog de Terrabyte EC.
 */
export const post = defineType({
  name: 'post',
  title: 'Post del Blog',
  type: 'document',
  icon: DocumentTextIcon,

  fields: [
    // ── Título ────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'El título principal del artículo.',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),

    // ── Slug (URL amigable) ────────────────────────────────
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'URL del artículo: /blog/tu-slug. Se genera automáticamente del título.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // quitar tildes
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Imagen de portada ──────────────────────────────────
    defineField({
      name: 'mainImage',
      title: 'Imagen de portada',
      type: 'image',
      options: {
        hotspot: true, // permite foco de recorte manual
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Describe la imagen. Importante para SEO y accesibilidad.',
          validation: (Rule) => Rule.required().warning('El texto alt es muy recomendado.'),
        },
      ],
    }),

    // ── Categorías / Tags ──────────────────────────────────
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      description: 'Tags del artículo. Ej: "DevOps", "Frontend", "Cloud".',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        list: [
          { title: 'Frontend',      value: 'Frontend' },
          { title: 'Backend',       value: 'Backend' },
          { title: 'DevOps',        value: 'DevOps' },
          { title: 'Cloud',         value: 'Cloud' },
          { title: 'Mobile',        value: 'Mobile' },
          { title: 'Data',          value: 'Data' },
          { title: 'Arquitectura',  value: 'Arquitectura' },
          { title: 'Ingeniería',    value: 'Ingeniería' },
        ],
      },
    }),

    // ── Fecha de publicación ───────────────────────────────
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      description: 'Puedes programar publicaciones futuras.',
      initialValue: () => new Date().toISOString(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    }),

    // ── Extracto (resumen corto) ───────────────────────────
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      rows: 3,
      description: 'Resumen para listas y SEO (máx. 200 caracteres).',
      validation: (Rule) => Rule.max(200),
    }),

    // ── Cuerpo del artículo (Portable Text) ───────────────
    defineField({
      name: 'body',
      title: 'Contenido del artículo',
      type: 'blockContent',
      description: 'Usa el editor para redactar el artículo completo.',
    }),
  ],

  // ── Vista previa en el Studio ──────────────────────────
  preview: {
    select: {
      title:    'title',
      author:   'author.name',
      media:    'mainImage',
      date:     'publishedAt',
      cats:     'categories',
    },
    prepare({ title, media, date, cats }) {
      const dateStr = date
        ? new Date(date).toLocaleDateString('es-EC', { dateStyle: 'medium' })
        : 'Sin fecha';
      const tags = cats?.join(', ') ?? 'Sin categoría';
      return {
        title,
        subtitle: `${dateStr} · ${tags}`,
        media,
      };
    },
  },

  // ── Ordenación por defecto en el Studio ───────────────
  orderings: [
    {
      title: 'Más recientes primero',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Título A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
