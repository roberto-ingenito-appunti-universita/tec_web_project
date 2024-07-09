// nodemon --exec node src/index.js

import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import userRouter from "./routes/user_router.js";
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express()

app.use(cors())
app.use(express.json())


/* routes */
app.use(userRouter);

app.listen(PORT);
console.log('server started');
