let map = new Map(),
    obj = {key: 'value'};

// map.set('key', 'value');
// map.set(1, '1');
// map.set('1', '2');
// map.set(true, 'boolTrue');

// map.set('key', 'value')
//     .set(1, 'num1')
//     .set('1', 'str1')//можно чейнить
//     .set(obj, 'Object');//использовать объект
//
// map.delete(1);
// //map.clear();//очищает весь мэп
// map.has('1');
//
// for (let item of map.values()) {//перебор идет строго в соответствии вставке
//     console.log(item);//массив 0=>key 1=>value
// }
//
// for (let item of map.keys()) {
//     console.log(item);//массив 0=>key 1=>value
// }
//
// for (let item of map.entries()) {//стандартный можно просто map
//     console.log(item);//массив 0=>key 1=>value
// }
//
// map.forEach((value, key, map) => {console.log(`${key} - ${value} from ${map}`);});
//
// console.log(map.size);
//////////////////////////////////////////////////////////////
// let set = new Set(),
//     user1 = {name: 'Katy'},
//     user2 = {name: 'Oleg'},
//     user3 = {name: 'Jora'};
//
// set.add(user1);
// set.add(user1);
// set.add(user2);
// set.add(user3);
// set.add(user3);
//
// set.delete(user1);//true/false
// set.has(user2);//true/false
// //set.clear();
//
// console.log(set.size);
//
// set.forEach((user, valueAgain, set) => console.log(user.name, valueAgain, set));
/////////////////////////////////////////////////////////////////
let weakMap = new WeakMap(),//нельзя перебирать итератором или forEach, нет clear()
    activeUsers = [
        {name: 'Koly'},
        {name: 'Ula'},
        {name: 'Jora'}
    ];

activeUsers.forEach(value => weakMap.set(value, 32));

//weakMap.delete(activeUsers[1]);
weakMap.has(activeUsers[1]);

//console.log(weakMap.size());//нет size
activeUsers.forEach(val => console.log(weakMap.get(val)));//3 элемента
activeUsers.pop();
activeUsers.forEach(val => console.log(weakMap.get(val)));//2 элемента

