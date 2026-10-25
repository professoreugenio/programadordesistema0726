class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log("ALUNO CADASTRADO");
        console.log("Nome:",this.nome);
        console.log("Idade:",this.idade);
    }
}

const aluno1 = new Aluno("Paula Lins", 50);
aluno1.apresentar();

// Crie o aluno Carlos, 20 anos
// Apresente as propriedades
