let nomeItem = "Espada do Amor";
let precoItem  = 500;
let raridadeItem  ="Raro";
let quantidadeEstoque  = "600";

if (precoItem >= 0) {
    console.log(`Preço de "${nomeItem}" é válido.`);
    
    // 2. Classificação por faixa de preço (if / else if / else)
    let classificacao;
    if (precoItem < 100) {
        classificacao = "Comum";
    } else if (precoItem >= 100 && precoItem < 500) {
        classificacao = "Raro";
    } else {
        classificacao = "Lendário";
    }
    console.log(`Classificação do item: ${classificacao

    // 3. Operador Ternário para definir se está em destaque (true se precoItem > 500)
    let emDestaque = precoItem > 500 ? true : false;
    console.log(`Item em destaque? ${emDestaque}`);

    // 4. Operador Lógico (&&) para verificar disponibilidade
    let disponivelParaCompra = (estoqueItem > 0 && precoItem > 0);
    console.log(`Disponível para compra? ${disponivelParaCompra}`);

} else {
    // Mensagem de erro caso o preço seja menor que 0
    console.error("Erro: O preço do item não pode ser menor que 0.");
}