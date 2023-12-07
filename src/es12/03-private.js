class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const deve = new user('David', 16);
console.log(deve.uAge);
console.log(deve.uAge = 20);
