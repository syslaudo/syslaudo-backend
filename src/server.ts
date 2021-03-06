import 'reflect-metadata';
import './database/connect';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import routes from './routes';
import { task } from './util/taskExam';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(task);

app.listen(process.env.PORT || 3000, () =>
  console.log('🔥 Server started at http://localhost:3000'),
);
