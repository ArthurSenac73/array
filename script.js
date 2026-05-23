// ============================
// ARRAYS
// ============================

// Exercicio 1
var nomes = ["Marcos", "Juliana", "Ricardo", "Patricia", "Henrique"];
console.log("Exercicio 1 - Primeiro nome:", nomes[0]);
document.getElementById("ex1").textContent = "Primeiro nome: " + nomes[0];

// Exercicio 2
var cores = ["azul", "verde", "cinza", "bege"];
console.log("Exercicio 2 - Ultima cor:", cores[cores.length - 1]);
document.getElementById("ex2").textContent = "Ultima cor: " + cores[cores.length - 1];

// Exercicio 3
var cidades = ["Recife", "Fortaleza", "Manaus"];
cidades.push("Belem");
console.log("Exercicio 3 - Array apos push:", cidades);
console.log("Exercicio 3 - Total de itens:", cidades.length);
document.getElementById("ex3a").textContent = "Array apos push(): " + cidades.join(", ");
document.getElementById("ex3b").textContent = "Total de itens (length): " + cidades.length;

// Exercicio 4
var numeros = [5, 15, 25, 35, 45];
var textoNumeros = "Numeros: ";
for (var i = 0; i < numeros.length; i++) {
  textoNumeros += numeros[i];
  if (i < numeros.length - 1) textoNumeros += ", ";
}
console.log("Exercicio 4 -", textoNumeros);
document.getElementById("ex4").textContent = textoNumeros;


// ============================
// OBJETOS
// ============================

// Exercicio 5
var pessoa = {
  nome: "Roberto",
  idade: 34,
  cidade: "Curitiba"
};
console.log("Exercicio 5 - Nome:", pessoa.nome);
document.getElementById("ex5").textContent = "Nome: " + pessoa.nome;

// Exercicio 6
document.getElementById("ex6-antes").textContent =
  "Antes -> Nome: " + pessoa.nome + " | Idade: " + pessoa.idade + " | Cidade: " + pessoa.cidade;

document.getElementById("inputIdade").value = pessoa.idade;

function alterarIdade() {
  var novaIdade = parseInt(document.getElementById("inputIdade").value);
  pessoa.idade = novaIdade;
  console.log("Exercicio 6 - Objeto atualizado:", pessoa);
  document.getElementById("ex6-depois").textContent =
    "Depois -> Nome: " + pessoa.nome + " | Idade: " + pessoa.idade + " | Cidade: " + pessoa.cidade;
}

// Exercicio 7
pessoa.profissao = "Engenheiro";
console.log("Exercicio 7 - Com profissao:", pessoa);
document.getElementById("ex7").textContent =
  "Nome: " + pessoa.nome + " | Profissao: " + pessoa.profissao;

// Exercicio 8
var carro = {
  marca: "Volkswagen",
  modelo: "Gol",
  ano: 2019,
  cor: "branco"
};
console.log("Exercicio 8 - Carro:", carro);
document.getElementById("ex8").textContent =
  "Marca: " + carro.marca +
  " | Modelo: " + carro.modelo +
  " | Ano: " + carro.ano +
  " | Cor: " + carro.cor;


// ============================
// ARRAY + OBJETOS
// ============================

// Exercicio 9
var alunos = [
  { nome: "Carla", nota: 7.5 },
  { nome: "Diego", nota: 8.5 },
  { nome: "Simone", nota: 6.0 }
];
console.log("Exercicio 9 - Nota do primeiro aluno:", alunos[0].nota);
document.getElementById("ex9").textContent =
  "Primeiro aluno: " + alunos[0].nome + " | Nota: " + alunos[0].nota;

// Exercicio 10
alunos.push({ nome: "Vinicius", nota: 9.0 });
console.log("Exercicio 10 - Novo aluno adicionado:", alunos[alunos.length - 1]);
document.getElementById("ex10a").textContent =
  "Novo aluno: " + alunos[alunos.length - 1].nome + " | Nota: " + alunos[alunos.length - 1].nota;
document.getElementById("ex10b").textContent =
  "Total de alunos no array: " + alunos.length;

// Exercicio 11
var todosNomes = "Alunos: ";
for (var j = 0; j < alunos.length; j++) {
  todosNomes += alunos[j].nome;
  if (j < alunos.length - 1) todosNomes += ", ";
}
console.log("Exercicio 11 -", todosNomes);
document.getElementById("ex11").textContent = todosNomes;
