
const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

let produtosDescontados = produtos.map(produto => ({
    ...produto,
    preco: produto.preco*.9
}));
console.log(produtosDescontados)