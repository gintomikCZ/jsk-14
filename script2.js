// Array methods
// Q1 - co metoda vrací ????
// Q2 - co dělá s původním polem

// statické metody na Array
// Array.from(arg) - vrátí pole vytvořené z arg
// Array.isArray(arg) - vrátí true pokud arg je pole, jinak false

const ar = [1, 2, 3]

// push - přidává prvek na konec pole
// mění původní pole ... vrací novou délku pole
ar.push(4)
console.log(ar) // [1, 2, 3, 4]

// unshift - přidává prvek na začátek pole
// mění původní pole ... vrací novou délku pole
ar.unshift(10)
console.log(ar) // [10, 1, 2, 3, 4]

// pop - odstraní poslední prvek a ten vrátí
// mění původní pole
ar.pop()
console.log(ar) // [10, 1, 2, 3]

// shift - odstraní první prvek pole a ten vrátí
// mění původní pole
ar.shift()
console.log(ar) // [1, 2, 3]

console.log(ar.join('.')) // '1.2.3'

let str = 'ahoj'
const strAr = str.split('') // ['a', 'h', 'o', 'j']
console.log(strAr.join('')) // 'ahoj'