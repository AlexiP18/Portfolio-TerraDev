import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare, FiSettings, FiClipboard, FiMapPin, FiCalendar, FiMaximize2, FiX, FiZoomIn, FiZoomOut, FiRefreshCw } from 'react-icons/fi';
import { TbBrain, TbRobot } from 'react-icons/tb';
import { SiVuedotjs, SiNestjs, SiPostgresql } from 'react-icons/si';

import imgDashboard from '../assets/proyectos/media-dashboard.png';
import imgChat from '../assets/proyectos/media-chat.png';
import imgRegistro from '../assets/proyectos/media-registro.png';
import imgMapa from '../assets/proyectos/media-mapa.png';

export default function CaseStudyMedia() {
  const [expandedImage, setExpandedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openModal = useCallback((src) => {
    setExpandedImage(src);
    setZoom(1);
  }, []);

  const closeModal = useCallback(() => {
    setExpandedImage(null);
    setZoom(1);
  }, []);

  const resetView = useCallback(() => {
    setZoom(1);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeModal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#0B1120] text-gray-200 font-body min-h-screen">
      
      {/* =========================================================
          1. HERO SECTION (Impacto Visual)
      ========================================================= */}
      <section className="relative w-full pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2DD4BF]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="font-ui font-medium text-xs text-[#2DD4BF] uppercase tracking-widest">
              Caso de Estudio
            </span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white tracking-tight">
            MED/IA: Sistema Inteligente de <br className="hidden sm:block" />
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #2DD4BF, #67e8f9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Triaje y Gestión de Salud.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mt-2">
            Bridging the gap between patients and specialists using AI & Geolocation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            {['UX/UI Design', 'Full-Stack Development', 'AI Integration', '2026'].map(chip => (
              <span key={chip} className="px-4 py-2 border border-white/10 bg-white/5 rounded-full text-xs font-ui tracking-wide text-gray-300 backdrop-blur-sm">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Mockup Area */}
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-20 perspective-1000">
          <div className="relative aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl border border-white/10 shadow-2xl shadow-[#2DD4BF]/5 flex items-center justify-center overflow-hidden hover:scale-[1.01] transition-transform duration-500">
            {/* Placeholder for Laptop Dashboard Mockup */}
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity transition-opacity duration-500 hover:opacity-100 hover:mix-blend-normal" style={{ backgroundImage: `url(${imgDashboard})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent pointer-events-none" />
            <p className="relative z-10 text-[#2DD4BF] font-ui tracking-widest text-sm uppercase px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Dashboard Laptop
            </p>
            
            {/* Floating Mobile iPhone Mockup */}
            <div className="absolute -bottom-10 -right-4 sm:right-10 w-40 sm:w-56 aspect-[9/19] bg-[#0f172a] rounded-[2rem] border-4 border-[#334155] shadow-2xl flex items-center justify-center overflow-hidden group/mobile hover:scale-105 transition-transform duration-300">
               <div className="absolute inset-0 bg-cover bg-top opacity-50 mix-blend-luminosity group-hover/mobile:opacity-100 group-hover/mobile:mix-blend-normal transition-all duration-300" style={{ backgroundImage: `url(${imgChat})` }} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. RESUMEN DEL PROYECTO (Contexto)
      ========================================================= */}
      <section className="w-full py-20 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col gap-4">
            <h3 className="font-ui text-xs text-gray-500 uppercase tracking-widest">El Problema</h3>
            <p className="text-xl sm:text-2xl font-heading font-medium text-white leading-relaxed">
              Saturación de servicios de urgencia y falta de orientación médica inmediata.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-ui text-xs text-[#2DD4BF] uppercase tracking-widest">La Solución</h3>
            <p className="text-xl sm:text-2xl font-heading font-medium text-gray-300 leading-relaxed">
              Una plataforma web progresiva (PWA) que utiliza <span className="text-white">NLP</span> para clasificar síntomas por gravedad y agendar citas automáticamente.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. GALERÍA DE DISEÑO (High-Fidelity UI)
      ========================================================= */}
      <section className="w-full py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-3xl text-white">Diseño Centrado en el Paciente</h2>
            <p className="text-gray-400 font-body">Interfaces limpias para reducir la fricción cognitiva en momentos de estrés.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 p-6 flex flex-col">
              <div 
                className="w-full h-48 bg-[#1e293b]/50 rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative cursor-pointer group/img"
                onClick={() => openModal(imgRegistro)}
              >
                 <div className="absolute inset-0 bg-cover bg-top opacity-50 mix-blend-luminosity group-hover/img:opacity-100 group-hover/img:mix-blend-normal group-hover/img:scale-105 transition-all duration-500" style={{ backgroundImage: `url(${imgRegistro})` }} />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <FiMaximize2 className="w-8 h-8 text-white drop-shadow-md" />
                 </div>
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-white">Registro de Perfil</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Clean forms diseñados para captura de datos sin abrumar al usuario.</p>
            </div>

            {/* Card 2 */}
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#2DD4BF]/10 to-transparent border border-[#2DD4BF]/20 p-6 flex flex-col md:-translate-y-8">
              <div 
                className="w-full h-48 bg-black/20 rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative cursor-pointer group/img"
                onClick={() => openModal(imgChat)}
              >
                 <div className="absolute inset-0 bg-cover bg-top opacity-50 mix-blend-luminosity group-hover/img:opacity-100 group-hover/img:mix-blend-normal group-hover/img:scale-105 transition-all duration-500" style={{ backgroundImage: `url(${imgChat})` }} />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <FiMaximize2 className="w-8 h-8 text-white drop-shadow-md" />
                 </div>
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-white">AI Chat Interface</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Burbujas de chat amigables y análisis de síntomas en tiempo real con NLP.</p>
            </div>

            {/* Card 3 */}
            <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 p-6 flex flex-col">
              <div 
                className="w-full h-48 bg-[#1e293b]/50 rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative cursor-pointer group/img"
                onClick={() => openModal(imgMapa)}
              >
                 <div className="absolute inset-0 bg-cover bg-top opacity-50 mix-blend-luminosity group-hover/img:opacity-100 group-hover/img:mix-blend-normal group-hover/img:scale-105 transition-all duration-500" style={{ backgroundImage: `url(${imgMapa})` }} />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <FiMaximize2 className="w-8 h-8 text-white drop-shadow-md" />
                 </div>
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1120] to-transparent z-10" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-white">Mapa de Doctores</h4>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Geolocalización precisa de especialistas cercanos a la ubicación del paciente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. ARQUITECTURA TÉCNICA (Bento Grid)
      ========================================================= */}
      <section className="w-full py-24 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col gap-2 items-center text-center">
            <h2 className="font-heading font-bold text-3xl text-white">Ingeniería y Stack Tecnológico</h2>
            <p className="text-gray-400 font-body max-w-2xl">La base robusta que permite un procesamiento rápido, seguro y escalable para aplicaciones de la salud.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Bento 1: Frontend */}
            <div className="md:col-span-1 rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
              <div>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-[0.65rem] font-ui uppercase tracking-widest rounded-full border border-green-500/20">Responsive SPA</span>
                <h4 className="font-heading font-semibold text-xl text-white mt-4">Frontend</h4>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shadow-inner border border-white/5">
                  <SiVuedotjs className="w-7 h-7 text-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Vue.js</span>
                  <span className="text-gray-500 text-sm">Nuxt.js</span>
                </div>
              </div>
            </div>

            {/* Bento 2: AI Logic Diagram */}
            <div className="md:col-span-2 rounded-3xl bg-white/[0.03] border border-[#2DD4BF]/20 p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <h4 className="font-ui text-xs text-[#2DD4BF] tracking-widest uppercase mb-6 z-10">AI Logic Flow</h4>
              
              {/* Diagram */}
              <div className="flex items-center justify-between w-full z-10 overflow-x-auto pb-4 hide-scrollbar snap-x">
                <div className="flex flex-col items-center gap-2 snap-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><FiMessageSquare className="w-6 h-6 text-gray-300" /></div>
                  <span className="text-xs text-gray-400 font-ui uppercase">Input Síntomas</span>
                </div>
                <div className="w-full max-w-[40px] h-[1px] bg-gradient-to-r from-white/10 to-[#2DD4BF]/50 relative shrink-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-[#2DD4BF]/80" />
                </div>
                <div className="flex flex-col items-center gap-2 snap-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><FiSettings className="w-6 h-6 text-gray-300" /></div>
                  <span className="text-xs text-gray-400 font-ui uppercase">API Gateway</span>
                </div>
                <div className="w-full max-w-[40px] h-[1px] bg-gradient-to-r from-[#2DD4BF]/50 to-[#2DD4BF] relative shrink-0">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-[#2DD4BF]" />
                </div>
                <div className="flex flex-col items-center gap-2 snap-center shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 shadow-[0_0_15px_rgba(45,212,191,0.2)] flex items-center justify-center"><TbBrain className="w-8 h-8 text-[#2DD4BF]" /></div>
                  <span className="text-xs text-[#2DD4BF] font-ui uppercase font-bold">AI Engine (NLP)</span>
                </div>
                <div className="w-full max-w-[40px] h-[1px] bg-gradient-to-r from-[#2DD4BF] to-white/10 relative shrink-0">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-white/30" />
                </div>
                <div className="flex flex-col items-center gap-2 snap-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><FiClipboard className="w-6 h-6 text-gray-300" /></div>
                  <span className="text-xs text-gray-400 font-ui uppercase">Output Triaje</span>
                </div>
              </div>
            </div>

            {/* Bento 3: Backend */}
            <div className="md:col-span-1 rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
              <div>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 text-[0.65rem] font-ui uppercase tracking-widest rounded-full border border-red-500/20">Scalable Microservices</span>
                <h4 className="font-heading font-semibold text-xl text-white mt-4">Backend</h4>
              </div>
              <div className="flex items-center gap-4 mt-6">
                 <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shadow-inner border border-white/5">
                   <SiNestjs className="w-7 h-7 text-red-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">NestJS</span>
                  <span className="text-gray-500 text-sm">Node.js + TS</span>
                </div>
              </div>
            </div>

            {/* Bento 4: Database */}
            <div className="md:col-span-1 rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-colors">
              <div>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[0.65rem] font-ui uppercase tracking-widest rounded-full border border-blue-500/20">Relational Integrity</span>
                <h4 className="font-heading font-semibold text-xl text-white mt-4">Base de Datos</h4>
              </div>
              <div className="flex items-center gap-4 mt-6">
                 <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center shadow-inner border border-white/5">
                   <SiPostgresql className="w-7 h-7 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">PostgreSQL</span>
                  <span className="text-gray-500 text-sm">Supabase / Prisma</span>
                </div>
              </div>
            </div>

            {/* Bento 5: Security */}
            <div className="md:col-span-1 rounded-3xl bg-white/[0.02] border border-white/5 p-6 flex items-center justify-center">
               <div className="flex flex-wrap items-center justify-center gap-2">
                 {['JWT Auth', 'HTTPS/TLS', 'Data Encryption'].map(badge => (
                   <div key={badge} className="px-3 py-1.5 bg-[#1e293b]/50 border border-white/10 rounded-lg flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full" />
                     <span className="text-xs text-gray-300 font-code tracking-wide">{badge}</span>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          5. FUNCIONALIDADES CLAVE (Features)
      ========================================================= */}
      <section className="w-full py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#2DD4BF]/5">
        <div className="max-w-4xl mx-auto flex flex-col gap-14">
          
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl text-white">Funcionalidades Clave</h2>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Feat 1 */}
            <div className="flex items-start gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#2DD4BF]/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#2DD4BF]/10 group-hover:border-[#2DD4BF]/20 transition-colors">
                <FiMapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl text-white mb-2">Geolocalización Inmediata</h4>
                <p className="text-gray-400 leading-relaxed">Búsqueda rápida y precisa de especialistas o centros de salud más cercanos según la ubicación en tiempo real del paciente.</p>
              </div>
            </div>

            {/* Feat 2 */}
            <div className="flex items-start gap-6 p-6 md:p-8 rounded-3xl bg-[#2DD4BF]/5 border border-[#2DD4BF]/20 hover:bg-[#2DD4BF]/10 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-[#2DD4BF]/10 flex items-center justify-center shrink-0 border border-[#2DD4BF]/30">
                <TbRobot className="w-6 h-6 text-[#2DD4BF]" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl text-white mb-2">Triaje Inteligente (AI Engine)</h4>
                <p className="text-gray-300 leading-relaxed">Motor NLP que clasifica dinámicamente el estado del paciente en <span className="text-green-400">Leve</span>, <span className="text-yellow-400">Moderado</span> o <span className="text-red-400">Urgente</span> para reaccionar a tiempo.</p>
              </div>
            </div>

            {/* Feat 3 */}
            <div className="flex items-start gap-6 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#2DD4BF]/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#2DD4BF]/10 group-hover:border-[#2DD4BF]/20 transition-colors">
                <FiCalendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl text-white mb-2">Gestión de Citas</h4>
                <p className="text-gray-400 leading-relaxed">Agenda en tiempo real con sistema de turnos, confirmaciones automatizadas e integración al calendario personal.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          6. FOOTER CTA
      ========================================================= */}
      <section className="w-full py-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="font-heading font-bold text-4xl text-white mb-8">¿Listo para ver el código?</h2>
        <a 
          href="https://github.com" 
          target="_blank" rel="noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-ui font-semibold text-bg-main bg-[#2DD4BF] rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:shadow-[0_0_60px_rgba(45,212,191,0.5)]"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
          <span className="relative z-10">Ver Código en GitHub</span>
        </a>
      </section>
      {/* =========================================================
          7. IMAGE MODAL / LIGHTBOX
      ========================================================= */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] bg-[#0B1120]/95 backdrop-blur-xl flex flex-col"
          onClick={closeModal}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between px-6 py-4 z-[110] border-b border-white/10 bg-black/30 backdrop-blur-md shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Zoom Controls */}
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
              <button
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white disabled:opacity-30 transition-colors"
                onClick={() => setZoom(prev => Math.max(0.5, prev - 0.25))}
                disabled={zoom <= 0.5}
                title="Alejar"
              >
                <FiZoomOut className="w-4 h-4" />
              </button>
              <span className="font-code text-xs text-gray-400 w-11 text-center select-none">
                {Math.round(zoom * 100)}%
              </span>
              <button
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white disabled:opacity-30 transition-colors"
                onClick={() => setZoom(prev => Math.min(4, prev + 0.25))}
                disabled={zoom >= 4}
                title="Acercar"
              >
                <FiZoomIn className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-white/20 mx-1" />
              <button
                className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                onClick={resetView}
                title="Restablecer tamaño"
              >
                <FiRefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Hint */}
            <p className="hidden sm:block font-code text-xs text-gray-500 select-none">
              Usa los controles para hacer zoom y el scroll para navegar · Esc para cerrar
            </p>

            {/* Right: Close Button */}
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-100 border border-red-500/30 transition-colors text-sm font-ui"
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
              title="Cerrar"
            >
              <FiX className="w-4 h-4" />
              <span className="hidden sm:inline">Cerrar</span>
            </button>
          </div>

          {/* Image Viewport — scrollable when zoomed */}
          <div
            className="flex-1 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-center p-4 sm:p-8"
              style={{
                width: zoom > 1 ? `${zoom * 100}%` : '100%',
                height: zoom > 1 ? `${zoom * 100}%` : '100%',
                minWidth: '100%',
                minHeight: '100%',
              }}
            >
              <img
                src={expandedImage}
                alt="Expanded mock"
                className="rounded-xl shadow-2xl border border-white/10 transition-all duration-200 bg-[#0B1120]"
                style={{
                  width: '100%',
                  maxWidth: zoom > 1 ? 'none' : '1024px',
                  maxHeight: zoom > 1 ? 'none' : '85vh',
                  objectFit: 'contain',
                }}
                draggable="false"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
