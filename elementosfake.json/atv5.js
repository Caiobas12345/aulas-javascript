
const elementosFake = document.querySelectorAll('.fake');
elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`);
    console.log(`Quantidade de classes: ${element.classList.length}`);

    // Converte a lista de classes em uma Array para exibir de forma bonita
    console.log(`Classes:`, Array.from(element.classList));
    console.log('------------------------------');
});

//busca elementos no HTML igual ao CSS.
//retorna o nome da tag
//transformar objetos que parecem arrays(mas não são)

//busca e seleciona todos os elementos do seu HTML que combinam com um seletor CSS 