const fs = require('fs');
let svg = fs.readFileSync('logo_terrabyte.txt', 'utf8');

// replace hyphens for camelCase in React props
svg = svg.replace(/class=/g, 'className=');
svg = svg.replace(/fill-rule/g, 'fillRule');
svg = svg.replace(/clip-rule/g, 'clipRule');
svg = svg.replace(/xml:space/g, 'xmlSpace');
svg = svg.replace(/shape-rendering/g, 'shapeRendering');
svg = svg.replace(/text-rendering/g, 'textRendering');
svg = svg.replace(/image-rendering/g, 'imageRendering');

// Replace style="fill:#..." with style={{fill: '#...'}}
svg = svg.replace(/style="fill:([^;"]+)"/g, 'style={{ fill: "$1" }}');

// Process complex style tags
svg = svg.replace(/style="shapeRendering:geometricPrecision;textRendering:geometricPrecision;imageRendering:optimizeQuality;fillRule:evenodd;clipRule:evenodd"/g, "style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}");

// Move <style>...</style> block to aggressively set inner HTML
svg = svg.replace(/<style>(.*?)<\/style>/s, '<style dangerouslySetInnerHTML={{ __html: `$1` }} />');

// Clean dimensions for web
svg = svg.replace(/width="120mm" height="80mm"/, 'className="h-10 w-auto"'); // h-10 is ~40px which is good for navbar

const componentCode = `import React from 'react';

export default function LogoTerrabyte() {
  return (
    ${svg}
  );
}
`;

fs.writeFileSync('src/components/LogoTerrabyte.jsx', componentCode);
console.log('done writing component');
