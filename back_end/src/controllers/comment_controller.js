import { Comment } from "../models/model_config.js";

export default class CommentController {
    getComments(ideaID) { 
        return Comment.findAll({ where: { ideaFK: ideaID } }) 
    }

    async publishComment({ ideaFK, userFK, title }) {
        await Comment.create({
            ideaFK: ideaFK,
            userFK: userFK,
            title: title,
        });
    }
}