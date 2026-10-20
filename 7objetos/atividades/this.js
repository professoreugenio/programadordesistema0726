const pessoa = {
    nome: "Carlos",

    apresentar() {
        console.log(`Nome: ${this.nome}`);
    }
};

pessoa.apresentar();