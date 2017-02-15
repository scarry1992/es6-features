// let name = 'Victor',
//     isAdmin = true;
//
// let user = {
//     name,
//     isAdmin
// };
//
// console.log(JSON.stringify(user));
//////////////////////////////////////
// let propName = 'firstName',
//     role = {
//         user: 'User',
//         admin: 'Admin'
//     },
//     isAdmin = true;
//
// let obj = {
//     [propName]: 'Vasya',
//     [propName+(isAdmin?role.admin:role.user)]: "SU"
// };
//
// console.log(obj, obj.firstName, obj.firstNameAdmin);
///////////////////////////////////////////////////////
let Animal = {
    walk() {
        console.log('Im walk');
    }
};

let Rabbit = {
    __proto__: Animal,
    walk() {//работает только при таком объявлении через HomeObject. При объявлении через функцию-свойство не будет работать.
        super.walk();
        setTimeout(()=>(super.walk()), 2000);
    }
};

Rabbit.walk();