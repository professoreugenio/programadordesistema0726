class Cliente {
    constructor(nome,banco, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.saldo = saldo;
    }

    moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    exibircliente(){

        const agora = new Date();
        const data = agora.toLocaleDateString("pt-BR");
        const hora = agora.toLocaleTimeString("pt-BR");

        console.log("Data:", data,"às ", hora);
        
        console.log(`CLIENTE: ${this.nome} \nBANCO: ${this.banco} \nSALDO R$:${this.moeda(this.saldo)}`)
    }
    correcaosaldo(porcentagem) {
        return this.saldo * (1 + porcentagem / 100);
    }

}


const cliente1 = new Cliente("Eugênio","BRADESCO",22500);

cliente1.exibircliente();

console.log("SALDO COM CORREÇÃO CORREÇÃO:");
console.log("SALDO R$", cliente1.moeda(cliente1.correcaosaldo(5)));


