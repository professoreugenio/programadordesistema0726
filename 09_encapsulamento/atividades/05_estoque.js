
class Produto {
    #quantidade;

    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    // GET - Consultar a quantidade
    get quantidade() {
        return this.#quantidade;
    }

    // SET - Validar e atualizar a quantidade
    set quantidade(valor) {
        if (!Number.isInteger(valor) || valor < 0) {
            throw new Error("Quantidade inválida.");
        }

        this.#quantidade = valor;
    }
}

// Criar produto com quantidade inicial 10
const produto = new Produto("Mouse", 10);

console.log(`Produto: ${produto.nome}`);
console.log(`Estoque inicial: ${produto.quantidade}`);

// TESTE 1 - Atualizar para 20
try {
    produto.quantidade = 20;
    console.log(`Estoque atualizado: ${produto.quantidade}`);
} catch (erro) {
    console.log(`Erro: ${erro.message}`);
}

// TESTE 2 - Atualizar para -5
try {
    produto.quantidade = -5;
    console.log(`Estoque atualizado: ${produto.quantidade}`);
} catch (erro) {
    console.log(`Erro: ${erro.message}`);
}

// TESTE 3 - Atualizar para 2.5
try {
    produto.quantidade = 2.5;
    console.log(`Estoque atualizado: ${produto.quantidade}`);
} catch (erro) {
    console.log(`Erro: ${erro.message}`);
}

// Consultar quantidade final
console.log(`Estoque final: ${produto.quantidade}`);
