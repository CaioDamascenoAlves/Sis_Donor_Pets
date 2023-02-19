const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

// ==> Rota responsável por Criar um novo 'Pet': (POST): localhost:3000/api/pet
router.post('/pet', petController.cratePet);

module.exports = router;