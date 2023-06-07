function repeatHello(callback,num) {
    let id = setInterval(() => callback(), 1000);
    setInterval(() => clearInterval(id), 1000 * num)
}

const callback = () => {
    console.log("Ciao");
}

//l'arrow function è una variante di scrivere le funzioni, serve a scrivere meno codice e rendere più leggibile il codice


repeatHello(callback, 5)