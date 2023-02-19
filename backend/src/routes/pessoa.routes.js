const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoa.controller');
const auth = require('../middlewares/user.auth')

// ==> Rota responsável por Criar um nova 'Pessoa': (POST): localhost:3000/api/pessoa
router.post('/pessoa', auth, pessoaController.cratePessoa);

module.exports = router;