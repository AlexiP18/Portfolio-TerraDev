const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// I'll update the CSS rule to target both .animated-logo:hover and .animated-logo.group-hover:hover if it is nested in a group, or just apply it seamlessly to the logo itself.
code = code.replace(/fill-rule:nonzero}/g, 'fill-rule:nonzero} .animated-logo { transition: all 0.3s ease-in-out; transform-origin: 30% 50%; opacity: 0.95; } .animated-logo:hover, .group:hover .animated-logo { animation: pulseLogo 3s infinite; opacity: 1; filter: drop-shadow(0 0 12px rgba(45, 212, 191, 0.4)); } @keyframes pulseLogo { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(45, 212, 191, 0)); } 50% { transform: scale(1.05); filter: drop-shadow(0 0 12px rgba(45, 212, 191, 0.4)); } }');

// Clean up previous rules
code = code.replace(/ \.animated-logo:hover([^@]+)@keyframes pulseLogo ([^}]+})}/g, '');

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
console.log('done animation fix 4');
