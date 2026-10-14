function verificarEstoque(Estoque) {
  if (Estoque < 5) {
    console.log(`Estoque crítico: ${Estoque}`);
  } else {
    console.log(`Estoque Normal: ${Estoque}`);
  }
}

verificarEstoque(7);
