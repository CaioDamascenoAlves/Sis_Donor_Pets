// server.js
const app = require ('./src/app');

const port = process.env.PORT || 3000;

const server = () => {
    app.listen(port, () =>{
        console.log('Aplicação executando na porta ...:', port);
    });
};

module.exports = server;
