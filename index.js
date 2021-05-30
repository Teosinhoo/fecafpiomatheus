const express = require ('express');
const path = require ('path');
const config = require('config');

const port = process.env.PORT || config.get('server.port');
const pedidoAtual = {
    cliente:"a", 
    barbeiro: "a", 
    endereço:"a", 
    horario:"a",
},

const app = express();

app.set('port', port);

app.route('/Agendamentos').get(
    (req, res) => {
        res.status(200).json(pedidoAtual);
    }
)

app.listen(port, () => {
    ("Servidor iniciado na porta " + port);
})
console.log("iniciado")