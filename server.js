import http from 'http';
import https from 'https';
import fs from 'fs';
import app from './app.js';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

https.createServer({
    cert: fs.readFileSync('./SSL/code.crt'),
    key: fs.readFileSync('./SSL/code.key')
}, app).listen(3001, () => console.log('listening on https://localhost:3001'));

server.listen(port, console.log(`Server listening on http://localhost:${port}`));