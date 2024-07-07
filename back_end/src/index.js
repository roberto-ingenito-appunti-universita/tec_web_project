// nodemon --exec node src/index.js

import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connection from "./config/db_connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = 3000;

app.listen(PORT);

console.log('server started');
