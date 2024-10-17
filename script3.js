const ar = [1, 2, 3, 10, 7]

ar.forEach((item) => {
  // nonsens return
})

// jak vyhledat prvek v poli ???

const fruits = ['švestka', 'hruška', 'jablko', 'čerešňa']

console.log(fruits.indexOf('jablko')) // 2
  // pokud nenajde, tak vrátí - 1

// hodnota se nerovná ani 1 ani 2 ani 10
// if (myVar !== 1 && myVar !== 2 && myVar !== 10)
// if ([1, 2, 10]. indexOf(myVar) < 0)

let result = ar.find((item) => {
  return item > 5
})
console.log(result)
// ar.find - vrací nalezený element, nemění pole

result = ar.findLast(item => item > 5)
console.log(result) // 7

// ar.findIndex - totéž co find, ale nevrací prvek, ale jeho index
// ar.findLastIndex - totéž co findLast, ale nevrací prvek, ale jeho index

result = ar.filter(item => item > 5) // vytvoří nové pole obsahující prvky, na které cb vrátila true
// vrací nové pole (případně prázdné), nemění původní
// nové pole bude mít maximálně stejnou délku
console.log(result) // [10, 7]

result = ar.map(item => item * 2)
console.log(result) // [2, 4, 6, 20, 14]
// vrací nové pole o stejné délce (!) obsahující to, co vracela cb
// původní pole se nemění

// result = ar.sort()
// console.log(ar)
// console.log(result)

// result = fruits.sort()
// console.log(fruits)
// console.log(result)

// sort - mění původní pole (!!!) - sideeffect
// str.localeCompare(anotherString)
result = ar.slice().sort((a, b) => {
  return a - b
})
console.log(result)
result = fruits.slice().sort((a, b) => {
  return a.localeCompare(b)
})
console.log(result)


/*
slice() - vrátí shallow copy celého pole
slice(startIndex) - uřízne pole od elementu s indexem startIndex (včetně !) až do konce
slice(startIndex, endIndex) - uřízne pole od elementu s indexem startIndex (včetně !) do indexu endIndex (!nevčetně)
ar.slice(1, 2) ... // [2]
nemění pole původní
*/

// co je shallow copy

const person = {
  first: 'Karel',
  last: 'Houska',
  dogs: ['Alík', 'Rex']
}

const keys = Object.keys(person)
const copy = {}
keys.forEach(key => {
  copy[key] = person[key]
})

copy.first = 'Franta'
copy.dogs.push('Jessie')

console.log(person)
console.log(copy)

// deep copy - kopíruje i vnořené ref. dat. typy

const getDeepCopy = (obj) => JSON.parse(JSON.stringify(obj))