const http = require('http');

const PORT = 8080;
const SERVICE_NAME = 'Node-ECS-Microservice';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(`Request received for: ${req.url}`);

    if (req.url === '/health') {
        res.end('Status: OK');
    } else {
        res.end(`Hello from ${SERVICE_NAME}! Deployed via GitHub Actions.`);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Service: ${SERVICE_NAME}`);
});