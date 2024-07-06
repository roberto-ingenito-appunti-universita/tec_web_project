// nodemon --exec node src/index.js

import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import connection from "./config/db_connection.js";
import User from "./models/user.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/* const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`ciao`);
});

app.get('/indice', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/libro/:book_id([0-9]+)/capitolo/:chapter_number([0-9]+)', (req, res) => {
    res.send(req.params);
});

app.listen(PORT);

console.log('server started'); */