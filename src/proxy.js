// class User{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     get fullInfo() {
//         return `${this.name} - ${this.age}`;
//     }
//
//     set fullInfo(newInfo) {
//         let infoArr = newInfo.split(' - ');
//         this.name = infoArr[0];
//         this.age = infoArr[1];
//     }
// }
//
// let user = new User('Kola', 14);
//
// console.log(user.fullInfo);
// user.fullInfo = 'Jora - 19';
// console.log(user.fullInfo);
//
// let proxyUser = new Proxy(user, {
//     get(target, prop) {
//         console.log(`Read ${prop}`);
//         return target[prop];
//     },
//     set(target, prop, value) {
//         console.log(`Write ${prop}`);
//         target[prop] = value;
//         return true;
//     }
// });
//
// let userNew = new proxyUser('Dima', 234);
//
// console.log(proxyUser.fullInfo);
// proxyUser.fullInfo = 'Ula - 43';
// console.log(proxyUser.fullInfo);
// console.log(userNew.name);
///////////////////////////////////////////////////////////
// let dictionary = {
//     'Hello': "Привет",
//     'Bye': "Пока",
//     '_sysInfo': 'global'
// };
//
// dictionary = new Proxy(dictionary, {
//    get(target, prop) {
//        if (prop in target) {
//            return target[prop];
//        } else {
//            console.log(`No translate for ${prop}`);
//            return prop;
//        }
//    },
//    has(target, prop) {
//        return !!target[prop];
//    },
//    deleteProperty(target, prop) {
//        return delete target[prop];
//    },
//    enumerate(target) {//удалено из нового стандарта
//        let props = Object.keys(target).filter(function (prop) {
//            return prop != '_';
//        });
//
//        return props[Symbol.iterator]();
//    }
// });
//
// console.log(dictionary['Hello']);
// console.log(dictionary['Welcome']);
//
// console.log('Hello' in dictionary);
// console.log('Welcome' in dictionary);

//console.log(delete dictionary['Hello']);
//console.log(delete dictionary['Welcome']);

// for (let val in dictionary) {
//     console.log(val);
// }
////////////////////////////////////////////////////////////////////////////////////////
// function sum(a, b) {
//     return a+b;
// }
//
// let proxy = new Proxy(sum, {
//     apply(target, thisArgs, argsList) {
//         console.log('Proxy');
//         return target.apply(thisArgs, argsList);
//     }
// });
//
// console.log(proxy(1,5));
//////////////////////////////////////////////////////////////////////////////
function User(name, age) {
    this.name = name;
    this.age = age;
}

let proxyUser = new Proxy(User, {
    construct(target, argList) {//target должен быть функцией. с классами не работает
        console.log(`Run with arguments ${argList}`);
        return new target(...argList);
    }
});

let user = new proxyUser('Gena', 123);

console.log(user.name);
