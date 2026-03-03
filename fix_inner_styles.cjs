const fs = require('fs');

try {
  let file = 'src/components/LogoTerrabyte.jsx';
  let jsx = fs.readFileSync(file, 'utf8');

  // Find all remaining inline style attributes with strings and convert to objects
  // The big one on <svg> was already fixed. These are like: style="fill:#14356b"
  let count = 0;
  jsx = jsx.replace(/style="fill:([^"]+)"/g, (match, colorInfo) => {
    count++;
    return `style={{fill: "${colorInfo}"}}`;
  });

  fs.writeFileSync(file, jsx, 'utf8');
  console.log(`Success: Fixed ${count} remaining string style attributes in Logo.`);
} catch (e) {
  console.error("Error repairing styles:", e.message);
}