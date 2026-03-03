const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

code = code.replace(/<style\s+dangerouslySetInnerHTML={{[\s\S]*?}}/, (match) => {
    let htmlStr = match.match(/__html: \([\s\S]*?)\/);
    if(htmlStr) {
        let cleanHtml = htmlStr[1];
        cleanHtml = cleanHtml.replace(/ \.animated-logo.*$/, '').replace(/}\.fil62{/g, '} .fil62{');
        
        // Let's be smart about injecting after the last style bracket.
        let injection = " .animated-logo { transition: all 0.3s ease-in-out; transform-origin: 30% 50%; } .animated-logo:hover, .group:hover .animated-logo { animation: pulseLogo 3s infinite; filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.45)); } @keyframes pulseLogo { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(45, 212, 191, 0)); } 50% { transform: scale(1.05); filter: drop-shadow(0 0 12px rgba(45, 212, 191, 0.45)); } }";
        
        return <style dangerouslySetInnerHTML={{ __html: \${cleanHtml}\ }};
    }
    return match;
});

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
console.log('done animation fix 6');
