const inventario = [
    { nomeItem: "Espada do Amor", precoItem: 150, raridadeItem: "Raro", quantidadeEstoque: 10 },
    { nomeItem: "Escudo de Madeira", precoItem: 50, raridadeItem: "Comum", quantidadeEstoque: 0 },
    { nomeItem: "Poção de Cura", precoItem: -20, raridadeItem: "Incomum", quantidadeEstoque: 5 },
    { nomeItem: "Anel do Dragão", precoItem: 850, raridadeItem: "Lendário", quantidadeEstoque: 3 },
    { nomeItem: "Cajado Mágico", precoItem: 600, raridadeItem: "Épico", quantidadeEstoque: 8 }
];

console.log("=== SISTEMA DE CATÁLOGO DE AVATARES ROBLOX ===\n");

for (const item of inventario) {
    const precoValido = item.precoItem >= 0;
    
    let categoriaPreco = "";
    if (!precoValido) {
        categoriaPreco = "Preço Inválido";
    } else if (item.precoItem < 100) {
        categoriaPreco = "Barato";
    } else if (item.precoItem <= 500) {
        categoriaPreco = "Acessível";
    } else {
        categoriaPreco = "Premium / Luxo";
    }
    
    const emDestaque = item.precoItem > 500 ? "SIM ⭐" : "Não";
    
    const disponivelParaCompra = item.quantidadeEstoque > 0 && precoValido;
    
    console.log(`Item: ${item.nomeItem}`);
    console.log(`Raridade: ${item.raridadeItem}`);
    console.log(`Preço: ${precoValido ? item.precoItem + " Robux" : "ERRO (Preço negativo!)"}`);
    console.log(`Faixa de Preço: ${categoriaPreco}`);
    console.log(`Em Destaque: ${emDestaque}`);
    console.log(`Estoque Atual: ${item.quantidadeEstoque} unidades`);
    console.log(`Disponível para Venda: ${disponivelParaCompra ? "Disponível" : "Indisponível ❌"}`);
    console.log("--------------------------------------------------");
}
