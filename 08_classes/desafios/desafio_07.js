class Cliente {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        if (this.nome === "") {
            console.log("Nome inserido: vazio")
            console.log("Não pode ser vazio\n")
            return false;
        } else if (Number(this.nome)) {

            console.log("Nome:", this.nome)
            console.log("Não pode ser números\n")
            return false;
        }
        console.log("O nome: ", this.nome, " foi cadastrado com sucesso!\n");
    }
}


const clientes = [

    new Cliente("Paula Lins"),
    new Cliente(""),
    new Cliente("13465")
]

for (let i = 0; i < clientes.length; i++) {
    clientes[i].apresentar();
}
