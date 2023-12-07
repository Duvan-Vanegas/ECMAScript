const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('!!');
        } else {
            reject('Whooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(e => console.log(e));
