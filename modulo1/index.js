const express = require('express');
const app = express();
app.use(express.json());

const users = ['Thiagueira', 'Victor', 'Thiago'];

//A porta será localhost:3000/

app.get('/')

app.get('/users/:id', (req, res) => {
    const {id} = req.params; 
    // Mesma coisa que const id = req.params.id
    // Para evitar usar o 'id' no final, faz a desestruturação em que coloca as {} na definição da const
    return res.json(users[id]);
});

app.get('/users', (req, res) => {
    return res.json(users);
});

app.post('/users', (req, res) => {
    const {name} = req.body; //para receber um parametro, recebe pelo req.body

    users.push(name);
    return res.json(users);
});

app.put('/users/:id', (req, res) => {
    const {name} = req.body;
    const {id} = req.params;

    users[id] = name;

    return res.json(users);
})

app.delete('/users/:id', (req, res) =>{
    const {id} = req.params;
    users.splice(id, 1);

    return res.json(users);
    
})

app.listen(3000);

/* ANOTAÇÕES
    PARA O FORMATO JSON:
    {
        "CHAVE": "RESPOSTA",
        "CHAVE2": "RESPOSTA2"
    }

    req.params = recebe o parametro que está sendo passado na URL - para usar faz o /:
    req.
    req.json = recebe os dados do body   
    Metodo put - edita
    Metodo post - cria
    Metodo delete - deleta
    Metodo get - Lê


*/
