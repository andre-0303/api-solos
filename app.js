import express from 'express';
import cors from 'cors';
import soloRoutes from './routes/soloRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/solos', soloRoutes);

export default app;
