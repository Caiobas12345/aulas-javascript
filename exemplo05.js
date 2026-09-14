
const NOME_CURSO = "JavaScript do zero"; // Constante: não muda o valor
let estudante = "Iniciante dedicado"; // Let: escopo de bloco, pode mudar
let idade = 25; // Number (inteiro)
let altura = 1.75; // Number (ponto flutuante)
let programador = true; // Boolean (verdadeiro ou falso)
let tecnologias = ["HTML", "CSS"]; // Array (vetor)
let projetoFinal = null; // Null (ausência intencional de valor)
let definicao; // undefined (variável declarada, mas sem valor)

let anoAtual = 2026;
let anoNascimento = anoAtual - idade;
let proximoAno = anoAtual + 1;
let dobroDaIdade = idade * 2;
let divisaoIdade = idade / 2;
let restoDivisao = 10 % 3; // Módulo: resto da divisão (1)

function verificarMaioridade(idadeEstudante) {
    if (idadeEstudante >= 18) {
        return "Você é maior de idade. Pode iniciar o módulo avançado!";
    } else if (idadeEstudante >= 15) {
        return "Você é menor de idade, mas pode fazer o módulo intermediário com autorização.";
    } else {
        return "Recomendamos começar pelo módulo básico infantil.";
    }
}

function categorizarNivel(experienciaAnos) {
    switch (experienciaAnos) {
        case 0:
            return "Nível: Total iniciante";
        case 1:
        case 2:
            return "Nível: Desenvolvedor Júnior";
        case 3:
        case 4:
            return "Nível: Desenvolvedor Pleno";
        default:
            return "Nível: Desenvolvedor Sênior";
    }
}

let curso = {
    titulo: NOME_CURSO,
    cargaHoraria: 40,
    modulos: ["Fundamentos", "DOM", "Assincronismo", "APIs"],
    concluido: false,
    detalhes: {
        professor: "Guia automatizado",
        plataforma: "Console Interativo"
    },
    alternarStatus: function() {
        this.concluido = !this.concluido;
        return `Status alterado! Concluido: ${this.concluido}`;
    }
};

// --- NOVAS FUNÇÕES ADICIONADAS ---

function calcularMediaTurma(alunos) {
    if (alunos.length === 0) return 0;
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota;
    }
    return (soma / alunos.length).toFixed(2);
}

function gerarRelatorioDesempenho(aprovados, reprovados, media) {
    console.log("\n================ STATS DA TURMA ================");
    console.log(`Total de Aprovados: ${aprovados.length}`);
    console.log(`Total de Reprovados: ${reprovados.length}`);
    console.log(`Média Geral da Turma: ${media}`);
    console.log("================================================");
}

function buscarAlunoPorNome(alunos, nomeBusca) {
    let encontrado = alunos.find(aluno => aluno.nome.toLowerCase() === nomeBusca.toLowerCase());
    if (encontrado) {
        return `Aluno encontrado -> Nome: ${encontrado.nome} | Nota: ${encontrado.nota}`;
    }
    return `Aluno "${nomeBusca}" não foi localizado no sistema.`;
}

// --- TESTES DE SAÍDA ---
console.log(verificarMaioridade(idade));
console.log(categorizarNivel(0));
console.log(curso.alternarStatus());

// --- TRABALHANDO COM ARRAYS E LOOPS ---
console.log("\n--- Adicionando Tecnologias ---");
tecnologias.push("JavaScript", "TypeScript");
console.log("Tecnologias atualizadas:", tecnologias);

console.log("\n--- Listando Módulos (Loop For...Of) ---");
for (let modulo of curso.modulos) {
    console.log(`- Módulo: ${modulo}`);
}

// Base de dados expandida de alunos
let listaAlunos = [
    { nome: "Caio", nota: 9.5 },
    { nome: "Ana", nota: 6.0 },
    { nome: "Lucas", nota: 8.0 },
    { nome: "Beatriz", nota: 4.5 },
    { nome: "Rodrigo", nota: 6.8 },
    { nome: "Mariana", nota: 10.0 },
    { nome: "Pedro", nota: 5.5 }
];

const NOTA_CORTE = 7.0;

// --- FILTRAGEM DE ALUNOS (APROVADOS X REPROVADOS) ---

console.log("\n--- Alunos Aprovados (Filter + Map) ---");
let alunosAprovados = listaAlunos
    .filter(aluno => aluno.nota >= NOTA_CORTE)
    .map(aluno => `${aluno.nome} (Nota: ${aluno.nota})`);
console.log(alunosAprovados);

console.log("\n--- Alunos Reprovados (Filter + Map) ---");
let alunosReprovados = listaAlunos
    .filter(aluno => aluno.nota < NOTA_CORTE)
    .map(aluno => `${aluno.nome} (Nota: ${aluno.nota})`);
console.log(alunosReprovados);

// --- EXECUÇÃO DOS NOVOS MÉTODOS ---

let mediaGeral = calcularMediaTurma(listaAlunos);
gerarRelatorioDesempenho(alunosAprovados, alunosReprovados, mediaGeral);

console.log("\n--- Sistema de Busca de Alunos ---");
console.log(buscarAlunoPorNome(listaAlunos, "Mariana"));
console.log(buscarAlunoPorNome(listaAlunos, "Roberto"));
