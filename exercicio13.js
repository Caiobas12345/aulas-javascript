    const valorCompra = 150;
    const fretePadrao = 20;
    const  valorFrete = valorCompra >= 150 ? 0 : fretePadrao;
  if(valorCompra > 150) {
   console.log(`Sua compra foi: ${valorCompra}, frete é gratis`);
  }else{
    console.log(`Sua compra foi de: ${valorCompra}, o frete foi: ${fretePadrao}`);
  }
  console.log(`${valorCompra}, ${fretePadrao}`);
