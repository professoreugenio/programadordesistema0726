class Produto {
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }

    apresentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.#preco}`);
    }



    
}

const produto = new Produto("Teclado", 80);

produto.preco = 120

produto.apresentar();
