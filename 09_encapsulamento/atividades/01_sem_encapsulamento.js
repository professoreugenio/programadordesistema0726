class Produto {

    #preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }

    get preco(){
        
    }

    apresentar() {
        console.log(this.nome,this.#preco);
    }
}

const produto1 = new Produto("Mouse", 50);

produto1.preco = -100;

produto1.apresentar();
