import express from 'express';
import AuthController from '../../../controllers/auth_controller.js';
import IdeaController from '../../../controllers/idea_controller.js';

const ideaRouter = express.Router();

const authController = new AuthController();
const ideaController = new IdeaController();

ideaRouter.get(
    '/api/v1/idea/load',
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            const ideas = await ideaController.getIdeas();
            res.status(200).json(ideas);
        } catch (error) {
            res.status(404).send(error);
        }
    }
)

export default ideaRouter;




