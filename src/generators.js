// function* generatorSequence(start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
//
// let sequence = generatorSequence(4,10);
// console.log(sequence.next().value);
// console.log(sequence.next().done);
// console.log(sequence.next().value);
//
// function* generatorAlphaNum() {
//     yield* generatorSequence(48, 57);
//
//     yield* generatorSequence(65, 90);
//
//     yield* generatorSequence(97, 122);
// }
//
// let str = '';
//
// for (let code of generatorAlphaNum()) {
//     str += String.fromCharCode(code);
// }
//
// console.log(str);
//////////////////////////////////////////////////////////////////
function* gen() {
    try {
        let value = yield '2+2?';

        console.log(value);
    } catch(e) {
        console.log(e.message);
    }

}

let generator = gen();

console.log(generator.next().value);

//generator.next(4);
generator.throw(new Error('Error'));