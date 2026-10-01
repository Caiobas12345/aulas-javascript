function verificarEstoque(estoque) {
    if (estoque < 5) {
      console.log(`Estoque crítico: ${estoque}`);
    } else if (estoque >= 5) {
      console.log(`Estoque Normal: ${estoque}`);
    }
  }
  
  verificarEstoque(7);
  