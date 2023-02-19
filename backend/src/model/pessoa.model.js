const mongoose = require("mongoose");

const { Schema } = mongoose;

const pessoaSchema = new Schema(
  {
    rua: { type: String, required: true },
    numero: { type: Number, required: true },
    complemento: { type: String, required: true },
    documento: { type: String, required: true },
    criado_por: {
      type: Schema.Types.ObjectId,
      ref: "User",
	  required: true
    },
  },
  {
    timestamps: true,
    collection: "pessoas",
  }
);

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

module.exports = Pessoa;
