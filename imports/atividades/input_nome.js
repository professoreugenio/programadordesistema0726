import {input} from '@inquirer/prompts';
// Texto simples
const nome = await input({ message: 'Qual é o seu nome?' });
console.log('Você digitou: '+nome)