const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

require('./routes')(app);

const PORT = 8080;
app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})

// var http = require('http');
// const PORT = 8080;
// const bookController = require("./controllers")
// const app = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var url = req.url;
//   if(url ==='/books') {
//     res.write(' Welcome to about us page'); 
//     res.app.bookController
//     res.end(); 
//   }else{
//     res.write('Hello World!');
//     res.end();
//   }
// });

// app.listen(PORT);
// console.log(`Server running at http://127.0.0.1:${PORT}/`);