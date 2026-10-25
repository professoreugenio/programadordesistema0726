
class Categoria {
    constructor(nome) {
        this.nome = nome;
    }

    exibircategorias(){
        console.log(this.nome);
    }
}

// Criando três instâncias diferentes
const categorias = [
new Categoria("Informática"),
new Categoria("Papelaria"),
new Categoria("Eletrônicos")
]

    console.log("CATEGORIAS CADASTRADAS");
for(let i = 0; i<categorias.length; i++) {
    categorias[i].exibircategorias();

}

