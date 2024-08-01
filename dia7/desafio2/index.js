let saldoAtual = 0;

let continuar = "s";
let maiorOperacao = 0;

let totalOperacoes = 0;
let TotalValores = 0;

do {
  let nome = prompt("Digite seu Nome");
  let cpf = prompt("Digite seu CPF?");

  let valor = Number(prompt("Digite um valor"));
  TotalValores = TotalValores + valor;
  if (valor > maiorOperacao) {
    maiorOperacao = valor;
  }
  let tipoOperacao = prompt("Digite 1 para SAQUE ou 2 para DEPOSITO");

  if (tipoOperacao == 1) {
    if (valor > saldoAtual) {
      console.log("Não é possivel sacar esse valor");
      continuar = "n";
    } else {
      totalOperacoes = totalOperacoes + 1;
      saldoAtual = saldoAtual - valor;
      continuar = continuar = prompt("Quer fazer outra operação? s ou n");
    }
  } else {
    if (valor <= 0) {
      console.log("não é possivel depositar esse valor");
      continuar = "n";
    } else {
      totalOperacoes = totalOperacoes + 1;
      saldoAtual = saldoAtual + valor;
      continuar = prompt("Quer fazer outra operação? s ou n");
    }
  }
} while (continuar == "s");

media = TotalValores / totalOperacoes;

console.log(
  "Seu saldo atual é: " +
    saldoAtual +
    " A maior operação foi no valor de: " +
    maiorOperacao +
    " O total de operações foi de: " +
    totalOperacoes +
    " a media dos valores inseridos é de: " +
    media
);
