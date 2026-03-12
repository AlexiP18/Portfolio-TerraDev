import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Miembro del Equipo',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Cargo / Rol',
      type: 'string',
      description: 'Ej: Tech Lead · Backend',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'specialty',
      title: 'Especialidad / Stack',
      type: 'string',
      description: 'Etiquetas o tecnologías, separadas por puntos. Ej: Node.js · Go',
    }),
    defineField({
      name: 'focus',
      title: 'Foco (Descripción Breve)',
      type: 'text',
      rows: 2,
      description: 'De 1 a 2 líneas describiendo en qué se enfoca el integrante.',
    }),
    defineField({
      name: 'github',
      title: 'Enlace de GitHub',
      type: 'url',
      description: 'Opcional. URL del perfil de GitHub.',
    }),
    defineField({
      name: 'linkedin',
      title: 'Enlace de LinkedIn',
      type: 'url',
      description: 'Opcional. URL del perfil de LinkedIn.',
    }),
    defineField({
      name: 'initials',
      title: 'Iniciales (Para placeholder)',
      type: 'string',
      description: 'Letras para el diseño por defecto si no hay foto. Ej: "GA".',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'color',
      title: 'Color de fondo (CSS)',
      type: 'string',
      description: 'El gradiente en CSS. Ej: "linear-gradient(135deg, #181a1c, #4fa08f)".',
    }),
    defineField({
      name: 'photo',
      title: 'Foto de perfil real',
      type: 'image',
      description: 'Sustituye a las iniciales. Se recortará en un formato cuadrado.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar a los integrantes. (Ej: 1 aparece primero)',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
  },
  orderings: [
    {
      title: 'Por Orden Numérico',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
