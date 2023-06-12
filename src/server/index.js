const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('src/client'));
app.use(express.static('dist'));

/*
app.get('/', (req, res) => {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' });
});
*/

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`Server is running on port 8081`);
    //console.log(`Your API key is ${process.env.API_KEY}`);
});

const getAnalyzedData = async (params) => {
    //console.log(params.term);
    const inputType = params.type === 'URL' ? 'url' : 'txt';
    const response = await fetch(
        'https://api.meaningcloud.com/sentiment-2.1?key=' +
            process.env.API_KEY +
            '&lang=auto&' +
            inputType +
            '=' +
            encodeURIComponent(params.term)
    );

    try {
        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

app.post('/nlp', (req, res) => {
    const params = req.body;
    //console.log(params);
    getAnalyzedData(params).then((data) => {
        //console.log(data);
        res.send(data);
    });
});
