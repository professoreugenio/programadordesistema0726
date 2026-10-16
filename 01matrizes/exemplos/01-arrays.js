const nomes = ["CARLOS", "ANDRÉ","PEDRO","ANDRÉ","JOSÉ"];

nomes[0]="MARIA";

for (let i = 0; i < nomes.length; i++){
    let num = i+1
console.log(`${num} . ${nomes[i]}`)
}

export function exibeNomes(nome) {
    return `Olá, ${nome}!`;
}
