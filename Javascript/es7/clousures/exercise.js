function printName() {
    let helloName = "Hello John";
    
    function inner() {
        setTimeout(function(){
            console.log(helloName);
        },1000)

      return helloName;
    }
  
    return inner(); 
  }
  
  printName();
  