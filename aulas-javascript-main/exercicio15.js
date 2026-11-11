const testarEscopo = (senhaDigitada) => { 
  const segredo = 123; 

  if (senhaDigitada === segredo) {
    return "Acesso concedido: " + segredo;
  } else {
    return "Você não pode acessar isso";
  }
}; 


console.log(testarEscopo(222)); 


console.log(testarEscopo(123));
