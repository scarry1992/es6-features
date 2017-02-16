let s = 'Hello',
    arr = [1,2,3];

for (let item of s) {
    console.log(item);
}
for (let item of arr) {
    console.log(item);
}

let obj = {
    from: 1,
    to: 5,
    [Symbol.iterator]: function () {
        let current = this.from,
            to = this.to;
        console.log(this);
        return {
            next() {
                if (current<=to) {
                    return {
                        done: false,
                        value: current++
                    }
                } else {
                    return { done: true}
                }
            }
        }
    }
};

for (let item of obj) {
    console.log(item);
}

let str = 'Buy',
    iterator = str[Symbol.iterator]();

while (true) {
    let res = iterator.next();
    if (res.done) break;
    console.log(res.value);
}