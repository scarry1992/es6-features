// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //false? resolve('Result'): reject(new Error('Huinya'));
//         if (false) {
//             resolve('Result');
//         } else {
//             throw new Error('O_o');
//         }
//     }, 2000);
// });
//
// promise.then(result => {
//     console.log(`Fullfiled: ${result}`);
// })
//     .catch(error => {
//         console.log(`Error: ${error.message}`);
//     });
//////////////////////////////////////////////////////////////////////
// function httpGet(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//
//         xhr.addEventListener('load', (e) => {
//             if (xhr.status == 200) {
//                 resolve(xhr.response)
//             } else {
//                 let err = new Error(xhr.statusText);
//                 err.code = xhr.status;
//                 reject(err);
//             }
//         });
//
//         xhr.send();
//     });
// }
//
// httpGet('/404.html').then((response) => console.log(response))
//     .catch(err => console.log(err.message));
////////////////////////////////////////////////////////////////////////