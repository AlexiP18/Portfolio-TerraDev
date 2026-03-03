const fs = require('fs');

let code = fs.readFileSync('src/pages/Servicios.jsx', 'utf8');

// 1. Add react-icons imports after Button import
code = code.replace(
  `import Button from '../components/Button.jsx';`,
  `import Button from '../components/Button.jsx';
import {
  SiReact, SiNextdotjs, SiFlutter, SiTailwindcss,
  SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker,
  SiPostgresql, SiMongodb, SiRedis, SiGithubactions,
} from 'react-icons/si';
import {
  LuRocket, LuBuilding2, LuShoppingCart,
  LuSettings2, LuBarChart3, LuShieldCheck,
} from 'react-icons/lu';`
);

// 2. Remove the entire hand-drawn Icons SVG block (comment + const Icons = {...})
// It starts with the comment and ends just before DATOS comment
code = code.replace(
  /\/\* ─+\s*ICONOS SVG INLINE[^*]+\*\/\s*const Icons = \{[\s\S]*?\};\s*/m,
  ''
);

// 3. Update CATEGORIAS techs to use Simple Icons with colors
code = code.replace(
  `    techs: [
      { Icon: Icons.React,   name: 'React',    since: 'v19' },
      { Icon: Icons.Next,    name: 'Next.js',  since: 'v15' },
      { Icon: Icons.Flutter, name: 'Flutter',  since: 'v3'  },
      { Icon: Icons.Tailwind,name: 'Tailwind', since: 'v3'  },
    ],`,
  `    techs: [
      { Icon: SiReact,        name: 'React',    color: '#61DAFB', since: 'v19' },
      { Icon: SiNextdotjs,    name: 'Next.js',  color: '#ffffff', since: 'v15' },
      { Icon: SiFlutter,      name: 'Flutter',  color: '#54C5F8', since: 'v3'  },
      { Icon: SiTailwindcss,  name: 'Tailwind', color: '#06B6D4', since: 'v3'  },
    ],`
);

code = code.replace(
  `    techs: [
      { Icon: Icons.Node,   name: 'Node.js',  since: 'v22' },
      { Icon: Icons.Python, name: 'Python',   since: 'v3.13' },
      { Icon: Icons.AWS,    name: 'AWS',      since: null   },
      { Icon: Icons.Docker, name: 'Docker',   since: null   },
    ],`,
  `    techs: [
      { Icon: SiNodedotjs,          name: 'Node.js', color: '#5FA04E', since: 'v22'   },
      { Icon: SiPython,             name: 'Python',  color: '#3776AB', since: 'v3.13' },
      { Icon: SiAmazonwebservices,  name: 'AWS',     color: '#FF9900', since: null    },
      { Icon: SiDocker,             name: 'Docker',  color: '#2496ED', since: null    },
    ],`
);

code = code.replace(
  `    techs: [
      { Icon: Icons.PostgreSQL, name: 'PostgreSQL', since: 'v17' },
      { Icon: Icons.MongoDB,    name: 'MongoDB',    since: 'v8'  },
      { Icon: Icons.Redis,      name: 'Redis',      since: 'v7'  },
      { Icon: Icons.GitHub,     name: 'CI/CD',      since: null  },
    ],`,
  `    techs: [
      { Icon: SiPostgresql,    name: 'PostgreSQL', color: '#4169E1', since: 'v17' },
      { Icon: SiMongodb,       name: 'MongoDB',    color: '#47A248', since: 'v8'  },
      { Icon: SiRedis,         name: 'Redis',      color: '#FF4438', since: 'v7'  },
      { Icon: SiGithubactions, name: 'CI/CD',      color: '#2088FF', since: null  },
    ],`
);

// 4. Update CatCard icon rendering to use color prop
code = code.replace(
  `        {techs.map(({ Icon, name, since }) => (`,
  `        {techs.map(({ Icon, name, color, since }) => (`
);
code = code.replace(
  `            <Icon />
            <div className="flex flex-col leading-none">`,
  `            <Icon size={22} color={color} />
            <div className="flex flex-col leading-none">`
);

// 5. Replace emojis in TIPOS_PROYECTO with icon components
code = code.replace(
  `    emoji: '🚀',
    title: 'MVPs para Startups',`,
  `    Icon: LuRocket,
    iconColor: '#2DD4BF',
    title: 'MVPs para Startups',`
);
code = code.replace(
  `    emoji: '🏢',
    title: 'Sistemas Enterprise',`,
  `    Icon: LuBuilding2,
    iconColor: '#818cf8',
    title: 'Sistemas Enterprise',`
);
code = code.replace(
  `    emoji: '🛒',
    title: 'E-commerce',`,
  `    Icon: LuShoppingCart,
    iconColor: '#f472b6',
    title: 'E-commerce',`
);
code = code.replace(
  `    emoji: '⚙️',
    title: 'Automatización',`,
  `    Icon: LuSettings2,
    iconColor: '#fb923c',
    title: 'Automatización',`
);
code = code.replace(
  `    emoji: '📊',
    title: 'Analytics & BI',`,
  `    Icon: LuBarChart3,
    iconColor: '#34d399',
    title: 'Analytics & BI',`
);
code = code.replace(
  `    emoji: '🔒',
    title: 'Seguridad & DevSecOps',`,
  `    Icon: LuShieldCheck,
    iconColor: '#fbbf24',
    title: 'Seguridad & DevSecOps',`
);

// 6. Update TipoCard component signature and emoji rendering
code = code.replace(
  `function TipoCard({ emoji, title, desc, tags, accent }) {`,
  `function TipoCard({ Icon, iconColor, title, desc, tags, accent }) {`
);
code = code.replace(
  `      {/* Emoji icono */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: accent + '18', border: \`1px solid \${accent}30\` }}
      >
        {emoji}
      </div>`,
  `      {/* Icono */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: accent + '18', border: \`1px solid \${accent}30\` }}
      >
        <Icon size={22} color={iconColor} />
      </div>`
);

// 7. Update the TipoCard rendering call to pass new props
code = code.replace(
  `          {TIPOS_PROYECTO.map((t) => (
            <TipoCard key={t.title} {...t} />`,
  `          {TIPOS_PROYECTO.map((t) => (
            <TipoCard key={t.title} {...t} />`
);

fs.writeFileSync('src/pages/Servicios.jsx', code, 'utf8');
console.log('Servicios.jsx updated successfully!');
