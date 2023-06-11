const express = require('express');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
const port = 8080;

app.use(express.static('src/client'));

app.get('/', (req, res) => {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});
