import express from 'express';
import AuthController from '../../../controllers/auth_controller.js';
import IdeaController from '../../../controllers/idea_controller.js';

const ideaRouter = express.Router();

const authController = new AuthController();
const ideaController = new IdeaController();

const path = "/api/v1/idea";

ideaRouter.get(
    `${path}/load`,
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            const ideas = await ideaController.getIdeas(req.query.username);
            res.status(200).json(ideas);
        } catch (error) {
            res.status(404).send(error);
        }
    }
)

ideaRouter.post(
    `${path}/up-vote`,
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            await ideaController.upVote({
                ideaID: req.body.ideaID,
                username: req.body.username,
            });
            res.status(200).json({});
        } catch (error) {
            res.status(404).json({});;
        }
    }
)

ideaRouter.post(
    `${path}/down-vote`,
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            await ideaController.downVote({
                ideaID: req.body.ideaID,
                username: req.body.username,
            });
            res.status(200).json({});
        } catch (error) {
            res.status(404).json(error);
        }
    }
)

export default ideaRouter;




