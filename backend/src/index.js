import { MainServer } from './mainserver.js';
import { LOCAL_JSON, MONGO_DB } from './constants/dataStore.js';

const mainServer = new MainServer();
mainServer.start(MONGO_DB);
