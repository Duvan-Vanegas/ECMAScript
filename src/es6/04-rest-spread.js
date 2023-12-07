// array destructuring 

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring 

let user = {username: 'Daniel', age: 30};
let {username, age} = user;
console.log(username, user.age);

// spread operator
let person = {name: 'Oscar', age: 30};
let country = 'CO';

let data = {id:1, ...person, country};
console.log(data);

// rest 
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num * values[0];
}

sum(1, 1, 4, 5, 3);