
const elementosFake = [
    { tagName: "BUTTON", classList: ["btn", "btn-primary", "ativo"] }, // 3 classes
    { tagName: "INPUT", classList: ["campo-texto"] },                   // 1 classes
    { tagName: "H1", classList: [] }                                   //0 classes
];


elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`);
    console.log(`Quantidade de classes: ${element.classList.length}`);
});
//length ele conta os itens de um array
