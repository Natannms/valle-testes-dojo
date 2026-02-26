const { execSync } = require('child_process');
const fs = require('fs');

console.log('Verificando tamanho de arquivos staged...');

const MAX_SIZE_BYTES = 50; 

try {
  const files = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf-8' })
    .split('\n')
    .filter(file => file.length > 0);

  let hasError = false;

  files.forEach(file => {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      if (stats.size > MAX_SIZE_BYTES) {
        console.error(`❌ ERRO: O arquivo ${file} excede o limite de 500KB (${(stats.size / 1024).toFixed(2)}KB)`);
        hasError = true;
      }
    }
  });

  if (hasError) {
    console.error('Reduza o tamanho dos arquivos antes de commitar.');
    process.exit(1);
  }

  console.log('✅ Nenhum arquivo excede o limite de tamanho.');
} catch (error) {
  console.error('Erro ao verificar tamanho dos arquivos:', error.message);
  process.exit(1);
}
