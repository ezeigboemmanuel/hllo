// postinstall.js
const fs = require('fs');

const packageJsonPath = './package.json';
const packageJson = require(packageJsonPath);

// Update package.json only if type is not already set
if (!packageJson.type) {
  packageJson.type = 'module';
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Set "type: module" in package.json');
} else {
  console.log('package.json already has "type" set');
}
