const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const docsDir = path.join(__dirname, '..', 'docs');

// delete docs folder if it exists
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}

// rename out → docs
fs.renameSync(outDir, docsDir);

console.log('Export moved: /out → /docs');
