
const carrinho = [25.50, 10.00, 100.00, 5.00];

let total = carrinho.reduce((all,valor) => all + valor, 0) 
//Reduce:  reduzir a lista inteira a um único valor final 
console.log(total); 