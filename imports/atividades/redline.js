import * as readline from "node:readline/promises";

import {
    stdin as input,
    stdout as output
} from "node:process";

const rl = readline.createInterface({
    input,
    output
});

try {
    const nome = await rl.question("Digite seu nome: ");

    console.log(`Olá, ${nome}!`);
} finally {
    rl.close();
}