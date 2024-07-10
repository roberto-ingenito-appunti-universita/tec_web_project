import express from 'express';
import AuthController from '../../../controllers/auth_controller.js';
import User from '../../../models/user.js';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

authRouter.post(
    '/api/v1/auth/signin',
    async (req, res, next) => {
        try {
            const user = await new AuthController().signin({
                username: req.body.username,
                password: req.body.password,
            });

            if (user) {
                const token = jwt.sign({ username: req.body.username }, process.env.SECRET_KEY, { expiresIn: "1h" });
                res.status(200).json({ user: user, token: token });
            } else {
                res.status(401).json({ message: 'InvalidCredential' })
            }
        } catch (error) {
            if (error.name) {
                res.status(400).json({ message: error.name })
            } else {
                res.status(400).json({ message: error })
            }
        }
    }
)

authRouter.post(
    '/api/v1/auth/signup',
    async (req, res, next) => {
        try {
            const newUser = await new AuthController().signup({
                username: req.body.username,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            });

            const token = jwt.sign({ username: req.body.username }, process.env.SECRET_KEY, { expiresIn: "1h" });

            res.status(200).json({ user: newUser, token: token });
        } catch (error) {
            if (error.name) {
                res.status(400).json({ message: error.name })
            } else {
                res.status(400).json({ message: error })
            }
        }
    }
)

export default authRouter;