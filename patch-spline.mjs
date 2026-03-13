import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packagePath = path.resolve(__dirname, 'node_modules', '@splinetool', 'react-spline', 'package.json');

if (fs.existsSync(packagePath)) {
  let pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  if (pkg.exports) {
    // Add "require" condition to default export
    if (pkg.exports['.'] && !pkg.exports['.'].require) {
      pkg.exports['.'].require = pkg.exports['.'].import || pkg.exports['.'].default;
    }
    
    // Add "require" condition to /next export
    if (pkg.exports['./next'] && !pkg.exports['./next'].require) {
      pkg.exports['./next'].require = pkg.exports['./next'].import || pkg.exports['./next'].default;
    }

    // Explicitly add dist files just to be extremely safe against strict bundlers
    pkg.exports['./dist/react-spline.js'] = "./dist/react-spline.js";
    pkg.exports['./dist/react-spline-next.js'] = "./dist/react-spline-next.js";

    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    console.log('Successfully patched @splinetool/react-spline package.json for Next.js 15 Vercel strict resolution.');
  }
} else {
  console.log('Could not find @splinetool/react-spline package.json to patch. It might not be installed yet.');
}
