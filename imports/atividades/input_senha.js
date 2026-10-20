import {password} from '@inquirer/prompts';
// Senha (oculta a digitação)
const senhaatual='12345679';
let senha = await password({ message: 'Senha:', mask: '*' });
let cont = 0;
while(senha !== senhaatual){
cont ++;
console.log(`tentativa: ${cont}`);
    senha = await password({ message: 'tente novamente Senha:', mask: '*' });
}



console.log('Acesso garantido');