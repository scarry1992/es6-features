//let [firstName, lastName] = ['Sergei', "Buncevich"];
//let [,,third] = 'The word third can be taken'.split(' ');

//let [first, second, ...rest] = 'The word third can be taken'.split(' ');
//let [first = 'Yes', second = 'name', ...rest] = [];
//let [first, second = (()=>Date.now()+'-visitor')(), ...rest] = ['Vasya'];//как дефолтные значения можно указывать выражения
//export {first, second, rest};

// let obj = {
//     left: 50,
//     right: 50,
//     title: 'Title'
// };

//let {left:l=100, right:r=100, title='Empty', top:t=200} = obj;
//let l,r,t, title;
//({left:l,right:r,title,top:t=200} = obj);//нужно в скобках иначе посчитает что это блок

const obj = {
    title:'Title',
    size: {
        left: 50,
        right: 50
    },
    pos: ['top', 'bottom']
};

let {title, size:{left:l, right:r}, pos:[top, bottom]} = obj;//переменных size и pos нету

console.log(l,r,title, top, bottom);