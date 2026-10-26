
import { input, confirm } from "@inquirer/prompts";

class Produto {
    #quantidade;

    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(valor) {
        if (!Number.isInteger(valor) || valor < 0) {
            throw new Error("Quantidade inválida.");
        }

        this.#quantidade = valor;
    }
}

const produto = new Produto("Mouse", 10);

async function atualizarEstoque() {
    let continuar = true;

    while (continuar) {
        console.log(`\nEstoque atual: ${produto.quantidade}`);

        const entrada = await input({
            message: "Informe a nova quantidade:"
        });

        try {
            const valor = entrada.trim() === ""
                ? NaN
                : Number(entrada);

            produto.quantidade = valor;

            console.log("Estoque atualizado com sucesso!");
            console.log(`Nova quantidade: ${produto.quantidade}`);

        } catch (erro) {
            console.log(`Erro: ${erro.message}`);
        }

        continuar = await confirm({
            message: "Deseja atualizar novamente?",
            default: false
        });
    }

    console.log("Programa encerrado.");
}

await atualizarEstoque();
