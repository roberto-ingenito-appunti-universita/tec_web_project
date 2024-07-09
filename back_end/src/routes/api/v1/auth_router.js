import express from 'express';

const authRouter = express.Router();

authRouter.get(
    '/api/v1/auth/signin',
    async (req, res, next) => {
        res.status(200).json({ a: "a" });
    }
)

authRouter.get(
    '/api/v1/auth/signup',
    async (req, res, next) => {
        res.status(200).json({ req: "req" });
    }
)

export default authRouter;