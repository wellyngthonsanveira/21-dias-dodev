let nome = prompt("Seu Nome?");
let idade = prompt("Sua Idade");
let peso = prompt("Seu Peso");
let altura = prompt("Sua Altura");
let profissao = prompt("Sua Profissao");

console.log(
  "O Usuario exibiu o nome:" +
    nome +
    ", Idade: " +
    idade +
    ", Peso: " +
    peso +
    ", Profissão: " +
    profissao +
    ", e tem " +
    altura +
    "M de altura. e pesa: " +
    peso
);

if (idade < 18) {
  console.log("Sem gelada pra você");
} else {
  console.log("Está liberado para tomar umas geladas");
}

let meses = idade * 12;
let semanas = 12 * 4 * idade;
let dias = idade * 365;

console.log(
  "você tem " +
    meses +
    " meses, e " +
    semanas +
    " semanas, e " +
    dias +
    " dias de vida"
);
