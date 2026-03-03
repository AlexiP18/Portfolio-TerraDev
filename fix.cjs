const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// The CSS needs proper snake-case, but only inside the template literal.
code = code.replace(/fillRule:nonzero/g, 'fill-rule:nonzero');

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
