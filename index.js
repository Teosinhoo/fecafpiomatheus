const express = require ('express');
const path = require ('path');
const config = require('config');

const port = process.env.PORT || config.get('server.port');
const listaMarcacao = [
    {
    cliente:"a", 
    barbeiro: "a", 
    endereço:"a", 
    horario:"a",
}
];

const app = express();

app.set('port', port);

app.route('/Agendamentos').get(
    (req, res) => {
        res.status(200).json(listaMarcacao);
    }
)

app.listen(port, () => {
    ("Servidor iniciado na porta " + port);
})
console.log("iniciado")