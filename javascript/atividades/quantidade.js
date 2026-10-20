const produtos = ["Mouse", "Teclado", "Monitor", "Webcam", "Impressora"]; // Cria a lista de nomes.
const precos = [50, 120, 850, 180, 600]; // Cria os preços na mesma ordem.
let quant = produtos.length;
for(let i=0; i<quant;i++){
    console.log(`${i+1}.${produtos[i]}`);
}
console.log("\n");
console.log("Quantidade de produtos:", produtos.length); // Mostra o total de produtos.