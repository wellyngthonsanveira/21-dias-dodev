let primeiroN = Number(prompt("Digite o primeiro numero"));
let segundoN = Number(prompt("Digite o segundo numero"));
let tipoOperacao = prompt("Digite a tipo de operacao");

let soma = 0;
switch (true) {
  case tipoOperacao == "+":
    soma = primeiroN + segundoN;
    console.log(soma);
    break;
  case tipoOperacao == "*":
    soma = primeiroN * segundoN;
    console.log(soma);
    break;
  case tipoOperacao == "-":
    soma = primeiroN - segundoN;
    console.log(soma);
    break;
  default:
    soma = primeiroN / segundoN;
    console.log(soma);
    break;
}
