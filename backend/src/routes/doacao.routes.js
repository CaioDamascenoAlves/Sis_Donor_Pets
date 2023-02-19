const express = require('express');
const router = express.Router();
const doacaoController = require('../controllers/doacao.controller');
const auth = require('../middlewares/user.auth');

// ==> Rota responsável por Criar um nova 'Doacao': (POST): localhost:3000/api/doacao
router.post('/doacao', auth, doacaoController.createDoacao);

// ==> Rota responsável por Buscar uma 'Doacao': (GET): localhost:3000/api/doacao
router.get('/doacao', auth, doacaoController.getDoacoes);

module.exports = router;