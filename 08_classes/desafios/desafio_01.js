class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    cumprimentar() {
        if(this.nome === ""){
        console.log("Digite um nome.\nTente novamente");

        } else {
        console.log("Olá seja bem vinda ", this.nome);

        }
    }
}

const pessoa1 = new Pessoa("Paula Lins");

pessoa1.cumprimentar();
// Crie uma instância
// Execute cumprimentar()
