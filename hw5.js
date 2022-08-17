function true_finder(array) {
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            j++;
        }
    }
    console.log(j);
}
true_finder([0, 3, "sdgs", undefined, null, 34]);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
let entries = Object.entries(person);
console.log(entries);

function sum(a, b) {
    for (let i = 0; i < a.length; i++) {
        a[i] += b[i];
    }
    console.log(a)
}
sum([2, 4, 6, 4], [4, 3, 6, 3]);

function subset(a) {
    let array = [];
    let m = "";
    for (let s = 0; s < a.length; s++) {
        for (let p = s; p < a.length; p++) {
            m += a[p];
            array.push(m);
        }
        m = "";
    }
    console.log(array);
}
subset("alifdwef");

function changer(n) {

    let array = [];
    while (n) {
        array.unshift(n % 10);
        n -= n % 10
        n /= 10;

    }
    let m = "";
    for (let i = 0; i < array.length; i++) {
        if (!(array[i] % 2) && !(array[i + 1] % 2)) {
            m += array[i].toString();
            m += "-";
        } else {
            m += array[i].toString();

        }
    }
    console.log(m);
}
changer(7348325)