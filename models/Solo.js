import mongoose from "mongoose";

const soloSchema = new mongoose.Schema({
    nome: String,
    banda: String,
    imagem: String,
    audio: String
});

module.exports = mongoose.model('Solo', soloSchema);