function repeatHello(callback) {
    setInterval(()=> callback(), 1000)
}


const callback = () => {
    console.log("Ciao");
}

//l'arrow function è una variante di scrivere le funzioni, serve a scrivere meno codice e rendere più leggibile il codice

repeatHello(callback)