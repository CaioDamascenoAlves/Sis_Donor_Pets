const Doacao = require("../model/doacao.model");
const Pet = require("../model/pet.model");
const Pessoa = require("../model/pessoa.model");

exports.createDoacao = async (req, res) => {
  try {
    const user = req.userData;
    const pet = await Pet.findById(req.body.pet);
    const pessoa = await Pessoa.findOne({ user: user._id });

    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }

    if (pet.adotado) {
      return res.status(400).json({ message: "Pet já foi adotado" });
    }

    if (!pessoa) {
      return res.status(400).json({
        message: "Você precisa criar uma pessoa antes de fazer uma doação",
      });
    }

    const newDoacao = new Doacao({
      data: req.body.data,
      pet: pet._id,
      user: user._id,
      pessoa: pessoa._id,
    });

    pet.adotado = true;
    await pet.save();
    await newDoacao.save();

    return res.status(200).json({
      message: "Doação criada com sucesso!",
      doacao: newDoacao,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar a Doação",
      error,
    });
  }
};

exports.getDoacoes = async (req, res) => {
  try {
    const doacoes = await Doacao.find().populate("pet pessoa user");
    return res.status(200).json(doacoes);
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao buscar as doações",
      error,
    });
  }
};
