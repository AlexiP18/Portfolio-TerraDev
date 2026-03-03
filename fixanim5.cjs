const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');

// The regex above didn't match perfectly. I will match directly on the first part
code = code.replace(/__html: \.fil15([\s\S]+?) \}\s*\}\}/, '__html: .fil15 } }}');

fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
