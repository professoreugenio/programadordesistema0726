import {
  input,
  password,
  confirm,
  select,
  checkbox,
  number,
  editor,
} from '@inquirer/prompts';

// Texto simples
const nome = await input({ message: 'Qual é o seu nome?' });

// Com valor padrão e validação
const email = await input({
  message: 'Seu e-mail:',
  default: 'aluno@exemplo.com',
  validate: (valor) => valor.includes('@') || 'E-mail inválido',
});

// Senha (oculta a digitação)
const senha = await password({ message: 'Senha:', mask: '*' });

// Sim ou não
const continuar = await confirm({ message: 'Deseja continuar?', default: true });

// Número
const idade = await number({ message: 'Sua idade:', min: 0, max: 120 });

// Seleção única
const linguagem = await select({
  message: 'Escolha uma linguagem:',
  choices: [
    { name: 'JavaScript', value: 'js', description: 'Roda no navegador e no Node' },
    { name: 'PHP', value: 'php' },
    { name: 'Python', value: 'py' },
    { name: 'Indisponível', value: 'x', disabled: true },
  ],
});

// Seleção múltipla (espaço marca, enter confirma)
const recursos = await checkbox({
  message: 'Quais recursos?',
  choices: [
    { name: 'ESLint', value: 'eslint', checked: true },
    { name: 'Prettier', value: 'prettier' },
    { name: 'Jest', value: 'jest' },
  ],
});