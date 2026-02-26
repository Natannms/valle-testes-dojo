# CI/CD Guide

Este documento define as regras e processos para Integração Contínua e Entrega Contínua (CI/CD) do projeto.

## 1. Regras de Qualidade de Código

### Cobertura de Testes (Jest)
- **Global Threshold**: 60% para branches, functions, lines e statements.
- **Regressão**: Não é permitida diminuição da cobertura.

### Bloqueios de Commit
- **Console.log**: Proibido em código de produção (exceto warn/error explícitos se necessário).
- **Tamanho de Arquivos**: Arquivos individuais não devem exceder 500KB.

## 2. Hooks de Git (Husky)

### pre-commit
Deve executar sequencialmente:
1. Verificação de `console.log` em arquivos staged.
2. Verificação de tamanho de arquivos em arquivos staged.
3. Testes unitários com validação de cobertura (`npm test -- --coverage`).

## 3. GitHub Actions (CI)

### Workflow: CI
- **Gatilhos**: Push em `main`, `homolog`, `development` e Pull Requests para essas branches.
- **Jobs**:
  - Setup Node.js
  - Install Dependencies
  - Lint (se configurado)
  - Run Tests (com coverage check)
  - Build (verificação de build)

## 4. Branch Protection
- Branches protegidas: `main`, `homolog`, `development`.
- Exigem status check "CI" verde antes do merge.
