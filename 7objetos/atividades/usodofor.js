const produtos = [
    {
        codigo: 101,
        nome: "Mouse",
        preco: 50,
        quantidade: 10,
        calcular() {
            return this.preco * this.quantidade;
        }
    },
    {
        codigo: 102,
        nome: "Teclado",
        preco: 80,
        quantidade: 5,
        calcular() {
            return this.preco * this.quantidade;
        }
    },
    {
        codigo: 103,
        nome: "Monitor",
        preco: 700,
        quantidade: 3,
        calcular() {
            return this.preco * this.quantidade;
        }
    },







];

for (const produto of produtos) {
    const valor = produto.preco * produto.quantidade;
    console.log(`${produto.codigo} - ${produto.nome} -Valor unitário R$ ${produto.preco} total R$ ${produto.calcular()}`)
}
