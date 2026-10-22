
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${hostname}:${port}`);

    const x = Number(url.searchParams.get('x'));
    const y = Number(url.searchParams.get('y'));

    if (req.method !== 'GET') {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        return;
    }

    const resultX = Math.abs(x);
    const resultY = Math.abs(y);

    const message = `Math.abs(${x}) is ${resultX} and Math.abs(${y}) is ${resultY}`;

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
