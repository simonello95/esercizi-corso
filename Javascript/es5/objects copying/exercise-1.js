const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = {... person1};
person2.firstName="Simon";

//facendo così ho clonato le proprietà di person1 in person2 facendo diventare un oggetto a sè, mentre prima 
//se si faceva person2=person1 copiava i valori di person1 però dipendeva sempre dall'oggetto padre

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
