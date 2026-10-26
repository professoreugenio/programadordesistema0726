
class Produto {
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // GET - Consultar o preço
    get preco() {
        return this.#preco;
    }

    // SET - Validar e atualizar o preço
    set preco(valor) {
        if (!Number.isFinite(valor) || valor < 0) {
            throw new Error("Preço inválido.");
        }

        this.#preco = valor;
    }
}

// Criar o produto com preço inicial de 50
const produto = new Produto("Mouse", 50);

console.log(`Produto: ${produto.nome}`);
console.log(`Preço inicial: ${produto.preco}`);

// Atualizar o preço para 100
produto.preco = 100;
console.log(`Preço atualizado: ${produto.preco}`);

// Testar preço igual a zero
produto.preco = 0;
console.log(`Preço igual a zero: ${produto.preco}`);

// Testar preço negativo
try {
    produto.preco = -20;
} catch (erro) {
    console.log(`Erro: ${erro.message}`);
}

// Consultar preço após a tentativa inválida
console.log(`Preço final: ${produto.preco}`);
