class Person {
  #firstName
  #lastName
  #age
    
    constructor(firstName,lastName,age){
      this.#firstName = firstName
      this.#lastName = lastName
      this.#age = age
    }

    get firstName(){
      return this.#firstName
    }

    get lastName(){
      return this.#lastName
    }

    get age(){
      return this.#age
    }

    set firstName(newName){
      this.#firstName = newName
    }

    set lastName(newLast){
     this.#lastName = newLast
    }

    fullName(){
      return this.#firstName +" "+ this.#lastName + " "+ this.#age
    }

    //non so se questo metodo fullName è corretto, in quanto la traccia dice di usare get
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName());

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName());
