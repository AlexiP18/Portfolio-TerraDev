const fs = require('fs');
let code = fs.readFileSync('src/components/LogoTerrabyte.jsx', 'utf8');
code = code.replace(/dangerouslySetInnerHTML=\{\{ __html: \.fil15/, 'dangerouslySetInnerHTML={{ __html: .fil15');
code = code.replace(/12px rgba\(45, 212, 191, 0\.6\)\); } } \}\}/, '12px rgba(45, 212, 191, 0.6)); } }\ }}');
fs.writeFileSync('src/components/LogoTerrabyte.jsx', code);
