// class User {
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     }
// }
//let user = new User('Vasya');
//user.sayHi();
///////////////////////////////////////////////
// let User = class {
//     sayHi() {
//         console.log('Hi');
//     }
// };
//
// new User().sayHi();
//////////////////////////////////////////////
//Генератор классов
// let models = {};
//
// function createModel(Model, ...args) {
//     let model = new Model(...args);
//
//     model._id = Math.random().toString(36).slice(2);
//     models[model._id] = model;
//
//     return model;
// }
//
// let user = createModel(class User {//имя класса будет видно только внутри класса
//     constructor(name) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log(`Hello, ${this.name}`);
//     }
// }, 'Dima');
//
// console.log(models[user._id].name);
///////////////////////////////////////////////////
class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(fullName) {
        [this.lastName, this.firstName] = fullName.split(' ');
    }

    ['alert'.toUpperCase()]() {
        console.log(`${this.lastName} ${this.firstName}`);
    }

    static createGuest() {
        return new User('гость', 'сайта');
    }
}

let user = new User('Dima', 'Ivov');

console.log(user.fullName);

user.fullName = 'Bunin Sergei';

console.log(user.fullName);

user.ALERT();