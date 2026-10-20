
const elementosFake = [
    { id: "btn1", tagName: "BUTTON", style: "color: blue;" },
    { id: "input1", tagName: "INPUT", style: "border: 1px solid gray;" },
    { id: "tit1", tagName: "H1", style: "color: red;" }
];


elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`);
});
//sempre retorna o nome da tag em letras maiúsculas
