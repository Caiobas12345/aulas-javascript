const filtrarAprovados = (notas) => {
    for(const nota of notas) {
 if(nota >= 7) {
    console.log(nota)
 }
}
};
const listadeAlunos = [
    {nome: "ana", nota: 8,5},
    {nome: "Davi", nota:10},
    {nome:"caio", nota: 6.0,},
    {nome:"felipe",nota:4,7}

];

filtrarAprovados(notasDosAlunos);
