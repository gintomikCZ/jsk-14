// JavaScript Date Object
// datum ... timestamp ... datum včetně času a timezony

const dt = new Date()
const dt2 = new Date('2024-10-17')
const dt3 = new Date(1729179652523)
const dt4 = new Date(2024, 9, 17)
/*
- bez argumentů - vytvoří aktuální otisk časového razítka
- argument je string (dateString YYYY-MM-DD) 2024-01-01
    - pozor na safari - nebere tečky jako delimiter
- argumentem je jedno číslo - vytvoří časové razítko podle počtu milisekund od 1. 1. 1970 - půlnoc
- argumentem je více čísel new Date(year, month, date, hour, minute, sec, milisec)
    - pozor - měsíce číslujeme od nuly ... 0 - 11
*/
const myDate = new Date(2024, 1, 30) // 2024-03-01
const myDate2 = new Date(2024, 1, 0) // 2024-01-31
const myDate3 = new Date(2024, 12, 1) // 2025-01-01

// metody
// - gettery a settery

/*
  dt.getFullYear() - vrací číslo roku (čtyřmístné)
  dt.getYear() - vrací číslo roku menší o 1900 (124) - bad practice
  dt.getMonth() - vrací číslo měsíce (0-11)
  dt.getDate() - vrací číslo dne v měsíci
  dt.getHours()
  dt.getMinutes()
  dt.getSeconds()
  dt.getMiliseconds()
  dt.getTime() - vrací počet milisekund od 1.1.1970
  dt.getDay() - vrací číslo dne v týdnu (0-6 ... počítáno od neděle)
*/


/*
  dt.setFullYear()
  dt.setMonth()
  dt.setDate()
  dt.setHours()
  dt.setMinutes()
  dt.setSeconds()
  dt.setMiliseconds()
  dt.setTime()
*/


// challenge - funkce, která bude vracet počet dnů v měsíci - argumenty budou a) číslo měsíce, b) číslo roku
const getNumberOfDays = (month, year) => {
  // vytvořit datum - poslední den toho našeho měsíce
  // na to datum zavoláme getDate() - tu vrátíme
  const dt = new Date(year, month + 1, 0)
  return dt.getDate()
}
console.log(getNumberOfDays(10, 2024))


// porovnání datumů
// dt je instance Date, dateString bude string ve formátu '2024-10-17'
// par může být obojí
const isPast = (par) => { // vrátí true, pokud dt je v minulosti, jinak false
  const dtToCompare = typeof par === 'string' ? new Date(par) : par
  const today = new Date()
  return today.getTime() > dtToCompare.getTime()
}

console.log(isPast('2024-10-17'))

// porovnat dvě data - argumenty budou dateStringy
// (dateString1, dateString2) => vrátí true pokud 1 je dříve než 2

const areFollowingDates = (dateString1, dateString2) => {
  const dt1 = new Date(dateString1)
  const dt2 = new Date(dateString2)
  return dt1.getTime() < dt2.getTime()
}

// dateString - dateofbirth
const isAdult = (dateString) => {
  const today = new Date()
  // today.setHours(0)
  // today.setMinutes(0)
  // today.setSeconds(0)
  // today.setMilliseconds(0)
  const today2 = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
  const dt = new Date(dateString)
  const dt2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())
  console.log(today2)
  console.log(dt2)
  return today2.getTime() >= dt2.getTime()
}

console.log(isAdult('2006-10-17'))
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
console.log(dt.toLocaleString(undefined, options))