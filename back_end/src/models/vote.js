import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";

const Vote = connection.define(
    'vote',
    {
        isUpvote: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        ideaFK: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        userFK: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        timestamps: true, // generate createdAt
        updatedAt: false, // disable autogeneration of updatedAt
        freezeTableName: true, // disable the modification of tablenames
    }
);

export default Vote;