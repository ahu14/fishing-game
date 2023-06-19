const path = require('path');
const express = require('express');
const app = express();

let port = process.env.PORT || 3000;
let DOCS_DIR = path.join(__dirname, "../docs");


app.use(express.static(DOCS_DIR));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(DOCS_DIR, 'index.html'));
});

//app.listen(port, () => console.log('listening at 3000'));