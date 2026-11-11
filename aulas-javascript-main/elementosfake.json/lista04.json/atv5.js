

const apiProdutos = [
    { id: 101, nome: 'monitor led', preco: 899.9 },
    { id: 102, nome: 'teclado mecanico', preco: 250.0 },
    { id: 103, nome: 'mouse gamer', preco: 125.45 }
];

let produtosFormatados = apiProdutos.map(produto => ({
    ...produto,
    //Operador rest junta ou copia elemtentos
    // Já o map ele transforma uma lista(array) em uma nova lista
    nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
    precoFormatado: `R$ ${produto.preco.toFixed(2)}`
    // serve para envolver uma string dentro de uma tag HTML
})
)

console.log(produtosFormatados)