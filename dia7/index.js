let cadastroNovo = prompt(" deseja cadastrar outro aluno s ou n");

let alunos = 0;
let somaTotal = 0;

let homens = 0;
let mulheres = 0;

let mulheresAprovadas = 0;
let maiorNotaHomens = 0;

while (cadastroNovo == "s") {
  let notaAluno = Number(prompt("Digite a Nota do Aluno"));
  somaTotal = somaTotal + notaAluno;
  let sexoAluno = prompt("Digite o Sexo do Aluno m ou h");

  if (sexoAluno == "h") {
    homens = homens + 1;
    if (notaAluno > maiorNotaHomens) {
      maiorNotaHomens = notaAluno;
    }
  } else {
    mulheres = mulheres + 1;
    if (notaAluno >= 7) {
      mulheresAprovadas = mulheresAprovadas + 1;
    }
  }
  alunos = alunos + 1;
  cadastroNovo = prompt(" deseja cadastrar outro aluno s ou n");
}

media = somaTotal / alunos;

console.log(
  "A MEDIA GERAL É " +
    media +
    " O total de homens foram de " +
    homens +
    " e mulheres com nota acima ou igual a 7 " +
    mulheresAprovadas +
    " e a maior nota entre os homens foi de: " +
    maiorNotaHomens
);
