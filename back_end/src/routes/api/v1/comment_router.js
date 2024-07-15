import express from 'express';
import AuthController from '../../../controllers/auth_controller.js';
import CommentController from '../../../controllers/comment_controller.js';

const commentRouter = express.Router();

const authController = new AuthController();
const commentController = new CommentController();

const path = "/api/v1/comment";

commentRouter.get(
    `${path}/load/:ideaID`,
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            const comments = await commentController.getComments(req.params.ideaID);
            res.status(200).json(comments);
        } catch (error) {
            res.status(404).send(error);
        }
    }
)

commentRouter.post(
    `${path}/publish`,
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            console.log(req.body);
            const newComment = await commentController.publishComment({
                ideaFK: req.body.ideaID,
                userFK: req.body.username,
                text: req.body.text,
            });
            res.status(200).json(newComment);
        } catch (error) {
            res.status(404).json({});;
        }
    }
)

export default commentRouter;




