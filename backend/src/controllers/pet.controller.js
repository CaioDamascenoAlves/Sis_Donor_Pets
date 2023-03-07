const Pessoa = require("../model/pessoa.model");
const Pet = require("../model/pet.model");
const { getAsync, setAsync } = require("../config/redis.config");

exports.createPet = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    const newPet = new Pet({
      nome: req.body.nome,
      idade: req.body.idade,
      tipo: req.body.tipo,
      raca: req.body.raca,
      pessoa: pessoa._id,
    });
    await newPet.save();

    return res.status(200).json({
      message: "Pet criado com sucesso!",
      pet: newPet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar o Pet",
      error,
    });
  }
};

exports.getPet = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    // Verifica se o pet pertence à pessoa do usuário logado
    const pet = await Pet.findOne({ id: req.params._id, pessoa: pessoa._id });
    if (!pet) {
      return res.status(404).json({
        message: "Pet não encontrado",
      });
    }

    return res.status(200).json({
      pet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao obter o Pet",
      error,
    });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    const pet = await Pet.findOneAndUpdate(
      { id: req.params._id, pessoa: pessoa._id },
      {
        nome: req.body.nome,
        idade: req.body.idade,
        tipo: req.body.tipo,
        raca: req.body.raca,
        adotado: req.body.adotado,
      },
      { new: true }
    );

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    return res.status(200).json({
      message: "Pet atualizado com sucesso!",
      pet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao atualizar o Pet",
      error,
    });
  }
};

exports.getPetC = async (req, res) => {
  try {
    const user = req.userData;

    // Verifica se o usuário já criou uma pessoa
    const pessoa = await Pessoa.findOne({ user: user._id });
    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de criar um pet",
      });
    }

    // Busca todos os pets que pertencem à pessoa do usuário logado
    const cachedPets = await getAsync(`pets:${pessoa._id}`);
    let pets;
    if (cachedPets) {
      console.log(`Buscando pets do cache para a pessoa ${pessoa._id}`);
      pets = JSON.parse(cachedPets);
    } else {
      console.log(
        `Buscando pets no banco de dados para a pessoa ${pessoa._id}`
      );
      pets = await Pet.find({ pessoa: pessoa._id });
      if (pets.length) {
        console.log(`Salvando pets do cache para a pessoa ${pessoa._id}`);
        await setAsync(`pets:${pessoa._id}`, JSON.stringify(pets));
      }
    }

    // Retorna a lista de pets da pessoa do usuário logado
    return res.status(200).json({
      pets,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao obter os Pets",
      error,
    });
  }
};
