import '../env.js';
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import todosRouter from './routes/todos.js';

const app = express();
const server = createServer(app);
const { MONGO_URI, PORT } = process.env;

app.use(cors());
app.use(express.static('public'));
//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todos', todosRouter);

import { specs } from './swagger/swagger.js';
import swaggerUi from 'swagger-ui-express';

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to mongodb');
  })
  .catch((e) => console.error(e));

app.get('/', (req, res) => {
  res.send({ todo: ['타입스크립트 공부', '저녁먹기', '자기'] });
});

server.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
