let energiaInicial = 10;
let contador = 0;
while (energiaInicial >= contador) {
  contador++;
  energiaInicial -= contador;

  console.log(`Ação #${contador} concluída! Energia restante: ${energiaInicial}%`);
}
