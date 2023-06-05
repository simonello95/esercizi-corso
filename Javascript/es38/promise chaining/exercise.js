const isLogged = true;

function firstPromise(isLogged) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged === true) {
        const numRandom = Math.random();
        resolve(numRandom);
      } else {
        reject("non è loggato");
      }
    }, 1000);
  });
}

function secondPromise(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        resolve({ nome: "John", età: 24 });
      } else {
        reject("numero minore di 0.5");
      }
    }, 1000);
  });
}

firstPromise(isLogged)
  .then((val) => {
    return secondPromise(val);
  })

  .then((val) => {
    console.log(val);
  })

  .catch((error) => {
    console.log(error);
  });
