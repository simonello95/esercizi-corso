function repeatHello(callback,num) {
    let id = setInterval(() => callback(), 1000);
    setInterval(() => clearInterval(id), 1000 * num)
}

function callback() {
    console.log("Ciao");
}


repeatHello(callback, 5)