class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const produto1 = new Produto("Mouse", 50);

produto1.preco = -100;

console.log(produto1.preco);
