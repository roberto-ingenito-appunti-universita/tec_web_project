import Idea from "./idea.js";
import User from "./user.js";
import Vote from "./vote.js";
import Comment from "./comment.js";

Idea.hasMany(Vote, { foreignKey: { name: "ideaFK", allowNull: false }, onDelete: "CASCADE" });
Vote.belongsTo(Idea, { foreignKey: { name: "ideaFK", allowNull: false } });

Idea.hasMany(Comment, { foreignKey: { name: "ideaFK", allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(Idea, { foreignKey: { name: "ideaFK", allowNull: false } });

User.hasMany(Comment, { foreignKey: { name: "userFK", allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: { name: "userFK", allowNull: false } });

User.hasMany(Idea, { foreignKey: { name: "userFK", allowNull: false }, onDelete: "CASCADE" });
Idea.belongsTo(User, { foreignKey: { name: "userFK", allowNull: false } });

User.hasMany(Vote, { foreignKey: { name: "userFK", allowNull: false }, onDelete: "CASCADE" });
Vote.belongsTo(User, { foreignKey: { name: "userFK", allowNull: false } });


export { Idea, Vote, Comment, User };