
class Categoria {
    constructor(nome) {
        this.nome = nome;
    }
}

// Criando três instâncias diferentes
const categoria1 = new Categoria("Informática");
const categoria2 = new Categoria("Papelaria");
const categoria3 = new Categoria("Eletrônicos");

// Apresentando os nomes
console.log(categoria1.nome);
console.log(categoria2.nome);
console.log(categoria3.nome);
