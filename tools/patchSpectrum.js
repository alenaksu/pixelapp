const fs = require('fs');
const path = require('path');
// const spPackage = require('@spectrum-web-components/styles/package.json');

const baseDir = path.resolve('node_modules/@spectrum-web-components/styles');
const pkgPath = path.join(baseDir, 'package.json');
const files = fs.readdirSync(baseDir);
const package = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }));

for (const file of files) {
    const name = './' + file;
    if (file.endsWith('.css')) package.exports[name] = name;
}

fs.writeFileSync(pkgPath, JSON.stringify(package, null, 4), { encoding: 'utf8' });
