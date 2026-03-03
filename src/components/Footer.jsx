import React from 'react';
import { Link } from 'react-router-dom';
import LogoTerrabyte from './LogoTerrabyte.jsx';

/* ── Datos de columnas ────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Inicio',      to: '/' },
  { label: 'Servicios',   to: '/servicios' },
  { label: 'Metodología', to: '/equipo' },
  { label: 'Portafolio',  to: '/proyectos' },
  { label: 'Blog',        to: '/blog' },
];

const LEGAL_LINKS = [
  { label: 'Política de Privacidad', to: '/privacidad' },
  { label: 'Términos de Uso',        to: '/terminos' },
  { label: 'Cookies',                to: '/cookies' },
];

const CONTACT_INFO = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    text: 'hola@terraby.te',
    href: 'mailto:hola@terraby.te',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    text: 'Ambato, Ecuador',
    href: 'https://maps.google.com/?q=Ambato+Ecuador',
  },
];

/* ── Helper: columna de links ─────────────────────────────── */
function FooterLinkList({ title, links }) {
  return (
    <div>
      <h4 className="font-ui font-semibold text-sm text-text-main uppercase tracking-[0.14em] mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5 list-none p-0 m-0">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className="font-body text-sm text-text-muted hover:text-primary transition-colors duration-200 no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Footer principal ─────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#020617' }}
      className="border-t border-white/[0.07] mt-0"
    >
      {/* Grid principal */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Identidad ─────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-2.5 no-underline mb-4 group scale-95 origin-left">
              <LogoTerrabyte className="w-8 h-8 shrink-0" />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-text-main text-[1.05rem] tracking-tight group-hover:text-primary transition-colors duration-200">
                  Terrabyte EC
                </span>
              </div>
            </Link>

            {/* Slogan */}
            <p className="font-body text-sm text-text-muted leading-relaxed mt-3 max-w-[220px]">
              Ingeniería desde los Andes.<br />
              Software de alto rendimiento para negocios que escalan.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-5">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Links Rápidos ─────────────────────── */}
          <FooterLinkList title="Links Rápidos" links={QUICK_LINKS} />

          {/* ── Col 3: Legal ─────────────────────────────── */}
          <FooterLinkList title="Legal" links={LEGAL_LINKS} />

          {/* ── Col 4: Contacto ──────────────────────────── */}
          <div>
            <h4 className="font-ui font-semibold text-sm text-text-main uppercase tracking-[0.14em] mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {CONTACT_INFO.map(({ icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-body text-sm text-text-muted hover:text-primary transition-colors duration-200 no-underline group"
                  >
                    <span className="text-primary group-hover:scale-110 transition-transform duration-200 shrink-0">
                      {icon}
                    </span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA footer */}
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 mt-6 font-ui font-semibold text-sm text-bg-main bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-full shadow-glow-teal hover:shadow-glow-teal-lg transition-all duration-300 no-underline hover:-translate-y-0.5"
            >
              Iniciar Proyecto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Barra de copyright ────────────────────────────── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-text-muted text-center sm:text-left">
            © 2024 Terrabyte EC. Hecho con código y café en Ambato.
          </p>
          <p className="font-code text-xs text-text-muted/60 tracking-wide">
            v1.0.0 · Ambato, Ecuador 🇪🇨
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
