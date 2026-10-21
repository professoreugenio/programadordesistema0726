class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
    apresentar () {
        console.log(`${this.nome}, ${this.nota}`);
    }
}

// const aluno1 = new Aluno("Pedro",8.5);
// aluno1.apresentar();

const alunos = [
    new Aluno("Pedro", 8.5),
    new Aluno("Carlos", 8.5),
    new Aluno("Maria", 8.5)
]

alunos.forEach((aluno)=>{
    aluno.apresentar();
}
)