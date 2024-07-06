import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";

const Vote = connection.define(
    'vote',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        isUpvote: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        timestamps: true, // generate createdAt
        updatedAt: false, // disable autogeneration of updatedAt
        freezeTableName: true, // disable the modification of tablenames
    }
);

export default Vote;