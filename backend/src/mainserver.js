import '../env.js';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import todosRouter from './routes/todos.js';
import fsTodosRouter from './routes/fsTodos.js';
import { specs } from './swagger/swagger.js';
import swaggerUi from 'swagger-ui-express';
import { LOCAL_JSON, MONGO_DB } from './constants/dataStore.js';

const { MONGO_URI, PORT } = process.env;

export class MainServer {
  constructor() {
    this.app = express();
  }

  async start(dataStore) {
    //Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
    this.app.use(express.json());
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

    if (dataStore === LOCAL_JSON) {
      this.app.use('/todos', fsTodosRouter);
    } else if (dataStore === MONGO_DB) {
      mongoose.Promise = global.Promise;

      mongoose
        .connect(MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log('Successfully connected to mongodb');
        })
        .catch((e) => console.error(e));

      this.app.use('/todos', todosRouter);
    }

    this.app.get('/', (req, res) => {
      res.send('Hello World');
    });

    this.app.listen(PORT, () => {
      console.log(`server running http://localhost:${PORT}`);
    });
  }
}
