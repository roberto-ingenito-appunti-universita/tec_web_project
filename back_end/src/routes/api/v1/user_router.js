import express from 'express';
import { User } from '../../../models/model_config.js'
import AuthController from '../../../controllers/auth_controller.js';

const userRouter = express.Router();
const authController = new AuthController();
const path = "/api/v1/user";

    userRouter.get(
        `${path}/:username`,
        authController.authenticateToken,
        async (req, res, next) => {
            try {
                const result = await User.findByPk(req.params.username);

                if (result === null) {
                    throw "User not found";
                } else {
                    res.status(200).json(result.dataValues)
                }
            } catch (error) {
                res.status(404).send(error);
            }
        }

    )

export default userRouter;