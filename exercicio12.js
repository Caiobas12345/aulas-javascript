const filtrarAprovados = (alunos) => {
    for(const aluno of alunos) {
 if(aluno.nota >= 7) {
    console.log(`${aluno.nome}: ${aluno.nota}`);    
 }
}
};
const listadeAlunos = [
    {nome: "ana", nota: 8.5},
    {nome: "Davi", nota:10},
    {nome:"caio", nota: 6.0,},
    {nome:"felipe",nota:4.7}

];

filtrarAprovados(listadeAlunos);
