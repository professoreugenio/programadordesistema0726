const produtos = ["Mouse", "Teclado", "Monitor", "Webcam", "Impressora"]; // Cria a lista de nomes
const precos = [50, 120, 850, 180, 600]; // Cria os preços na mesma ordem.
let busca = "Tecladox";
console.log("Produto:"+busca)
const indiceTeclado = produtos.indexOf(busca); // Localiza o Teclado.
if (indiceTeclado !== -1) { // Confere se ele foi encontrado.
    console.log(`Produto ${busca}  ${produtos[indiceTeclado]} Valor ${precos[indiceTeclado]}\n`);
 precos[indiceTeclado] = 135; // Atualiza o preço para R$ 135.
 console.log("5. Novo preço do Teclado: R$", precos[indiceTeclado].toFixed(2)); // Confirma o novo preço.
} else {
    console.log("Não localizado");
} // Encerra a verificação.
