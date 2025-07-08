const alunos = [];

class Boletim {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno.toFixed(1);
    }
}

const aluno1 = new Boletim("Ana", 6.0);
const aluno2 = new Boletim("Maria", 9.5);
const aluno3 = new Boletim("João", 8.0);
const aluno4 = new Boletim("Juliana", 5.5);
const aluno5 = new Boletim("Paulo", 10.0);
const aluno6 = new Boletim('Sérgio', 4.0);

alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6);
console.log(alunos);

// const existe = alunos.some(function(item) {
    //     return item.nota > 5.0;
    // })
    // console.log(existe);
    
const alunosNotaAlta = (aluno) => aluno.nota >= 6.0;
const alunosAprovados = alunos.filter(alunosNotaAlta);

const nomesDosAlunosNotaAlta = alunosAprovados.reduce(function(acumulador, itemAtual) {
    acumulador += `- ${itemAtual.nome}\n`;
    return acumulador;
}, '')

console.log(`Alunos aprovados (com nota >= 6.0): \n${nomesDosAlunosNotaAlta}`);

const alunosNotaBaixa = (aluno) => aluno.nota < 6.0;
const alunosReprovados = alunos.filter(alunosNotaBaixa);

const nomesDosAlunosNotaBaixa = alunosReprovados.reduce(function(acumulador, itemAtual) {
    acumulador += `- ${itemAtual.nome}\n`;
    return acumulador;
}, '')

console.log(`Alunos reprovados (com nota < 6.0): \n${nomesDosAlunosNotaBaixa}`);