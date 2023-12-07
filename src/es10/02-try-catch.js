// let res = 0;

// function hello(a, b) {
//     res = a - b;
//     return console.log(res);
// }

try {
    hello(2, 5);
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
}  catch {
    console.log('Raioss');
}