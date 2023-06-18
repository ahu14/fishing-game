const path = require('path');
const express = require('express');
const app = express();

let port = process.env.PORT || 3000;
let DOCS_DIR = path.join(__dirname, "../docs");
let HTML_FILE = path.join(DOCS_DIR, 'index.html');

app.use(express.static(DOCS_DIR));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});
app.get('/new', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(port, () => console.log('listening at 3000'));