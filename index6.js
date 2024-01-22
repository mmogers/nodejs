const http = require('http') //module built in, don't need to install
const fs = require('fs') //module allows to work with files and folders

let server = http.createServer((req, res) =>{ //call back anonim function , will executer after we create a server
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}) //text - html

    if(req.url == '/'){ //main page {
        const stream = fs.createReadStream('./templates/index.html').pipe(res)
    } else if (req.url == '/about'){ //http://localhost:3000/about
        const stream = fs.createReadStream('./templates/about.html').pipe(res)
    } else{
        const stream = fs.createReadStream('./templates/error.html').pipe(res)
    }

    //const stream = fs.createReadStream('./templates/index.html') //createReadStream - doesn't wait for the end of reading this file, will read by small portions and send to the website 
    //stream.pipe(res) //sends small portions of info to site, so a user can see something while all is read
    //for the response to user we will send res

})

const PORT =  3000 //url addres of our server
//const HOST = '127.0.0.1'
const HOST = 'localhost' //the same as above

server.listen(PORT,HOST, () =>{ //3 parameter - call back function - after the server starts
    console.log(`Server runs : http://${HOST}:${PORT}`)

})


