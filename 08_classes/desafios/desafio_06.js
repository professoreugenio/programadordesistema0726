class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }
    atualizarPreco(novoPreco) {
        if (novoPreco <= 0) {
            console.log("Valor inválildo:", this.moeda(novoPreco));
            console.log("Preço sem alterações:", this.moeda(this.preco));
            return false;
        }
    }

    exibir() {
        console.log(`Produto: ${this.nome} Preço: ${this.moeda(this.preco)}`)
    }
}

const produto1 = new Produto("Computador", 2500);

produto1.atualizarPreco(-550.50);






produto1.exibir()

// Teste com 90 e -10
