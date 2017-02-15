// function string(strings, ...values) {
//     console.log(strings);
//     console.log(strings.raw);
//     console.log(values);
// }
//
// const apples = 6,
//     oranges = 4;
//
// let str = string`${apples} apples +
// ${oranges} oranges =
// ${apples+oranges} fruits`;
////////////////////////////////////////////////////
// const messages = {
//     'Hello, {0}': 'Привет, {0}'
// };
//
// function i18n(strings, ...values) {
//     let pattern = '';
//
//     for (let i=0; i < values.length; i++) {
//         pattern += `${strings[i]}{${i}}`;
//     }
//
//     pattern = messages[pattern];
//
//     return pattern.replace(/\{(\d*)\}/, (str, p1)=>(values[p1]));
// }
// let name = 'Миша';
// console.log(i18n`Hello, ${name}`);
//////////////////////////////////////////
'qweqwe'.includes('eq');//проверяет, включает ли одна строка в себя другую, возвращает true/false.
'qweqew'.endsWith('w');//возвращает true, если строка str заканчивается подстрокой s.
'werrew'.startsWith('w');//возвращает true, если строка str начинается со строки s.
'qw'.repeat(6);//повторяет строку str times раз.