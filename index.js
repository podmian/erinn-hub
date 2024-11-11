const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid');

app.use(express.json());

let userList = [];

app.get('/users', (req, res) => {
    res.status(200).send(userList);
});

app.get('/users/:id', (req, res) => {
    userList.forEach((item) => {
        if (item.id === req.params.id) {
            res.status(200).send(item);
        }
    })
    res.status(404).send('Not Found');

})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = uuid.v6();
    userList.push(newUser);
    res.status(201).send(newUser.id);
});


app.listen(port, function() {console.log(`Listening on port ${port}`)});
