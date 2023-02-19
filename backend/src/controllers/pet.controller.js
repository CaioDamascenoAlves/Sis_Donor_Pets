const Pet = require("../model/pet.model");
const Pessoa = require("../model/pessoa.model");

exports.cratePet = async (req, res) => {
  try {
    const { nome, idade, tipo, raca } = req.body;
    // const pessoa = await Pessoa.findOne({ pessoaId });

    // if (!pessoa) {
    //   return res.status(400).json({ message: "Pessoa não encontrada." });
    // }

    const pet = new Pet({
      nome,
      idade,
      tipo,
      raca,
    //   pessoa: pessoa._id,
    });
    await pet.save();
    return res.status(200).json({
      message: "Pet criado com sucesso!",
      pet,
    });
  } catch (error) {
	return res.status(500).json({
		message: "Ocorreu um erro ao criar o Pet",
		error,
	});
  }
};
