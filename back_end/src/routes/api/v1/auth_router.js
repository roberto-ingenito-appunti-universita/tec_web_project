import express from 'express';

const authRouter = express.Router();

authRouter.post(
    '/api/v1/auth/signin',
    (req, res, next) => {
        res.status(200).json({message: "tutt appost"});
    }
)

authRouter.post(
    '/api/v1/auth/signup',
    (req, res, next) => {
        res.status(200).json({message: "tutt appost"});
    }
)

export default authRouter;