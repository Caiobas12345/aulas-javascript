const inventario = [
    { nomeItem: "Espada do Amor", precoItem: 150, raridadeItem: "Raro", quantidadeEstoque: 10 },
    { nomeItem: "Escudo de Madeira", precoItem: 50, raridadeItem: "Comum", quantidadeEstoque: 0 },
    { nomeItem: "Poção de Cura", precoItem: -20, raridadeItem: "Incomum", quantidadeEstoque: 5 },
    { nomeItem: "Anel do Dragão", precoItem: 850, raridadeItem: "Lendário", quantidadeEstoque: 3 },
    { nomeItem: "Cajado Mágico", precoItem: 600, raridadeItem: "Épico", quantidadeEstoque: 8 }
  ];
  
 
  function formatarItem(item) {
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
    
    const emDestaque = item.precoItem > 500 ? "SIM " : "Não";
    const disponivelParaCompra = item.quantidadeEstoque > 0 && precoValido;
  
    return `Item: ${item.nomeItem}
  Raridade: ${item.raridadeItem}
  Preço: ${precoValido ? item.precoItem + " Robux" : "ERRO (Preço negativo!)"}
  Faixa de Preço: ${categoriaPreco}
  Em Destaque: ${emDestaque}
  Estoque Atual: ${item.quantidadeEstoque} unidades
  Disponível para Venda: ${disponivelParaCompra ? "Disponível" : "Indisponível "}
  --------------------------------------------------`;
  }
  
 
  function exibirCatalogoCompleto() {
    console.log("===  CATÁLOGO GERAL DE AVATARES ROBLOX ===\n");
    inventario.forEach(item => console.log(formatarItem(item)));
  }
  
 
  function buscarNoCatalogo(termo) {
    console.log(`===  RESULTADOS DA BUSCA POR: "${termo}" ===\n`);
    const resultados = inventario.filter(item => 
      item.nomeItem.toLowerCase().includes(termo.toLowerCase())
    );
    
    if (resultados.length === 0) {
      console.log("Nenhum item encontrado com esse nome.\n");
      return;
    }
    resultados.forEach(item => console.log(formatarItem(item)));
  }
  
 
  function filtrarPorRaridade(raridade) {
    console.log(`===  ITENS DE RARIDADE: ${raridade.toUpperCase()} ===\n`);
    const resultados = inventario.filter(item => 
      item.raridadeItem.toLowerCase() === raridade.toLowerCase()
    );
    
    if (resultados.length === 0) {
      console.log(`Nenhum item da raridade "${raridade}" foi encontrado.\n`);
      return;
    }
    resultados.forEach(item => console.log(formatarItem(item)));
  }
  
 
  function filtrarPorPrecoMaximo(saldoRobux) {
    console.log(`===  O QUE VOCÊ CONSEGUE COMPRAR COM ${saldoRobux} ROBUX ===\n`);
    const resultados = inventario.filter(item => 
      item.precoItem >= 0 && item.precoItem <= saldoRobux && item.quantidadeEstoque > 0
    );
    
    if (resultados.length === 0) {
      console.log("Você não consegue comprar nenhum item com esse saldo no momento.\n");
      return;
    }
    resultados.forEach(item => console.log(formatarItem(item)));
  }
  
  
 
  
  
  buscarNoCatalogo("");
  
 
  filtrarPorRaridade("Lendário");
  
 
  filtrarPorPrecoMaximo(200);
  