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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

mongoose
  .connect(MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to mongodb');
    // console.log('db.url: ', db.url);
    // console.log('db.mongoose: ', db.mongoose);
  })
  .catch((e) => console.error(e));

app.get('/', (req, res) => {
  res.send({ todo: ['타입스크립트 공부', '저녁먹기', '자기'] });
});

app.use('/todos', todosRouter);

server.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
