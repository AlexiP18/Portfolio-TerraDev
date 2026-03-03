const fs = require('fs');

try {
  let svg = fs.readFileSync('logo_terrabyte.txt', 'utf8');

  // Convert SVG attributes to camelCase for React
  svg = svg.replace(/class=/g, 'className=')
           .replace(/xml:space=/g, 'xmlSpace=')
           .replace(/fill-rule=/g, 'fillRule=')
           .replace(/clip-rule=/g, 'clipRule=')
           .replace(/stroke-width=/g, 'strokeWidth=')
           .replace(/stroke-linecap=/g, 'strokeLinecap=')
           .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
           .replace(/xmlns:xlink=/g, 'xmlnsXlink=');

  // Convert the main svg style string to a React style object
  svg = svg.replace(/style="([^"]*)"/g, (match, styleString) => {
    // If it's the specific complex one from the SVG tag:
    if (styleString.includes("shape-rendering")) {
        return 'style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}}';
    }
    // Convert other simple styles if they exist (display:none)
    if (styleString.includes("display:none")) {
        return 'style={{display: "none"}}';
    }
    return match;
  });

  // Transform the style tag inside defs
  svg = svg.replace(/<style>([\s\S]*?)<\/style>/, (match, cssBody) => {
      const addedAnim = `
        .animated-logo {
            transition: all 0.3s ease-in-out;
            transform-origin: 30% 50%;
        }
        .group:hover .animated-logo, .animated-logo:hover {
            animation: pulseLogo 3s infinite ease-in-out;
            filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.45));
        }
        @keyframes pulseLogo {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.04); }
        }
      `;
      return `<style dangerouslySetInnerHTML={{ __html: \`${cssBody} ${addedAnim}\` }} />`;
  });

  // Attach className to to the main outer group for the animation to act upon
  svg = svg.replace('<g id="Capa_x0020_1">', '<g id="Capa_x0020_1" className="animated-logo">');

  // Ensure attributes are valid. Remove any standalone 'style' string that slipped through if any.

  // Wrap the entire converted SVG inside a React component
  // Using {...props} so className or other things can be appended
  let jsx = `import React from 'react';\n\nexport default function LogoTerrabyte(props) {\n  return (\n    ${svg.replace('<svg ', '<svg {...props} ')}\n  );\n}\n`;

  fs.writeFileSync('src/components/LogoTerrabyte.jsx', jsx, 'utf8');
  console.log("Success: Logo regenerated with animation.");
} catch (e) {
  console.error("Error repairing SVG:", e.message);
}
