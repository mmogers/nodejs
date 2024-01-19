//lesson 2
const os = require('os') //os - built in module

let res = os.platform()
console.log(`My OS: ${res}`) //win32
console.log('______________________________')


const my_math = require('./my_math')
console.log(`The result of addition is: ${my_math.add(10,2)}`)
console.log(`The result of multiplication is: ${my_math.multiply(10,2)}`)

