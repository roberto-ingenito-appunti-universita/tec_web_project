import { QueryTypes } from 'sequelize';
import connection from '../config/db_connection.js';

export default class IdeaController {

    // carica 500 idee
    // restituisce un array di oggetti
    async getIdeas() {
        return await connection.query(`
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
            LIMIT 500;
        `,
            { type: QueryTypes.SELECT }
        );

    }
}