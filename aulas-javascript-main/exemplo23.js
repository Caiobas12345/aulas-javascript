const frutas = ['Maçã', 'Banana', 'Uva'];

for (const fruta of frutas) {
  console.log(fruta);
}

// CORRIGIDO: Usando 'frutas' no plural
frutas.push('morango');
frutas.push('laranja');
frutas.push('limão'); 

console.log("Depois de adicionar 3 frutas");
console.log(frutas); // CORRIGIDO: Exibindo o array completo 'frutas'


frutas.unshift('abacaxi');
frutas.pop();
frutas.shift();
console.log("Removi 2 frutas");
console.log(frutas);

frutas.splice(2,2);
frutas.splice(2,0, 'abacaxi');

console.log("Resultado final após o splice:");
for(const fruta of frutas){
  console.log(fruta);
}
