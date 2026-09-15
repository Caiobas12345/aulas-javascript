const nota = 86;

switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log('Conceito A');
        break;
    case (nota >= 80 && nota <= 89):
        console.log('Conceito B');
        break;
    default:
        console.log('Precisa melhorar');
}
