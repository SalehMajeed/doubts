const http = require('http');
const url = require('url');
const server = http.createServer(listenerCall);
const port = 3000;
const host = 'localhost';

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on http://${host}:${port}`)
})

function listenerCall(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const operationType = queryObject.func;
    const a = parseInt(queryObject.a);
    const b = parseInt(queryObject.b);
    const result = String(operation(operationType, a, b));
    res.end(result);
}

function operation(operationType, a, b) {
    switch (operationType) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiple':
            return a * b;
        default:
            return a / b;
    }
}
