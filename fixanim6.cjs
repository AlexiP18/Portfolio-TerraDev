const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// Absolute reset - read from base txt, apply React conversions exactly, and add the CSS back manually without touching it via regex 
let pureSVG = fs.readFileSync('logo_react.txt', 'utf8');

pureSVG = pureSVG.replace(/<style dangerouslySetInnerHTML=\{\{ __html: \([\s\S]*?)\ \}\} \/>/, (match, css) => {
    let newCss = css.replace(/fillRule:nonzero/, 'fill-rule:nonzero') + 
                 " .animated-logo { transition: all 0.3s ease-in-out; transform-origin: 30% 50%; opacity: 0.95; } .animated-logo:hover, .group:hover .animated-logo { animation: pulseLogo 3s infinite ease-in-out; opacity: 1; filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.45)); } @keyframes pulseLogo { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(45, 212, 191, 0)); } 50% { transform: scale(1.04); filter: drop-shadow(0 0 12px rgba(45, 212, 191, 0.5)); } }";
    return <style dangerouslySetInnerHTML={{ __html: \${newCss}\ }} />;
});

// apply group wrapper
pureSVG = pureSVG.replace(/<g id="Capa_x0020_1">/, '<g id="Capa_x0020_1" className="animated-logo">');

const componentCode = 'import React from "react";\n\nexport default function LogoTerrabyte() {\n  return (\n    ' + pureSVG + '\n  );\n}\n';

fs.writeFileSync('src/components/LogoTerrabyte.jsx', componentCode);
