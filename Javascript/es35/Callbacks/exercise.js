function repeatHello(callback) {
    setInterval(()=> callback(), 1000)
}


function callback() {
    console.log("Ciao");
}

repeatHello(callback)