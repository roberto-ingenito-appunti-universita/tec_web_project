import express from 'express';
import { Idea } from '../../../models/model_config.js'
import AuthController from '../../../controllers/auth_controller.js';
import connection from '../../../config/db_connection.js';
import { QueryTypes } from 'sequelize';

const ideaRouter = express.Router();

const authController = new AuthController();

ideaRouter.get(
    '/api/v1/ideas',
    authController.authenticateToken,
    async (req, res, next) => {
        try {
            const result = await connection.query(`
                    WITH ideas AS (
                        SELECT 
                            i.*,
                            (SELECT count(*) FROM public.vote as v WHERE v."ideaFK" = i.id AND v."isUpvote" = true) as up_vote_quantity,
                            (SELECT count(*) FROM public.vote as v WHERE v."ideaFK" = i.id AND v."isUpvote" = false) as down_vote_quantity,
                            (SELECT count(*) FROM public.comment as c WHERE c."ideaFK" = i.id) as comment_quantity
                        FROM 
                            public.idea as i
                    )
                    SELECT *
                    FROM ideas
                    ORDER BY 
                        (up_vote_quantity - down_vote_quantity) DESC,
                        (up_vote_quantity + down_vote_quantity) DESC,
                        "createdAt" DESC,
                        id DESC
                    LIMIT 5000;
                `,
                { type: QueryTypes.SELECT }
            );

            res.status(200).json(result);
        } catch (error) {
            res.status(404).send(error);
        }
    }
)

export default ideaRouter;




