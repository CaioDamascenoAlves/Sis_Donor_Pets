const express = require('express');
const router = express.Router();
const userController = require('../controllers/donor.controller');
const auth = require('../middlewares/donor.auth');

// ==> Rota responsável por Criar um novo 'User': (POST): localhost:3000/api/v1/register
router.post('/register', auth, userController.registerNewUser);

module.exports = router;