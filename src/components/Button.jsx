import React from 'react';

/**
 * Button — Componente global reutilizable Terrabyte EC
 *
 * Variantes:
 *  - 'primary'  → Fondo turquesa neón con glow en hover
 *  - 'outline'  → Borde turquesa, fondo transparente, relleno en hover
 *  - 'ghost'    → Solo texto, sin fondo ni borde
 *
 * Props:
 *  - variant  : 'primary' | 'outline' | 'ghost'  (default: 'primary')
 *  - size     : 'sm' | 'md' | 'lg'              (default: 'md')
 *  - as       : 'button' | 'a' | cualquier tag  (default: 'button')
 *  - className: clases extra
 *  - children : contenido
 *  - ...rest  : cualquier prop HTML nativa (href, onClick, type…)
 */

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-ui font-semibold ' +
  'transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main ' +
  'disabled:opacity-40 disabled:pointer-events-none select-none';

const variants = {
  primary:
    'bg-primary text-bg-main hover:bg-primary-dark hover:text-white ' +
    'shadow-glow-teal hover:shadow-glow-teal-lg hover:-translate-y-0.5 active:translate-y-0',

  outline:
    'border border-primary text-primary bg-transparent ' +
    'hover:bg-primary hover:text-bg-main hover:shadow-glow-teal hover:-translate-y-0.5 active:translate-y-0',

  ghost:
    'text-primary bg-transparent hover:bg-primary/10 ' +
    'hover:text-primary active:bg-primary/20',
};

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

function Button({
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={[base, variants[variant], sizes[size], className].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Button;
