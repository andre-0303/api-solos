import express, { json } from 'express';
import cors from 'cors';
import soloRoutes from './routes/soloRoutes';

const app = express();
app.use(cors());
app.use(json());
app.use('/uploads', express.static('uploads'));
app.use('/api/solos', soloRoutes);

export default app;
