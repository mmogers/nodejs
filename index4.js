const fs = require('fs')

//fs.mkdirSync('text-files') //synch function


// fs.mkdir('text-files', () => {  //asynch func
//     fs.writeFile('./text-files/some.txt' , 'Hello' , () => {})
// })

// 2 parameters for asynch functions, need a call back function
fs.unlink('./text-files/some.txt', () =>{
    fs.rmdir('./text-files' , () =>{})
}) 