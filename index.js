RequestConfig = require('./utils/config-request');

const configRequest = new RequestConfig();
var http = require('http');
const PORT = 8080;

require('./routes')(configRequest.getMyAppCallBack());


const app = http.createServer((req, res) => { configRequest.executeRequestMethod(req, res); });

app.listen(PORT);
console.log(`Server running at http://127.0.0.1:${PORT}/`);