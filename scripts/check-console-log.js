const { execSync } = require('child_process');
const fs = require('fs');

console.log('Verificando console.log em arquivos staged...');

try {
  // Pega lista de arquivos staged (Adicionados, Copiados, Modificados, Renomeados)
  const files = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf-8' })
    .split('\n')
    .filter(file => file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.jsx'))
    .filter(file => file.length > 0);

  let hasError = false;

  files.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf-8');
      // Regex simples para capturar console.log, ignorando comentários seria mais complexo, 
      // mas para este nível de validação, bloqueio total é aceitável conforme guia.
      if (content.includes('console.log')) {
        console.error(`❌ ERRO: console.log encontrado em ${file}`);
        hasError = true;
      }
    }
  });

  if (hasError) {
    console.error('Remova os console.log antes de commitar.');
    process.exit(1);
  }
  
  console.log('✅ Nenhum console.log encontrado.');
} catch (error) {
  // Se não houver commits iniciais ou erro no git, pode falhar silenciosamente ou avisar
  console.error('Erro ao verificar console.log:', error.message);
  process.exit(1);
}
