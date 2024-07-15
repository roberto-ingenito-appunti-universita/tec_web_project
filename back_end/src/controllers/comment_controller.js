import { Comment } from "../models/model_config.js";

export default class CommentController {
    getComments(ideaID) {
        return Comment.findAll({
            where: { ideaFK: ideaID },
            order: [['createdAt', 'DESC']],
            limit: 1000,
        })
    }

    async publishComment({ ideaFK, userFK, text }) {
        return await Comment.create({
            ideaFK: ideaFK,
            userFK: userFK,
            text: text,
        });
    }
}