import mongoose from 'mongoose';

const soloSchema = new mongoose.Schema({
  nome: String,
  banda: String,
  imagem: String,
  audio: String
});

const Solo = mongoose.model('Solo', soloSchema);
export default Solo;
