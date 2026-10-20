const elementosFake = [
    { id: "btn1", tagName: "BUTTON", style: { color: "blue" } },
    { id: "txt1", tagName: "P", style: { color: "black" } },
    { id: "tit1", tagName: "H1", style: { color: "blue" } }
];


for (const elemento of elementosFake) {
    if (elemento.style.color == "blue") {
        console.log(`O elemento ${elemento.tagName} é azul`);
    }
}
// ler ou alterar a cor do texto