import express from 'express';
import { checkUserAuth } from '../services/check_user_auth.js';
import { User } from '../models/model_config.js'

const userRouter = express.Router();

userRouter.get(
    '/user/:username',
    checkUserAuth,
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