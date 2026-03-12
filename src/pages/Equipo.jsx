import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanity/client';
import { TEAM_MEMBERS_QUERY } from '../sanity/queries';

function Equipo() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback en caso de que Sanity falle o esté vacío
  const fallbackTeam = [
    {
      name: 'Alex Guachi',
      title: 'Tech Lead · Backend',
      specialty: 'Node.js · Go · Event-driven',
      focus: 'Arquitecturas resilientes, APIs de alto tráfico y sistemas distribuidos.',
      github: 'https://github.com/A1EXF6A',
      initials: 'AG',
      photo: '/team/alex_guachi.jpg',
    },
    {
      name: 'Heidi Villavicencio',
      title: 'Product Engineer · Frontend',
      specialty: 'React · Next.js · TypeScript',
      focus: 'Design systems accesibles, motion y performance en interfaces complejas.',
      github: 'https://github.com/HeidiVM',
      initials: 'HV',
      photo: '/team/heidi_villavicencio.jpg',
    },
    {
      name: 'Michelle Tunja',
      title: 'Lead UX / Frontend',
      specialty: 'DesignOps · CSS · WebGL',
      focus: 'Narrativas visuales, prototipos de alta fidelidad y microinteracciones.',
      github: 'https://github.com/Ale-2906',
      initials: 'MT',
      photo: '/team/michelle_tunja.jpg',
    },
    {
      name: 'Daniel Calapiña',
      title: 'Platform Engineer',
      specialty: 'Python · Rust · DevOps',
      focus: 'Automatización CI/CD, observabilidad y seguridad en la nube.',
      github: 'https://github.com/RanMd',
      initials: 'DC',
      photo: '/team/daniel_calapiña.jpg',
    },
    {
      name: 'Dennis Chimborazo',
      title: 'Backend Specialist',
      specialty: 'Java · Kotlin · Microservicios',
      focus: 'Domain-driven design, data pipelines y optimización de bases.',
      github: 'https://github.com/Dennis-Chimborazo',
      initials: 'DX',
      photo: '/team/dennis_chimborazo.jpg',
    },
    {
      name: 'Alexis Poaquiza',
      title: 'DevOps & Reliability',
      specialty: 'AWS · Kubernetes · Terraform',
      focus: 'Infraestructuras reproducibles, monitoreo y respuesta a incidentes.',
      github: 'https://github.com/AlexiP18',
      initials: 'AP',
      photo: '/team/alexis_poaquiza.jpg',
    },
  ];

  useEffect(() => {
    client
      .fetch(TEAM_MEMBERS_QUERY)
      .then((data) => {
        setTeam(data?.length ? data : fallbackTeam);
      })
      .catch((err) => {
        console.error('Error fetching team:', err);
        setTeam(fallbackTeam);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card">
      <div className="spark" />
      <div className="pill">Human-first</div>
      <h1>Un equipo distribuido que combina producto, ingeniería y narrativa</h1>
      <p>
        Operamos como un squad senior plug-and-play. Co-creamos con tu equipo interno, compartimos procesos y dejamos documentación viva.
      </p>
      <div className="team-grid">
        {team.map((member) => {
          const photoSrc = member.photo?.asset
            ? urlFor(member.photo).width(400).height(400).url()
            : member.photo;

          return (
            <article className="talent-card" key={member.github || member.name}>
              <img
                src={photoSrc}
                alt={`Foto de ${member.name}`}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = `https://placehold.co/200x200/151a1f/ffffff?text=${member.initials}`; }}
              />
              <div className="talent-card__copy">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <span className="talent-specialty">{member.specialty}</span>
                <small>{member.focus}</small>
              </div>
              <a href={member.github} target="_blank" rel="noreferrer" className="ghost-link">
                Ver perfil
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Equipo;
