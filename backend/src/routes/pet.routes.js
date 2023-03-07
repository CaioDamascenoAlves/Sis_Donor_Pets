const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet.controller");
const auth = require("../middlewares/user.auth");
const cache = require("../middlewares/cache");

// ==> Rota responsável por Criar um novo 'Pet': (POST): localhost:3000/api/pet
router.post("/pet", auth, petController.createPet);

// ==> Rota responsável por Buscar os 'Pets' por usuario Logado: (GET): localhost:3000/api/pet
router.get("/pet", auth, petController.getPet);

// ==> Rota responsável por Editar 'Pet' do usuario logado: (PUT): localhost:3000/api/pet
router.put("/pet", auth, petController.updatePet);

router.get("/petcached", auth, cache.cache, petController.getPetC);

module.exports = router;