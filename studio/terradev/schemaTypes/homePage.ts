import { defineType, defineField, defineArrayMember } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  type: 'document',
  icon: HomeIcon,
  // __experimental_actions: ['update', 'publish'], // Si deseas que sea estricto Singleton anidar esto

  fields: [
    // ── Pre-título (Pill) ──────────────────────────────────
    defineField({
      name: 'heroPill',
      title: 'Pre-título (Pill)',
      type: 'string',
      description: 'El texto pequeño arriba del título principal.',
      initialValue: 'Estudio independiente · Latinoamérica',
    }),

    // ── Título Principal (Hero) ────────────────────────────
    defineField({
      name: 'heroTitle',
      title: 'Título Principal (Hero)',
      type: 'string',
      description: 'Si se define, sobreescribe el "heroHeadline" de los Ajustes Generales.',
      initialValue: 'Diseñamos, construimos y lanzamos productos con intención',
    }),

    // ── Descripción del Hero ───────────────────────────────
    defineField({
      name: 'heroDescription',
      title: 'Descripción (Hero)',
      type: 'text',
      rows: 3,
      description: 'El párrafo principal debajo del H1.',
      initialValue: 'Acompañamos a equipos de producto desde la definición estratégica hasta la entrega en producción. Combinamos investigación, diseño de sistemas y código limpio para mantener coherencia en cada release.',
    }),

    // ── Puntos de foco (Hero Meta) ─────────────────────────
    defineField({
      name: 'heroMeta',
      title: 'Puntos de foco (Hero Meta)',
      type: 'array',
      description: 'La lista de 3 puntos (Focus, Formato, Resultado).',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiqueta (Ej: Focus)', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'string' },
          ]
        })
      ]
    }),

    // ── Panel Lateral: Estado del Estudio ──────────────────
    defineField({
      name: 'studioStatusLabel',
      title: 'Etiqueta del Panel Lateral',
      type: 'string',
      initialValue: 'Estado del estudio',
    }),
    defineField({
      name: 'availableSlots',
      title: 'Slots Disponibles (Número)',
      type: 'string',
      initialValue: '02',
    }),
    defineField({
      name: 'availableSlotsText',
      title: 'Slots Disponibles (Texto)',
      type: 'string',
      initialValue: 'Slots disponibles Q2',
    }),

    // ── Fases del proceso ──────────────────────────────────
    defineField({
      name: 'processSteps',
      title: 'Fases del proceso',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'title', title: 'Nombre de la fase (Ej: Discovery)', type: 'string' },
            { name: 'subtitle', title: 'Detalle', type: 'string' },
          ]
        })
      ]
    }),

    // ── Métricas Inferiores ────────────────────────────────
    defineField({
      name: 'metrics',
      title: 'Métricas Relevantes',
      type: 'array',
      description: 'Los cuatro números grandes (ej: +120 Productos lanzados).',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'value', title: 'Valor (Ej: +120)', type: 'string' },
            { name: 'label', title: 'Etiqueta (Ej: Productos lanzados)', type: 'string' },
          ]
        })
      ]
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Página de Inicio' };
    }
  }
});
