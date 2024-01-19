const fs = require('fs')//fs file system, built in module


let result = fs.readFileSync('some.txt' , 'utf-8')

console.log(result)

//fs.writeFileSync('some.txt' , '\nHello !') //opens file , deletes everything, and writes
//fs.writeFileSync('some.txt' , result + '\nHello !') //opens file , and writes in addition to existing text

//readFile, writeFile - asyncronous functions, 
//compiler will just run those functions and will not wait untill the full execution and will proceed further
//if we have a giant file - better to use asynch method , not to wait a loading time

let res = fs.readFile('some.txt', 'utf-8', (err,data) =>{
    fs.writeFile('some.txt', data + 'Hello World!', (err,data) => {
        console.log('all worked!')
    })
} ) 
// 3rd parameter - callback function, after we performed a main function



