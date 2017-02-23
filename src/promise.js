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
import users from'./users.json';

function httpGet(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.addEventListener('load', (e) => {
            if (xhr.status == 200) {
                resolve(xhr.response)
            } else {
                let err = new Error(xhr.statusText);
                err.code = xhr.status;
                reject(err);
            }
        });

        xhr.send();
    });
}

// httpGet('/404.html').then((response) => console.log(response))
//     .catch(err => console.log(err.message));
////////////////////////////////////////////////////////////////////////
// httpGet('/assets/users.json')
//     .then((resp) => {
//         let users = JSON.parse(resp);
//         console.log(resp);
//         console.log(users);
//         return users;
//     })
//     .then(users => users.map((user) => user.name))
//     .then(names => names.forEach(name => console.log(name)))
//     .catch(err => console.log(err.message));
/////////////////////////////////////////////////////////////////////////
Promise.all([
    httpGet('/assets/users1.json'),
    httpGet('/assets/users.json')
]).then(res => console.log(res)).catch(err => console.log(err.message));

Promise.race([
    httpGet('/assets/users1.json'),
    httpGet('/assets/users.json')
]).then(res => console.log(res)).catch(err => console.log(err.message));

Promise.resolve(`${window.location}assets/users.json`)
    .then(httpGet)
    .then(console.log);

Promise.reject(new Error('Error'))
    .catch(console.log);