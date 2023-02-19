const Pessoa = require("../model/pessoa.model");

exports.cratePessoa = async (req, res) => {
  try {
    // verifica se o usuário já criou uma pessoa
    const pessoaExistente = await Pessoa.findOne({ criado_por: req.userData._id });
    if (pessoaExistente) {
      return res.status(400).json({ message: 'Você já criou uma pessoa' });
    }

    // cria a pessoa
    const pessoa = new Pessoa({
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      documento: req.body.documento,
      criado_por: req.userData._id,
    });
    await pessoa.save();

    return res.status(200).json({
      message: "Pessoa criada com sucesso!",
      pessoa,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocorreu um erro ao criar a Pessoa",
      error,
    });
  }
};
