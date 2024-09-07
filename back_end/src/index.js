// nodemon --exec node src/index.js

import express from "express";
import authRouter from "./routes/api/v1/auth_router.js";
import userRouter from "./routes/api/v1/user_router.js";
import ideaRouter from "./routes/api/v1/idea_router.js";
import commentRouter from "./routes/api/v1/comment_router.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express()

app.use(cors())
app.use(express.json())

/* routes */
app.use(userRouter);
app.use(authRouter);
app.use(ideaRouter);    
app.use(commentRouter);

app.listen(PORT);
console.log('server started');