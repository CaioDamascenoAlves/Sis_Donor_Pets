const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/user.auth');

// ==> Rota responsável por Criar um novo 'User': (POST): localhost:3000/api/register
router.post('/register',  userController.registerNewUser);

// ==> Rota responsável por Logar o 'User': (POST): localhost:3000/api/login
router.post('/login',  userController.loginUser);

// ==> Rota responsável por Criar um novo 'User': (GET): localhost:3000/api/register
router.get('/userProfile', auth, userController.returnUserProfile);

// ==> Rota responsável por Criar um novo 'User': (GET): localhost:3000/api/register
router.delete('/deleteUser', auth, userController.deleteUser);

module.exports = router;