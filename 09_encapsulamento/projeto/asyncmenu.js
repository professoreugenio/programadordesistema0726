import { select, input, confirm } from "@inquirer/prompts";

function cadastrarProduto() {
    console.log("Cadastrar")
}

function listarProdutos() {
    console.log("Listar")
} 
function pesquisarProduto() {
    console.log("Pesquisar")
}


async function menu() {
    let opcao;

    do {
        opcao = await select({
            message: "CONTROLE DE ESTOQUE",
            choices: [
                { name: "1. Cadastrar", value: 1 },
                { name: "2. Listar", value: 2 },
                { name: "3. Pesquisar", value: 3 },
                { name: "4. Atualizar", value: 4 },
                { name: "5. Excluir", value: 5 },
                { name: "6. Relatório", value: 6 },
                { name: "0. Sair", value: 0 }
            ]
        });

        switch (opcao) {
            case 1:
                await cadastrarProduto();
                break;
            case 2:
                listarProdutos();
                break;
            case 3:
                await pesquisarProduto();
                break;
            case 4:
                await atualizarProduto();
                break;
            case 5:
                await excluirProduto();
                break;
            case 6:
                relatorioFinanceiro();
                break;
            case 0:
                console.log("Encerrando o sistema.");
                break;
        }
    } while (opcao !== 0);
}

await menu();