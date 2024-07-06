import Idea from "./idea.js";
import User from "./user.js";
import Vote from "./vote.js";
import Comment from "./comment.js";

Idea.hasMany(Vote, { foreignKey: { name: 'vote_fk', allowNull: false }, onDelete: "CASCADE" });
Vote.belongsTo(Idea, { foreignKey: { name: 'vote_fk' } });

Idea.hasMany(Comment, { foreignKey: { name: 'comment_fk', allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(Idea, { foreignKey: { name: 'comment_fk' } });

User.hasMany(Comment, { foreignKey: { name: 'comment_fk', allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: { name: 'comment_fk' } });

User.hasMany(Idea, { foreignKey: { name: 'idea_fk', allowNull: false }, onDelete: "CASCADE" });
Idea.belongsTo(User, { foreignKey: { name: 'idea_fk' } });

User.hasMany(Vote, { foreignKey: { name: 'vote_fk', allowNull: false }, onDelete: "CASCADE" });
Vote.belongsTo(User, { foreignKey: { name: 'vote_fk' } });


