
const HTTP_POST = "POST";
const HTTP_GET = "GET";
module.exports = class ConfigRequest {

  constructor() {
    this.myCallBack = { POST: {}, GET: {} };
    this.myMethodsHttp = this.myCallBack;
    this.myAppCallBack = {};
    this.configRequestMethods();
  }
  getMyAppCallBack() {
    return this.myAppCallBack;
  }

  configRequestMethods() {
    this.myAppCallBack = {
      get: (uri, callback) => {
        if (this.myCallBack[HTTP_GET])
          this.myCallBack[HTTP_GET][uri] = callback;
      },
      post: (uri, callback) => {
        if (this.myCallBack[HTTP_POST])
          this.myCallBack[HTTP_POST][uri] = callback;
      }
    };
  }

  configResponse(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.status = (status) => {
      res.writeHead(status);
      return res;
    };
    res.send = (data) => {
      if (typeof (data) == "object") {
        data = JSON.stringify(data);
      }
      res.end(data, 'utf-8');
      return res;
    };
  }

  executeRequestMethod(req, res) {
    var uri = req.url;
    this.parseResponseBody(req, res);
    this.configResponse(req, res);
    if (this.myMethodsHttp[req.method]) {
      const currentMethod = this.myMethodsHttp[req.method];
      const dataUri = this.parserUri(this.myCallBack[req.method], uri);
      if (dataUri) {
        uri = dataUri.__uri_real;
        delete dataUri.__uri_real;
        req.params = dataUri;
      }

      if (currentMethod[uri]) {
        currentMethod[uri](req, res);
      } else {
        res.status(404).send('not found');
      }
    }
  }

  parserUri(allUris, currentUri) {
    let parametros;
    const allPartUris = Object.keys(allUris);
    for (let idx = 0; idx < allPartUris.length; idx++) {
      const key = allPartUris[idx];
      const uriPart = key.split("/");
      const currentPartUri = currentUri.split("/");
      if (uriPart.length == currentPartUri.length) {
        for (let index = 0; index < currentPartUri.length; index++) {
          const currentUri = currentPartUri[index];
          const keyLocal = uriPart[index];
          const foundData = keyLocal.indexOf(":") > -1;
          if (currentUri == keyLocal || foundData) {
            if (foundData) {
              if (!parametros) {
                parametros = { __uri_real: key };
              }
              const keyData = keyLocal.substring(1);
              parametros[keyData] = currentUri;
            }
          } else {
            break;
          }
        }

      }
      if (parametros) {
        break;
      }

    }

    return parametros;
  }

  parseResponseBody(req, res) {
    if (req.method != HTTP_GET) {

      var body = '';
      req.on('data', function (data) {
        body += data;
      });
      req.on('end', function () {
        req.params = JSON.parse(body);
      });
    }
  }

};
