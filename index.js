const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send(`OK`);
})

app.listen(port, function() {console.log(`Listening on port ${port}`)});
