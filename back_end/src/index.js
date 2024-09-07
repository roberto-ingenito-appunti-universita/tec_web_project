// nodemon --exec node src/index.js

import express from "express";
import authRouter from "./routes/api/v1/auth_router.js";
import userRouter from "./routes/api/v1/user_router.js";
import ideaRouter from "./routes/api/v1/idea_router.js";
import commentRouter from "./routes/api/v1/comment_router.js";
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config()

const PORT = 3000;
const app = express()

if (process.argv[2] === "debug") {
  app.use(cors())
} else {
  app.use(cors({
    origin: 'https://tec-web-project-frontend.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
}

app.use(express.json())

/* routes */
app.use(userRouter);
app.use(authRouter);
app.use(ideaRouter);
app.use(commentRouter);

if (process.argv[2] === "debug") {
  app.listen(PORT, "localhost");
} else {
  app.listen(PORT);
}
console.log('server started');
