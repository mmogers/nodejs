const http = require('http') //module built in, don't need to install

let server = http.createServer((req, res) =>{ //call back anonim function , will executer after we create a server
    //what server shouul letern after running the web page
    //res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})  //- just text
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}) //text - html
    //always should send characteristics to the page; 
    //200- page is available;content-type - what content will be on the page;
    //utf8 - russian and english will be ok
    //need to add also html code which will be shown on the page
    //res.end('Hello Node.js') //- only text
    //res.end('Hello <br> <b> Node.js</b>') //with html
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node JS</title>
    </head>
    <body>
        <h1>Hello Node</h1>
    </body>
    </html>`) //html code
})

const PORT =  3000 //url addres of our server
//const HOST = '127.0.0.1'
const HOST = 'localhost' //the same as above

server.listen(PORT,HOST, () =>{ //3 parameter - call back function - after the server starts
    console.log(`Server runs : http://${HOST}:${PORT}`)
})


