
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<!DOCTYPE html>');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<title>Nishanth Actor Information Table</title>');
    res.write('</head>');
    res.write('<body>');

    res.write('<h1>Nishanth Actor Information Table</h1>');

    res.write('<table border="1" cellpadding="10">');
    res.write('<tr><th>Actor</th><th>Movie</th><th>Reason I Like Them</th></tr>');
    res.write('<tr><td>Allu Arjun</td><td>Pushpa</td><td>Dance and acting</td></tr>');
    res.write('<tr><td>Prabhas</td><td>Baahubali</td><td>Action scenes</td></tr>');
    res.write('<tr><td>Mahesh Babu</td><td>Srimanthudu</td><td>Screen presence</td></tr>');
    res.write('</table>');

    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
