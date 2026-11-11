const girarRoleta = () => {
    let giros =0
    do {
        giros++;
        console.log(`Girando a roleta ${giros}`);
    } while (giros > 1);
    console.log(`A roleta girou ${giros} vez(es).`);

};
girarRoleta();
