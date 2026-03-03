const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// Add an overall group that scales on hover. 
// A nice approach is wrapping only the icon group to animate it subtly.
// The whole SVG is very complex (lots of paths). We'll apply CSS keyframes to a specific class.
code = code.replace(/<svg/, '<svg\n      id="terrabyte-logo"');
code = code.replace(/<\/style>/, '\n.animated-logo:hover { animation: pulseLogo 2s infinite ease-in-out; transform-origin: center; }\n@keyframes pulseLogo { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }\n</style>');

// We are going to apply 'animated-logo' to the outer most 'g' element
code = code.replace(/<g id="Capa_x0020_1">/, '<g id="Capa_x0020_1" className="animated-logo" style={{ transformOrigin: "center" }}>');

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
console.log('done');
