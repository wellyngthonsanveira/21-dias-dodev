let escolha = Number(
  prompt(
    "Você chegou no posto! Escola umas das 3 Opções \n 1 - GASOLINA \n 2 - álcool \n 3 - CALIBRA PNEU"
  )
);

let valor = 0;
let litros = 0;

switch (true) {
  case escolha == 1:
    valor = prompt("O LITRO DE GASOLINA É R$5 Qual valor deseja colocar?");
    litros = valor / 5;
    console.log("VOCÊ COLOCOU " + parseInt(litros) + " LITROS DE GASOLINA");
    break;
  case escolha == 2:
    valor = prompt("O LITRO DE ALCOOL É R$3 Qual valor deseja colocar?");
    litros = valor / 3;
    console.log("VOCÊ COLOCOU " + parseInt(litros) + " LITROS DE ALCOOL");
    break;
  default:
    console.log("Pneus Calibrados!");
    break;
}
