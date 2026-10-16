import inquirer from "inquirer"; // Importa a biblioteca de perguntas.
let total = 0; // Acumula o valor total dos produtos.
let qtdBarato = 0; // Conta produtos baratos.
let qtdMedio = 0; // Conta produtos de preço médio.
let qtdCaro = 0; // Conta produtos caros.
const resposta = await inquirer.prompt([ // Pergunta quantos produtos serão cadastrados.
{
type: "input", // Define uma entrada de texto.
name: "n", // Guarda a resposta com o nome n.
message: "Quantos produtos serão registrados?" // Exibe a pergunta no terminal.
}
]);
const n = Number(resposta.n);

for (let i = 1; i <= n; i++) { // Repete o cadastro de 1 até n.
const dados = await inquirer.prompt([ // Faz as perguntas de cada produto.
{
type: "input", // Entrada para o nome.
name: "nome", // Guarda o nome digitado.
message: `Nome do produto ${i}:` // Mostra o número do produto atual.
},
{
type: "input", // Entrada para o preço.
name: "preco", // Guarda o preço digitado.
message: "Preço (R$):" // Solicita o preço.
}
]);
const preco = Number(dados.preco); // Converte o preço para número.
total += preco; // Soma o preço ao total.
if (preco <= 50) { // Testa se o produto custa até R$ 50.
qtdBarato++; // Soma 1 ao contador de baratos.
} else if (preco <= 100) { // Testa se custa acima de 50 e até 100.
qtdMedio++; // Soma 1 ao contador de médios.
} else { // Caso o preço seja maior que R$ 100.
qtdCaro++; // Soma 1 ao contador de caros.
}
}
console.log("\n--- RESUMO DA COMPRA ---"); // Exibe o título do resumo.
console.log(`Total gasto: R$ ${total.toFixed(2)}`); // Mostra o total com duas casas decimais.
console.log(`Produtos baratos: ${qtdBarato}`); // Mostra a quantidade de baratos.
console.log(`Produtos médios: ${qtdMedio}`); // Mostra a quantidade de médios.
console.log(`Produtos caros: ${qtdCaro}`); // Mostra a quantidade de caros.