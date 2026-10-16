function dividir(a, b) {

    if (
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        return null;
    }

    if (b === 0) {
        return "Não divisível";
    }

    return a / b;
}

console.log(dividir(10, 2));
console.log(dividir(10, 0));
