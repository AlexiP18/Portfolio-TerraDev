import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button.jsx';

import LogoTerrabyte from './LogoTerrabyte.jsx';

const NAV_LINKS = [
  { label: 'Inicio',       to: '/' },
  { label: 'Servicios',    to: '/servicios' },
  { label: 'Metodología',  to: '/metodologia' },
  { label: 'Portafolio',   to: '/portafolio' },
  { label: 'Blog',         to: '/blog' },
  { label: 'Nosotros',     to: '/nosotros' },
];

/* Clase activa para NavLink */
const linkBase =
  'font-ui font-medium text-[0.95rem] px-3.5 py-2 rounded-xl transition-all duration-200 ' +
  'hover:text-text-main hover:bg-white/5';
const linkActive = 'text-primary';
const linkInactive = 'text-text-body';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const [hidden,   setHidden]    = useState(false);
  const prevScrollY = React.useRef(0);

  /* Sombra + hide-on-scroll-down */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      // Ocultar solo cuando se baja más de 60 px desde el tope
      if (y > 60) {
        setHidden(y > prevScrollY.current);
      } else {
        setHidden(false);
      }
      prevScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Cerrar menú al cambiar de ruta */
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out"
      style={{ transform: hidden ? 'translateY(-110%)' : 'translateY(0)' }}
    >
      {/* ── Desktop nav pill ──────────────────────────────── */}
      <div className="hidden md:flex justify-center pt-4 px-4">
        <nav
          className={[
            'w-full max-w-5xl flex items-center justify-between',
            'px-5 py-2.5 rounded-2xl',
            'bg-bg-secondary/70 backdrop-blur-xl',
            'border border-white/10',
            'transition-shadow duration-300',
            scrolled ? 'shadow-glass-lg' : 'shadow-glass',
          ].join(' ')}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-text-main no-underline group"
          >
            <LogoTerrabyte className="w-9 h-9 md:w-10 md:h-10 shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-[1.1rem] tracking-tight text-text-main group-hover:text-primary transition-colors duration-200">
                Terrabyte EC
              </span>
              <span className="font-ui font-medium text-[0.65rem] text-text-muted uppercase tracking-[0.18em] mt-0.5">
                Software Studio
              </span>
            </div>
          </Link>

          {/* Links centro */}
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [linkBase, isActive ? linkActive : linkInactive].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button as={Link} to="/contacto" size="sm">
            Iniciar Proyecto
          </Button>
        </nav>
      </div>

      {/* ── Mobile nav ────────────────────────────────────── */}
      <div className="md:hidden">
        {/* Top bar */}
        <div
          className={[
            'flex items-center justify-between px-4 py-3',
            'bg-bg-secondary/80 backdrop-blur-xl',
            'border-b border-white/10',
            'transition-shadow duration-300',
            scrolled ? 'shadow-glass' : '',
          ].join(' ')}
        >
          {/* Logo mobile */}
          <Link to="/" className="flex items-center gap-2 no-underline" onClick={closeMenu}>
            <LogoTerrabyte />
            <span className="font-heading font-bold text-text-main text-[1.05rem]">
              Terrabyte EC
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className={[
              'relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]',
              'rounded-lg bg-white/5 border border-white/10',
              'transition-colors duration-200 hover:bg-white/10',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            ].join(' ')}
          >
            <span
              className={[
                'block w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 origin-center',
                menuOpen ? 'rotate-45 translate-y-[6.5px]' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-text-main rounded-full transition-all duration-300',
                menuOpen ? 'opacity-0 scale-x-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-text-main rounded-full transition-all duration-300 origin-center',
                menuOpen ? '-rotate-45 -translate-y-[6.5px]' : '',
              ].join(' ')}
            />
          </button>
        </div>

        {/* Dropdown mobile */}
        <div
          className={[
            'overflow-hidden transition-all duration-300 ease-in-out',
            'bg-bg-secondary/95 backdrop-blur-xl border-b border-white/10',
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    'font-ui font-medium text-base px-4 py-3 rounded-xl transition-all duration-200',
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-text-body hover:text-text-main hover:bg-white/5',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2 pb-1">
              <Button as={Link} to="/contacto" size="sm" className="w-full" onClick={closeMenu}>
                Iniciar Proyecto
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

