const caixa1 = document.querySelector("#caixatxt1");
const caixa2 = document.querySelector("#caixatxt2");
const botao1 = document.querySelector("#bt1");
const botao2 = document.querySelector("#bt2");
const botaolimpar = document.querySelector("#limpar");

botao1.addEventListener("click", () => {

    caixa1.style.display="block";

    // alert("O botão 1  foi clicado")
    caixa1.textContent = "Vale mais um pássaro na mão..."
    setTimeout(() => {
        caixa1.style.display="none";
        caixa2.textContent = "alteradoo!"
    }, 5000)
})

botao2.addEventListener("click", () => {
    caixa1.style.display="block";
    // alert("O botão 2 foi clicado");
    caixa2.textContent = "Antes só do que mal acompanhado!"
    setTimeout(() => {
        caixa1.style.display="none";
        caixa2.textContent = "alteradoo!"
    }, 5000)

})

botaolimpar.addEventListener("click", () => {
    // alert("O botão limpar foi acionado")
   caixa1.style.display="none";
   caixa2.style.display="none";
})