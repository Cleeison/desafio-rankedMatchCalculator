/*
     # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

const nivel = ['ferro','bronze','prata', 'ouro','diamante','lendário','imortal'];
const frase  = ['O Heroi tem saldo de','vitorias', 'e está no nivel de'];

function calcularPartidaRanqueada(vitoria,derrota) {
    return vitoria - derrota
};

let saldo = calcularPartidaRanqueada(110,10);

if(saldo < 10) {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[0]}`);
} else if (saldo >= 10 && saldo <= 20) {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[1]}`);
} else if (saldo > 20 && saldo <= 50) {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[2]}`);
} else if (saldo > 50 && saldo <= 80) {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[3]}`);
} else if (saldo > 80 && saldo <= 90) {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[4]}`);
} else if (saldo > 90 && saldo <= 100) {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[5]}`);
} else {
    console.log(`${frase[0]} ${saldo} ${frase[1]} ${frase[2]} ${nivel[6]}`);
}