class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    moeda(valor){
      return  valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }
    atualizarPreco(novoPreco) {
      return  this.preco = novoPreco;
    }

    exibir() {
        console.log(`Produto: ${this.nome} Preço: ${this.moeda(this.preco)}`)
    }
}

const produto1 = new Produto("Computador",2500);

produto1.preco = 3300;






produto1.exibir()

// Teste com 90 e -10
