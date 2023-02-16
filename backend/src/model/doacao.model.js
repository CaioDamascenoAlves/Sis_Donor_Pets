const mongoose = require("mongoose");

const { Schema } = mongoose;

const adocaoSchema = new Schema(
  {
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
      },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    collection: "adocoes",
  }
);

const Adocao = mongoose.model("Adocao", adocaoSchema);

module.exports = Adocao;

