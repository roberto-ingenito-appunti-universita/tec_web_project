import { QueryTypes, Sequelize } from 'sequelize';
import connection from '../config/db_connection.js';
import Idea from '../models/idea.js';
import Vote from '../models/vote.js';

export default class IdeaController {

    // carica 500 idee
    // restituisce un array di oggetti
    async getIdeas(username) {
        const result = await connection.query(`
            SELECT 
                i.*,
                (SELECT count(*) FROM public.vote as v WHERE v."ideaFK" = i.id AND v."isUpvote" = true)::INTEGER as up_vote_quantity,
                (SELECT count(*) FROM public.vote as v WHERE v."ideaFK" = i.id AND v."isUpvote" = false)::INTEGER as down_vote_quantity,
                (SELECT count(*) FROM public.comment as c WHERE c."ideaFK" = i.id)::INTEGER as comment_quantity,
                (SELECT v."isUpvote" FROM public.vote as v WHERE v."userFK" = '${username}' AND v."ideaFK" = i.id) as is_up_vote
            FROM 
                public.idea as i
            ORDER BY 
                i."createdAt" DESC
            LIMIT 500;
        `,
            {
                type: QueryTypes.SELECT,
                raw: true,
            }
        );
        return result;
    }

    async upVote({ username, ideaID }) {
        const vote = await Vote.findOne({ where: { userFK: username, ideaFK: ideaID } });

        if (vote) {
            // if vote exists and is downVote
            // then move from downVote to upVote
            // 
            // else is upVote and the user tap on upVote, then remove the vote
            if (!vote.dataValues.isUpvote) {
                await Vote.update(
                    { isUpvote: true },
                    { where: { userFK: username, ideaFK: ideaID } }
                );
            } else {
                await vote.destroy();
            }
        } else {
            await Vote.create({
                isUpvote: true,
                userFK: username,
                ideaFK: ideaID,
            });
        }

    }

    async downVote({ username, ideaID }) {
        const vote = await Vote.findOne({ where: { userFK: username, ideaFK: ideaID } });

        if (vote) {
            // if vote exists and is upVote
            // then move from upVote to downVote
            // 
            // else is downVote and the user tap on downVote, then remove the vote
            if (vote.dataValues.isUpvote) {
                await Vote.update(
                    { isUpvote: false },
                    { where: { userFK: username, ideaFK: ideaID } }
                );
            } else {
                await vote.destroy();
            }
        } else {
            await Vote.create({
                isUpvote: false,
                userFK: username,
                ideaFK: ideaID,
            });
        }
    }

    async publishIdea({ username, title, description }) {
        await Idea.create({
            userFK: username,
            title: title,
            description: description,
        });
    }
}