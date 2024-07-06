import { DataTypes } from "sequelize";
import connection from "../config/db_connection.js";

const Comment = connection.define(
    'comment',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 1000],
            }
        },
    },
    {
        timestamps: true, // generate createdAt
        updatedAt: false, // disable autogeneration of updatedAt
        freezeTableName: true, // disable the modification of tablenames
    }
);

export default Comment;