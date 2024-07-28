let fome = prompt("Você está com fome? s ou n?");
let dinheiro = prompt("Você tem dinheiro? s ou s?");
let restaurante = prompt("O restaurante ta aberto? s ou n?");

if (fome == "n" || dinheiro == "n") {
  console.log("Hoje a janta será em casa");
} else if (fome == "s" && dinheiro == "s" && restaurante == "n") {
  console.log("Peça um Delivery");
} else {
  console.log("Hoje o jantar será no seu restaurante preferido!");
}
