class Cliente {

    constructor(nome,banco, saldo){
        this.nome = nome;
        this.banco = banco;
        this.saldo = saldo;
    }

    exibircliente(){
        console.log(`Cliente: ${this.nome}`);
        console.log(`Banco: ${this.banco}`);
        console.log(`Saldo: ${this.saldo}`);
    }

    correcaosaldo(porcentagem) {
        return this.saldo * (1+porcentagem/100);
    }


}

// criando a instância para exibir um cliente

const cliente1 = new Cliente("Eugênio","bradesco",12500);

cliente1.exibircliente();

console.log("SALDO ATUAL R$ ", cliente1.correcaosaldo(5))