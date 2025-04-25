require('dotenv').config();
import { listen } from './app';
import { connect } from 'mongoose';

connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB conectado');
    listen(3000, () => console.log('Servidor rodando na porta 3000'));
  })
  .catch(err => console.error(err));
