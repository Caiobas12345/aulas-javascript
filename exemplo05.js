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

// --- TESTES DE SAÍDA ---
console.log(verificarMaioridade(idade));
console.log(categorizarNivel(0));
console.log(curso.alternarStatus());

// --- CONTINUAÇÃO: TRABALHANDO COM ARRAYS E LOOPS ---
console.log("\n--- Adicionando Tecnologias ---");
tecnologias.push("JavaScript", "TypeScript");
console.log("Tecnologias atualizadas:", tecnologias);

console.log("\n--- Listando Módulos (Loop For...Of) ---");
for (let modulo of curso.modulos) {
  console.log(`- Módulo: ${modulo}`);
}

let listaAlunos = [
  { nome: "Caio", nota: 9.5 },
  { nome: "Ana", nota: 6.0 },
  { nome: "Lucas", nota: 8.0 }
];

console.log("\n--- Alunos Aprovados (Filter + Map) ---");
let alunosAprovados = listaAlunos
  .filter(aluno => aluno.nota >= 7.0)
  .map(aluno => `${aluno.nome} (Nota: ${aluno.nota})`);

console.log(alunosAprovados);