function printAsyncName(callback, nome){
    setTimeout(()=> callback(nome),1000)
}

function logTimeout(nome){
    setTimeout(()=> console.log(nome),2000)
}



  printAsyncName(logTimeout, "simone")