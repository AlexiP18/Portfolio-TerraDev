import { defineType, defineArrayMember } from 'sanity';

/**
 * blockContent — Contenido enriquecido (Portable Text)
 * Usado en el campo `body` del schema `post`.
 */
export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  title: 'Contenido',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal',     value: 'normal' },
        { title: 'Heading 2',  value: 'h2' },
        { title: 'Heading 3',  value: 'h3' },
        { title: 'Heading 4',  value: 'h4' },
        { title: 'Quote',      value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet',   value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold',          value: 'strong' },
          { title: 'Italic',        value: 'em' },
          { title: 'Code',          value: 'code' },
          { title: 'Underline',     value: 'underline' },
          { title: 'Strikethrough', value: 'strike-through' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Enlace externo',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Abrir en nueva pestaña',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    // Imágenes inline dentro del cuerpo del artículo
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Importante para accesibilidad y SEO.',
          validation: (Rule) => Rule.required().warning('El texto alt es recomendado.'),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Pie de imagen',
        },
      ],
    }),
    // Bloque de código con resaltado de sintaxis
    defineArrayMember({
      type: 'object',
      name: 'codeBlock',
      title: 'Bloque de código',
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Lenguaje',
          options: {
            list: [
              { title: 'TypeScript', value: 'typescript' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'Python',     value: 'python' },
              { title: 'Bash',       value: 'bash' },
              { title: 'SQL',        value: 'sql' },
              { title: 'JSON',       value: 'json' },
              { title: 'YAML',       value: 'yaml' },
            ],
          },
        },
        {
          name: 'code',
          type: 'text',
          title: 'Código',
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Nombre del archivo (opcional)',
        },
      ],
      preview: {
        select: { language: 'language', filename: 'filename' },
        prepare({ language, filename }) {
          return {
            title: filename || `Código ${language ?? ''}`,
            subtitle: language,
          };
        },
      },
    }),
  ],
});
