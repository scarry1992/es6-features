// function getHeight() {
//     return 500;
// }
//
// function show(title='title', height=getHeight(), width=300, ...rest) {
//     console.log(`${title} = ${height}x${width}`, rest);
// }
//
// let numbers = [2,6,3],max;
// max = Math.max(...numbers);//для передачи масива как списка аргументов(Math.max(2,6,3) или Math.max.apply(Math, numbers))
//
// show('Menu',undefined, 400, undefined, null, 'asdf', 234, [2,3,4], {q:'q', w:'w'});
// console.log(max);
//////////////////////////////////////
// let options = {
//     left: 100,
//     right: 200,
//     title: 'Title'
// };
//
// function show({left:l=600, right:r=700, title:t='Empty'} = {}) {//значение по умолчанию для всего деструктуризированного списка аргументов
//     console.log(l, r, t);
// }
//
// show();
// show(options);
//////////////////////////////////////
// if (true) {
//     show();
//
//     function show() {//видно только в блоке if
//         console.log(1);
//     }
// }
// show();//ошибка
//////////////////////////////////////
function defer(f, ms) {
    return function () {
        setTimeout(()=>f.apply(this, arguments), ms);//в функции стрелке arguments и this из внешней функции
    }
}

function show(who) {
    console.log('Hello '+who);
}

let HelloWhoDefered = defer(show, 1000);
HelloWhoDefered('Nick');