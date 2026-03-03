const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

code = code.replace(/fill-rule:nonzero}/g, 'fill-rule:nonzero} .animated-logo:hover { animation: pulseLogo 3s infinite; transform-origin: 30% 50%; opacity: 0.95; cursor: pointer; } @keyframes pulseLogo { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(45, 212, 191, 0)); } 50% { transform: scale(1.05); filter: drop-shadow(0 0 12px rgba(45, 212, 191, 0.4)); } }');

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
console.log('done animation fix 3');
