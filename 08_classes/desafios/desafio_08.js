class Produto {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    espaco() {
        console.log("----------------------------------------\n")
    }
    registrar() {
        console.log("Produto: ", this.nome);
        if (this.quantidade <= 0 || !Number.isInteger(this.quantidade)) {
            if(this.quantidade===""){ this.quantidade = "vazio"}
            console.log(this.quantidade, " não é um valor válido para registro\n");
            this.espaco()
            return false;
        }

        console.log("Quantidade: ", this.quantidade);
        console.log("Produto", this.nome, "registrado: \n");
        this.espaco()

    }
}

const produtos = [
    new Produto("Teclado", 50),
    new Produto("Mouse", -50),
    new Produto("Computador"),
    new Produto("Monitor", 20),
    new Produto("Impressora", 2.5),
    new Produto("", 10)
]

for (let i = 0; i < produtos.length; i++) {
    produtos[i].registrar();
}
