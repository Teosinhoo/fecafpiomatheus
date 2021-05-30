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

const Entrar = express();

Entrar.set('port', port);

Entrar.route('/Agendamentos').get(
    (req, res) => {
        res.status(200).json(pedidoAtual);
    }
)

Entrar.listen(port, () => {
    ("Servidor iniciado na porta " + port);
})
console.log("iniciado")