let num = 4936

let a = num % 10
console.log(`ones: ${a}`)

let b = ((num - a) / 10) % 10
console.log(`tens: ${b}`)

let c = ((num - (b*10) -a) / 100) % 10
console.log(`hundreds: ${c}`)

let d = ((num - (c*100) - (b*10) -a) / 1000) % 10
console.log(`thousands: ${d}`)

