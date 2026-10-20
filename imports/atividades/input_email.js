import {input} from '@inquirer/prompts';
// Com valor padrão e validação
const email = await input({
  message: 'Seu e-mail:',
  default: 'aluno@exemplo.com',
  validate: (valor) => valor.includes('@') || 'E-mail inválido',
});

console.log("Email confirmado: "+email)