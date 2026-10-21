class Cliente {
    constructor(nome,banco, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.saldo = saldo;
    }

    exibircliente(){
        console.log(`CLIENTE: ${this.nome} \nBANCO: ${this.banco} \nSALDO R$:${this.saldo}`)
    }
    correcaosaldo(porcentagem) {
        return this.saldo * (1 + porcentagem / 100);
    }

}


const cliente1 = new Cliente("Eugênio","BRADESCO",22500);

cliente1.exibircliente();

console.log("SALDO COM CORREÇÃO CORREÇÃO:");
console.log("SALDO R$", cliente1.correcaosaldo(5));


