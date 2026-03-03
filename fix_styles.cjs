
const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// React does not allow style=ill:#xyz, it must be style={{fill: '#xyz'}}
code = code.replace(/style=\"([^\"]+)\"/g, (match, styleStr) => {
    // If it's a simple fill: # color
    if (styleStr.startsWith('fill:')) {
        let color = styleStr.split(':')[1];
        return \style={{ fill: '\' }}\;
    }
    // If there is another string style, report it
    console.log('Uncaught style: ', match);
    return match;
});

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
console.log('Styles fixed');

