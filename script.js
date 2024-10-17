const ar = [1, 2, 3, 8, 12]

// let result = 0
// ar.forEach(num => {
//   result += num
// })
// console.log(result)

let result = ar.reduce((acc, cur) => {
  return acc + cur
}, 0)
console.log(result)

// pokud není initial value, tak initial value je první prvek pole a iterace začíná od druhého

const data = [
  { first: 'karel', salary: 1500 },
  {first: 'jenda', salary: 2000},
  { first: 'franta', salary: 3200 }
]

result = data.reduce((acc, cur) => {
  return acc + cur.salary
}, 0)
console.log(result)

result = data.map(emp => emp.salary).reduce((acc, cur) => acc + cur)
console.log(result)

const person = {
  first: 'Karel',
  last: 'Houska',
  dogs: [
    { name: 'Alík', breed: 'cocker' }, { name: 'Rex', breed: 'labrador'} ]
}

result = person.dogs.reduce((acc, cur) => {
  if (cur.breed === 'cocker') {
    return acc + 1
  }
  return acc
}, 0)

// jsou všechna čísla sudá ?
// vrací true/false, nemění pův pole

result = ar.every(num => {
  return num % 2 === 0
})

console.log(result)

// some


// je některý prvek pole sudé číslo ??

result = ar.some(num => num % 2 === 0)
console.log(result)

// je některý prvek záporné číslo ??
result = ar.some(num => num < 0)
console.log(result)