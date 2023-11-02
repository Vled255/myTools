const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

const API_SERVICE_URL = 'http://127.0.0.1';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.use(cors({
    exposedHeaders: '*'
}));

app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    ws: true,
    logLevel: 'debug'
}));
const PORT = '5500';
const HOST = '127.0.0.1'; 
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy Server at ${HOST}:${PORT}`);
})