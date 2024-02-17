import express from 'express';
import cors from 'cors';
import firebase from './firebase.js';
import config from './config.js';
import userRoute from './Route/userRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);