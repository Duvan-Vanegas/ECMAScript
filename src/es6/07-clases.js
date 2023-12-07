// declarando 
class User {};
// const newUser = new User(); // instancia de una clase

class user {
    // metodos
    greeting() {
        return 'Hello!';
    }
};

const inst = new user();
console.log(inst.greeting());
const dev = new user();
console.log(dev.greeting());

// constructor

class user {
    constructor() {
        console.log('New user');
    }
    greeting() {
        return 'Hello!';
    }
};

const david = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const juan = new user('Juan');
console.log(juan.greeting());

// setters getters
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const deve = new user('David', 16);
console.log(deve.uAge);
console.log(deve.uAge = 20);
