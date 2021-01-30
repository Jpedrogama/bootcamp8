const express = require('express');

const app = express();

const users = ['Joao', 'Victor', 'Thiago'];

//A porta será localhost:3000/

app.get('/users/:index', (req, res) => {
    const {index} = req.params; 
    // Mesma coisa que const id = req.params.id
    // Para evitar usar o 'id' no final, faz a desestruturação em que coloca as {} na definição da const
    return res.json(users[index]);
});

app.listen(3000);
