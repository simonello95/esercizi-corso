const number = 15;

const myPromise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number)
    }
    else reject(number)
})

myPromise
    .then((accept) => {
        console.log("promise risolta", `${accept}`);
    })

    .catch((error) => {
        console.log("promise rigettata", `${error}`);
    })

