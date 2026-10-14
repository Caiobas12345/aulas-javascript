let total = 0;


const compras = [
  { valor: 85.2, comprou: true },  // Carne
  { valor: 11.0, comprou: true },  // Arroz
  { valor: 6.0,  comprou: true }   // Goma
];

for (const item of compras) {
  if (item.comprou) {
    total += item.valor;
  }
}

console.log("Total:", total);