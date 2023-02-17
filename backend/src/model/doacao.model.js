const mongoose = require("mongoose");

const { Schema } = mongoose;

const doacaoSchema = new Schema(
  {
    pet: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pessoa: {
      type: Schema.Types.ObjectId,
      ref: "Pessoa",
    },
  },
  {
    timestamps: true,
    collection: "adocoes",
  }
);

const Doacao = mongoose.model("Doacao", doacaoSchema);

module.exports = Doacao;
