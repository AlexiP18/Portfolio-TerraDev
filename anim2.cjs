const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// The first script didn't apply inside dangerouslySetInnerHTML correctly since it's a template literal string matching. Let's fix that.
code = code.replace(/fill-rule:nonzero\/, 'fill-rule:nonzero}.animated-logo:hover { animation: pulseLogo 4s infinite ease-in-out; transform-origin: 50% 50%; } @keyframes pulseLogo { 0% { transform: scale(1); filter: brightness(1) drop-shadow(0 0 0px rgba(0,245,160,0)); } 50% { transform: scale(1.03); filter: brightness(1.1) drop-shadow(0 0 10px rgba(0,245,160,0.5)); } 100% { transform: scale(1); filter: brightness(1) drop-shadow(0 0 0px rgba(0,245,160,0)); } }\');

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
console.log('done animation fix');
