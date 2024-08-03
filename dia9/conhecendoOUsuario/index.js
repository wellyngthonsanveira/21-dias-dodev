let nome = prompt("Qual seu nome?");
let idade = Number(prompt("Qual sua Idade?"));
let altura = Number(prompt("Qual sua Altura em METROS"));
let peso = Number(prompt("Qual seu peso em KG?"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("seu imc é: " + imc + " e indica MAGREZA");
} else if (imc > 18.5 && imc < 24.5) {
  console.log("seu imc é: " + imc + " e indica NORMAL");
} else if (imc > 24.9 && imc < 30) {
  console.log("seu imc é: " + imc + " e indica SOBREPESO");
} else {
  console.log("seu imc é: " + imc + " e indica OBESIDADE");
}

let nascimento = 2024 - idade;
console.log("você nasceu em " + nascimento);
