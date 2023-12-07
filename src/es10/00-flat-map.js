const array = [1, 1, 1, 2, 3, [1, 2, 1, 3, [2, 5]]];
console.log(array.flat(3));

// flatmap
const array2 = [1, 2];
console.log(array2.flatMap(v => [v, v * 2]));